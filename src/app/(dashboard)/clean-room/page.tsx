"use client";

import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { UploadCloud, File as FileIcon, ShieldAlert, Cpu, CheckCircle2, Send, RefreshCcw, X, ChevronDown } from "lucide-react";

export default function CleanRoomPage() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<"IDLE" | "UPLOADING" | "SYNTHESIZING" | "DONE">("IDLE");
    const [progress, setProgress] = useState(0);
    const [statusMessage, setStatusMessage] = useState("Initializing Engine...");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedDestination, setSelectedDestination] = useState<string>("Meta Ads");

    const [syncState, setSyncState] = useState<{
        active: boolean;
        audienceName: string;
        destination: string;
        progress: number;
        message: string;
        complete: boolean;
    }>({
        active: false,
        audienceName: "",
        destination: "",
        progress: 0,
        message: "",
        complete: false
    });

    const handleSync = async (audienceName: string, destination: string) => {
        setSyncState({
            active: true,
            audienceName,
            destination,
            progress: 0,
            message: "Establishing secure connection...",
            complete: false
        });

        try {
            const response = await fetch("http://localhost:8000/api/activations/sync", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ audience_name: audienceName, destination })
            });

            if (!response.ok) {
                alert("Failed to connect to AdSynth Engine." + response.statusText);
                setSyncState(prev => ({ ...prev, active: false }));
                return;
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder("utf-8");
            let done = false;
            let buffer = "";

            if (!reader) throw new Error("No reader");

            while (!done) {
                const { value, done: streamDone } = await reader.read();
                done = streamDone;

                if (value) {
                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";

                    for (const line of lines) {
                        if (!line.trim()) continue;
                        try {
                            const data = JSON.parse(line);
                            if (data.error) {
                                alert("Sync Error: " + data.error);
                                setSyncState(prev => ({ ...prev, active: false }));
                                return;
                            }
                            if (data.status) {
                                setSyncState(prev => ({ ...prev, message: data.status }));
                            }
                            if (data.progress !== undefined) {
                                setSyncState(prev => ({ ...prev, progress: data.progress }));
                            }
                            if (data.success) {
                                setSyncState(prev => ({ ...prev, complete: true }));
                            }
                        } catch (err) {
                            console.error("Parse error", err);
                        }
                    }
                }
            }
        } catch (error) {
            alert("Connection error occurred.");
            setSyncState(prev => ({ ...prev, active: false }));
        }
    };

    const closeSyncModal = () => {
        setSyncState(prev => ({ ...prev, active: false }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
            setStatus("IDLE");
            setProgress(0);
        }
    };

    const handleSynthesize = async () => {
        if (!file) {
            alert("Please upload a CSV file first.");
            return;
        }

        setStatus("SYNTHESIZING");
        setProgress(0);
        setStatusMessage("Connecting to Secure Enclave...");

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("http://localhost:8000/api/synthesize", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                alert("Failed to synthesize data. " + response.statusText);
                setStatus("IDLE");
                return;
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder("utf-8");

            if (!reader) {
                throw new Error("Unable to read streaming response");
            }

            let done = false;
            let buffer = "";

            while (!done) {
                const { value, done: streamDone } = await reader.read();
                done = streamDone;

                if (value) {
                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n");

                    // The last element is either an empty string (if buffer ends with \n)
                    // or an incomplete chunk. Keep it in the buffer.
                    buffer = lines.pop() || "";

                    for (const line of lines) {
                        if (!line.trim()) continue;

                        try {
                            const data = JSON.parse(line);
                            if (data.error) {
                                alert("Engine error: " + data.error);
                                setStatus("IDLE");
                                return;
                            }
                            if (data.status) {
                                setStatusMessage(data.status);
                            }
                            if (data.progress !== undefined) {
                                setProgress(data.progress);
                            }
                            if (data.csv_data) {
                                // Final payload received, trigger download
                                const blob = new Blob([data.csv_data], { type: "text/csv" });
                                const url = window.URL.createObjectURL(blob);
                                const a = document.createElement("a");
                                a.href = url;
                                a.download = `adsynth_clean_${file.name}`;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                                window.URL.revokeObjectURL(url);
                                setStatus("DONE");
                            }
                        } catch (err) {
                            console.error("Error parsing stream chunk", line, err);
                        }
                    }
                }
            }
        } catch (error) {
            alert("Connection to AdSynth engine failed. Ensure the Python FastAPI backend is running on port 8000.");
            setStatus("IDLE");
            setProgress(0);
        }
    };
    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <>
            <Header
                title="Clean Room Workspace"
                action={
                    <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors">
                        Save Template
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Synthesis Configuration</h1>
                <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    Upload sensitive datasets into the ephemeral secure enclave. Data is obfuscated in memory and mathematical proofs are generated instantly.
                </p>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Input & Progress */}
                    <div className="lg:w-2/3 space-y-8 flex flex-col">

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex-1">
                            <h2 className="text-lg font-bold text-slate-900 mb-6">Source Dataset</h2>

                            {/* Upload Area */}
                            {/* Upload Area */}
                            <div
                                onClick={handleUploadClick}
                                className={`relative overflow-hidden border-2 border-dashed rounded-xl transition-colors p-12 flex flex-col items-center justify-center min-h-[300px] cursor-pointer ${file ? 'border-primary-300 bg-primary-50/50' : 'border-slate-200 bg-slate-50/50 hover:bg-primary-50 hover:border-primary-300'}`}
                            >
                                <input
                                    type="file"
                                    accept=".csv"
                                    className="hidden"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                />

                                <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none w-full">
                                    {file ? (
                                        <>
                                            <div className="w-16 h-16 bg-white border border-primary-200 rounded-full shadow-sm flex items-center justify-center text-primary-600 mb-6">
                                                <CheckCircle2 size={28} />
                                            </div>
                                            <div className="text-sm font-bold text-slate-900 mb-2">{file.name}</div>
                                            <div className="text-xs text-slate-500 mb-6 font-mono bg-white px-3 py-1 rounded border border-slate-100">
                                                {(file.size / 1024 / 1024).toFixed(2)} MB
                                            </div>
                                            <div className="flex items-center gap-4 pointer-events-auto mt-2">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleUploadClick(); }}
                                                    className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-sm hover:bg-slate-50 transition-colors"
                                                >
                                                    Change File
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleSynthesize(); }}
                                                    disabled={status === "SYNTHESIZING"}
                                                    className="bg-slate-900 border border-slate-900 text-white px-8 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center shadow-lg hover:bg-slate-800 transition-colors disabled:bg-slate-400 disabled:border-slate-400 disabled:cursor-not-allowed"
                                                >
                                                    <Cpu size={16} className="mr-2" />
                                                    {status === "SYNTHESIZING" ? "Synthesizing..." : "Synthesize Data"}
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center text-primary-500 mb-6">
                                                <UploadCloud size={28} />
                                            </div>
                                            <div className="text-sm font-bold text-slate-900 mb-2">Drag and drop file here</div>
                                            <div className="text-xs text-slate-500 mb-6 font-mono bg-white px-3 py-1 rounded border border-slate-100">
                                                Upload CSV ONLY
                                            </div>
                                            <div className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-sm text-center inline-block">
                                                Browse Files
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Active Processing State */}
                        {(status === "SYNTHESIZING" || status === "DONE") && (
                            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                                <div className="flex justify-between items-center mb-6 relative z-10">
                                    <h2 className="text-lg font-bold text-white">Data Synthesis Progress</h2>
                                    <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${status === "DONE" ? 'text-green-400 bg-green-500/10 border-green-500/20' : 'text-primary-400 bg-primary-500/10 border-primary-500/20'} border`}>
                                        {status === "DONE" ? 'Complete' : 'Running'}
                                    </span>
                                </div>

                                <div className="space-y-4 relative z-10">
                                    <div className="flex items-center text-sm font-mono text-slate-300 bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                        <FileIcon size={16} className={`mr-3 shrink-0 ${status === "DONE" ? 'text-green-400' : 'text-primary-400'}`} />
                                        <span className="truncate flex-1">Generating: <strong>adsynth_clean_{file?.name}</strong></span>
                                        <span className={`${status === "DONE" ? 'text-green-400' : 'text-primary-400'} font-bold ml-4 shrink-0`}>
                                            {status === "DONE" ? '100%' : `${progress}%`}
                                        </span>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">
                                            <span>{statusMessage}</span>
                                            <span className="text-white">{progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary-500 rounded-full relative transition-all duration-300" style={{ width: `${progress}%` }}>
                                                {status !== "DONE" && <div className="absolute inset-0 bg-white/20 animate-[pulse_1s_ease-in-out_infinite]"></div>}
                                            </div>
                                        </div>
                                    </div>

                                    {status === "DONE" && (
                                        <div className="pt-4 border-t border-slate-700 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <p className="text-xs text-green-400 font-medium whitespace-nowrap">✅ Synthesis complete! File downloaded.</p>

                                            <div className="flex items-center space-x-2 w-full sm:w-auto">
                                                <div className="relative">
                                                    <select
                                                        value={selectedDestination}
                                                        onChange={(e) => setSelectedDestination(e.target.value)}
                                                        className="bg-slate-800 border border-slate-600 text-white text-xs font-semibold rounded-lg pl-3 pr-8 py-2.5 outline-none focus:ring-2 focus:ring-primary-500 transition-shadow appearance-none min-w-[140px] cursor-pointer hover:bg-slate-700"
                                                    >
                                                        <option value="Meta Ads">Meta Ads</option>
                                                        <option value="Google Ads">Google Ads</option>
                                                        <option value="TikTok Ads">TikTok Ads</option>
                                                        <option value="Salesforce Marketing">Salesforce CRM</option>
                                                    </select>
                                                    <div className="absolute top-1/2 right-2.5 -translate-y-1/2 pointer-events-none text-slate-400">
                                                        <ChevronDown size={14} />
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => handleSync(`adsynth_clean_${file?.name}`, selectedDestination)}
                                                    className="bg-blue-600 border border-blue-500 text-white px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 whitespace-nowrap flex-1 sm:flex-none justify-center"
                                                >
                                                    <Send size={14} className="mr-2" /> Push
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Constraints */}
                    <div className="lg:w-1/3">
                        <div className="bg-white border border-primary-500 rounded-2xl shadow-sm shadow-primary-500/10 p-6 sticky top-8">
                            <div className="flex items-center space-x-3 border-b border-primary-100 pb-4 mb-6">
                                <ShieldAlert size={20} className="text-primary-600" />
                                <h2 className="text-lg font-bold text-slate-900">Privacy Constraints</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Target Epsilon (ε)</label>
                                        <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded uppercase tracking-wider">Strict</span>
                                    </div>
                                    <input type="text" defaultValue="0.10" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Outlier Clipping Percentile</label>
                                    </div>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow appearance-none">
                                        <option>99.9th Percentile</option>
                                        <option>99.0th Percentile</option>
                                        <option>95.0th Percentile</option>
                                    </select>
                                </div>

                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                                    <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Transformations</h3>

                                    <div className="space-y-4">
                                        <label className="flex items-start cursor-pointer">
                                            <div className="w-5 h-5 rounded border border-primary-500 bg-primary-500 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">Categorical Suppression</div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">Hide categories with fewer than 50 occurrences to prevent targeted attacks.</div>
                                            </div>
                                        </label>

                                        <label className="flex items-start cursor-pointer">
                                            <div className="w-5 h-5 rounded border border-primary-500 bg-primary-500 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">Format Preserving Encryption</div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">Maintain string structures (e.g. SSNs, Emails) in synthetic output.</div>
                                            </div>
                                        </label>

                                        <label className="flex items-start cursor-pointer opacity-60">
                                            <div className="w-5 h-5 rounded border border-slate-300 bg-white mr-3 shrink-0 mt-0.5">
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">Time-Series Offset</div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">Add randomized jitter to temporal data points.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Sync Progress Modal Overlay */}
            {syncState.active && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 overflow-hidden transform transition-all">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                            <div className="flex items-center">
                                <Send size={20} className="text-primary-500 mr-3" />
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">Network Sync</h3>
                                    <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{syncState.destination}</p>
                                </div>
                            </div>
                            {syncState.complete && (
                                <button onClick={closeSyncModal} className="text-slate-400 hover:text-slate-600 p-1">
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                        <div className="p-8">
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-700">{syncState.message}</span>
                                {syncState.complete ? (
                                    <CheckCircle2 size={24} className="text-green-500 shrink-0" />
                                ) : (
                                    <RefreshCcw size={20} className="text-primary-500 shrink-0 animate-spin" />
                                )}
                            </div>

                            <div className="w-full bg-slate-100 rounded-full h-3 mb-2 overflow-hidden border border-slate-200">
                                <div
                                    className={`h-full rounded-full transition-all duration-300 ease-out ${syncState.complete ? 'bg-green-500' : 'bg-primary-500'}`}
                                    style={{ width: `${syncState.progress}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-xs text-slate-400 font-bold tracking-wider">
                                <span>{syncState.progress}%</span>
                                <span>100%</span>
                            </div>

                            {syncState.complete && (
                                <button
                                    onClick={closeSyncModal}
                                    className="w-full mt-8 bg-slate-900 text-white py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors"
                                >
                                    Dismiss
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
