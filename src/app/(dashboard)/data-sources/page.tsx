"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Database, Link2, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { recordSynthesisRun } from "@/app/actions";

export default function DataSourcesPage() {
    const [connString, setConnString] = useState("postgresql://default:user@ep-fancy-snowflake-1234.us-east-1.aws.neon.tech/neondb");
    const [tableName, setTableName] = useState("users");
    const [status, setStatus] = useState("IDLE"); // IDLE, CONNECTING, SYNTHESIZING, DONE
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);
    
    const handleConnectAndSynthesize = async () => {
        setStatus("CONNECTING");
        setLogs(["Initiating secure database handshake..."]);
        setProgress(10);
        
        try {
            const formData = new FormData();
            formData.append("connection_string", connString);
            formData.append("tableName", tableName);
            
            // Just mapped form data to snake_case logic
            const bodyData = new FormData();
            bodyData.append("connection_string", connString);
            bodyData.append("table_name", tableName);
            bodyData.append("model_type", JSON.parse(localStorage.getItem("adsynth_modelConfig") || "{}").modelType || "gaussian");
            bodyData.append("epochs", JSON.parse(localStorage.getItem("adsynth_modelConfig") || "{}").epochs || "10");

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
            const response = await fetch(`${apiUrl}/api/synthesize/db`, {
                method: "POST",
                headers: {
                    "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY || ""
                },
                body: bodyData,
            });

            if (!response.body) throw new Error("No response body");

            setStatus("SYNTHESIZING");
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                const textChunk = decoder.decode(value);
                const events = textChunk.split('\n\n').filter(Boolean);

                for (const ev of events) {
                    if (ev.startsWith('data: ')) {
                        try {
                            const data = JSON.parse(ev.replace('data: ', ''));

                            if (data.error) {
                                throw new Error(data.error);
                            }

                            if (data.status) {
                                setLogs(prev => [...prev, data.status]);
                            }
                            
                            if (data.progress) {
                                setProgress(data.progress);
                            }

                            if (data.csv_data) {
                                if (data.metrics) {
                                  localStorage.setItem("adsynth_latest_report", JSON.stringify({
                                     fileName: `Postgres [${tableName}]`,
                                     timestamp: new Date().toISOString(),
                                     metrics: data.metrics
                                  }));
                                }

                                const blob = new Blob([data.csv_data], { type: "text/csv" });
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.href = url;
                                a.download = `synthetic_postgres_${tableName}_${Date.now()}.csv`;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                                window.URL.revokeObjectURL(url);

                                const rowsCount = data.csv_data.split('\n').length - 1;
                                if (data.metrics) {
                                    recordSynthesisRun(`Postgres [${tableName}]`, rowsCount, data.metrics.quality_score, data.metrics.privacy_score);
                                }

                                setStatus("DONE");
                            }
                        } catch (err) {
                            console.error("Parse error:", err);
                        }
                    }
                }
            }
        } catch (error) {
            console.error(error);
            setStatus("IDLE");
            alert("Failed to connect or synthesize database: " + error);
        }
    };

    return (
        <>
            <Header title="Data Sources" breadcrumbs={[{ label: "Governance" }, { label: "Data Sources"}]} />
            
            <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Remote Integrations</h1>
                <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    Connect directly to your data warehouses to ingest and synthesize records without manual file uploads. Your credentials are never stored.
                </p>

                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-8">
                    <div className="p-6 border-b border-slate-100 flex items-center bg-slate-50">
                        <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mr-4">
                            <Database size={20} />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900">PostgreSQL Connection</h2>
                            <p className="text-xs text-slate-500">e.g., Supabase, Neon, AWS RDS</p>
                        </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Connection String (URI)</label>
                            <div className="relative">
                                <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input 
                                    type="text" 
                                    value={connString}
                                    onChange={(e) => setConnString(e.target.value)}
                                    placeholder="postgresql://user:password@host:port/database"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    disabled={status !== "IDLE"}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Target Table Name</label>
                            <input 
                                type="text" 
                                value={tableName}
                                onChange={(e) => setTableName(e.target.value)}
                                placeholder="e.g. users, transactions"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500"
                                disabled={status !== "IDLE"}
                            />
                        </div>

                        {status === "IDLE" ? (
                            <button 
                                onClick={handleConnectAndSynthesize}
                                className="w-full bg-slate-900 text-white font-bold tracking-wider text-xs uppercase py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
                            >
                                Connect & Synthesize Table
                            </button>
                        ) : (
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-slate-900 flex items-center">
                                        {status === "DONE" ? <CheckCircle2 size={16} className="text-green-500 mr-2" /> : <div className="w-4 h-4 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mr-2"></div>}
                                        {status === "DONE" ? "Completed" : "Active Pipeline"}
                                    </h3>
                                    <span className="text-xs font-bold text-primary-500">{progress}%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                                    <div className="h-full bg-primary-500 transition-all duration-300" style={{ width: `${progress}%` }}></div>
                                </div>
                                <div className="h-24 overflow-y-auto w-full bg-slate-900 text-slate-300 font-mono text-[10px] p-3 rounded-lg border border-slate-800 flex flex-col space-y-1 mt-4">
                                    {logs.map((log, i) => (
                                        <div key={i} className="flex"><span className="text-slate-500 mr-2">[{new Date().toLocaleTimeString()}]</span> {log}</div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start">
                    <ShieldCheck className="text-amber-600 mr-3 shrink-0" size={20} />
                    <div>
                        <h4 className="text-sm font-bold text-amber-900">Zero Trust Architecture</h4>
                        <p className="text-xs text-amber-700/80 mt-1 leading-relaxed">
                            Database connections are established exclusively inside an ephemeral, containerized secure enclave. No credentials or data are permanently stored by AdSynth or replicated outside of the direct synthesis stream.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
