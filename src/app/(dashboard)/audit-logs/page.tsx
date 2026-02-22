import { Header } from "@/components/Header";
import { Search, Filter, AlertTriangle, ShieldAlert, Lock, ArrowDown } from "lucide-react";

export default function AuditLogsPage() {
    const logs = [
        { time: "10:42:01 AM", event: "GAN Parameter Tuning", status: "Routine", user: "system-auto", ip: "10.0.1.44", hash: "a7c...39f" },
        { time: "10:15:22 AM", event: "Synthetic Dataset Export", status: "Secure", user: "Sarah Chen", ip: "192.168.1.12", hash: "b2d...10a" },
        { time: "09:54:11 AM", event: "Epsilon Bound Exceeded", status: "High Risk", user: "API-Gateway", ip: "144.202.X.X", hash: "f99...4c2" },
        { time: "09:30:05 AM", event: "New Node Provisioned", status: "Routine", user: "system-auto", ip: "10.0.2.19", hash: "c11...88b" },
        { time: "09:12:44 AM", event: "Privacy Policy Updated", status: "Secure", user: "Admin", ip: "192.168.1.5", hash: "d4e...99c" },
        { time: "08:45:10 AM", event: "Failed Authentication", status: "Warning", user: "Unknown", ip: "201.55.X.X", hash: "e22...77d" },
    ];

    return (
        <>
            <Header
                title="Compliance Audit Trail"
                breadcrumbs={[]}
                action={
                    <div className="flex items-center space-x-3 w-80">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search incident hash or Node ID"
                                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs shadow-sm"
                            />
                        </div>
                        <button className="bg-white border border-slate-200 text-slate-700 p-2 rounded-lg hover:bg-slate-50 transition-colors shadow-sm shrink-0">
                            <Filter size={16} />
                        </button>
                    </div>
                }
            />

            <div className="flex-1 overflow-hidden flex">

                {/* Left Table Section */}
                <div className="flex-1 overflow-y-auto p-8 border-r border-slate-200">
                    <h1 className="text-2xl font-bold text-slate-900 mb-6">System Event Log</h1>

                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Timestamp</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Event Type</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">User / Source IP</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Integrity Hash</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {logs.map((log, idx) => (
                                    <tr key={idx} className={`hover:bg-slate-50 cursor-pointer transition-colors ${idx === 2 ? 'bg-red-50/50 border-l-4 border-l-red-500' : 'border-l-4 border-l-transparent'}`}>
                                        <td className="px-6 py-4 text-xs font-mono text-slate-500 whitespace-nowrap">
                                            <div className="mb-0.5">OCT 24, 2024</div>
                                            <div className="font-bold text-slate-900">{log.time}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className={`text-sm font-bold ${idx === 2 ? 'text-red-700' : 'text-slate-900'}`}>{log.event}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            {log.status === 'High Risk' && (
                                                <span className="inline-flex items-center px-2 py-1 rounded bg-red-100 border border-red-200 text-red-700 text-[10px] font-bold tracking-widest uppercase">
                                                    <ShieldAlert size={12} className="mr-1" /> Privacy Alert
                                                </span>
                                            )}
                                            {log.status === 'Routine' && (
                                                <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase">
                                                    Routine
                                                </span>
                                            )}
                                            {log.status === 'Secure' && (
                                                <span className="inline-flex items-center px-2 py-1 rounded bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold tracking-widest uppercase">
                                                    Secure
                                                </span>
                                            )}
                                            {log.status === 'Warning' && (
                                                <span className="inline-flex items-center px-2 py-1 rounded bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold tracking-widest uppercase">
                                                    Warning
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs font-bold text-slate-900">{log.user}</div>
                                            <div className="text-[10px] font-mono text-slate-400">{log.ip}</div>
                                        </td>
                                        <td className="px-6 py-4 font-mono text-xs text-slate-400">
                                            {log.hash}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex justify-center pb-8">
                        <button className="bg-white border border-slate-200 text-slate-600 px-6 py-2 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors shadow-sm flex items-center">
                            Load More <ArrowDown size={14} className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Right Detail Sidebar */}
                <div className="w-[400px] bg-slate-50 flex flex-col pt-8">
                    <div className="px-8 pb-6 border-b border-slate-200">
                        <div className="flex items-center space-x-2 text-red-600 mb-4 bg-red-100 w-max px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-red-200">
                            <AlertTriangle size={14} /> <span>Incident Detail</span>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Event Timeline: Epsilon Bound Exceeded</h2>
                        <div className="flex items-center space-x-4 text-xs font-mono text-slate-500">
                            <span>Hash: f99a2b84c2</span>
                            <span>Node: US-EAST-1A</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 relative">
                        {/* Vertical line timeline */}
                        <div className="absolute left-10 top-12 bottom-12 w-0.5 bg-slate-200"></div>

                        <div className="space-y-8 relative">
                            <div className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center shrink-0 z-10 relative">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div>
                                </div>
                                <div className="ml-4">
                                    <div className="text-xs font-bold text-slate-900">09:54:01 AM</div>
                                    <div className="text-[11px] text-slate-500 mt-1">Authorized API request received from dashboard analytics module.</div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-red-100 border-2 border-white flex items-center justify-center shrink-0 z-10 relative shadow-[0_0_0_2px_#fca5a5]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                                </div>
                                <div className="ml-4">
                                    <div className="text-xs font-bold text-red-700">09:54:11 AM</div>
                                    <div className="text-[11px] text-slate-700 mt-1 font-semibold leading-relaxed">Query attempted to aggregate small cohort (&lt;10 users). Epsilon calculation spiked to 0.45.</div>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-5 h-5 rounded-full bg-green-100 border-2 border-white flex items-center justify-center shrink-0 z-10 relative">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                </div>
                                <div className="ml-4">
                                    <div className="text-xs font-bold text-slate-900">09:54:12 AM</div>
                                    <div className="text-[11px] text-slate-500 mt-1">AdSynth Auto-Mitigation triggered. Query rejected with standard Laplace noise injected into error response.</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4 border-b border-slate-200 pb-2">Root Cause Analysis</h3>
                            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-sm text-slate-600 leading-relaxed font-mono">
                                Attempt to extract unmasked PII from the <span className="bg-slate-100 px-1 rounded text-slate-900">credit_bureau_sync_v2</span> dataset. Blocked by internal `check_privacy_budget()` mechanism due to narrow filtering criteria.
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border-t border-slate-200 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                        <button className="w-full bg-red-600 text-white font-bold tracking-wider text-xs uppercase py-3.5 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center shadow-lg shadow-red-600/20">
                            <Lock size={16} className="mr-2" /> Enforce Node Lockdown
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
