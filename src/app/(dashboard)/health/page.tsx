"use client";

import { Activity, Zap, ShieldCheck, Download, RefreshCcw } from "lucide-react";

export default function HealthPage() {
    return (
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            {/* Header Area */}
            <div className="h-20 border-b border-slate-200 bg-white flex items-center justify-between px-8 shrink-0 relative z-10 shadow-sm">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Infrastructure & Engine Health</h1>

                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2 text-[10px] font-bold tracking-wider text-primary-600 bg-primary-50 px-3 py-1.5 rounded-full uppercase border border-primary-100">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
                        <span>LIVE</span>
                    </div>
                    <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-slate-50 transition-colors">
                        EXPORT DATA
                    </button>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20">
                        SYSTEM REBOOT
                    </button>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* Main Dashboard Area */}
                <div className="flex-1 overflow-y-auto p-8 bg-slate-50/50">

                    {/* Top Metric Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">GPU Utilization</div>
                            <div className="flex items-end justify-between">
                                <div className="text-4xl font-black tracking-tight text-primary-500">74%</div>
                                <div className="text-xs font-bold text-green-500 flex items-center relative top-[-6px]">
                                    +2.4%
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Model Drift</div>
                            <div className="flex items-end justify-between">
                                <div className="text-4xl font-black tracking-tight text-primary-500">Low</div>
                                <div className="text-xs font-bold text-slate-400 relative top-[-6px]">
                                    0.02%
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">API Latency</div>
                            <div className="flex items-end justify-between">
                                <div className="text-4xl font-black tracking-tight text-primary-500">12<span className="text-xl">ms</span></div>
                                <div className="text-xs font-bold text-red-500 relative top-[-6px]">
                                    -1ms
                                </div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex justify-between">
                                GAN Epoch Status
                            </div>
                            <div className="flex items-end justify-between">
                                <div className="text-3xl font-black tracking-tight text-primary-500">Stable</div>
                                <div className="text-[10px] font-bold text-primary-400 relative top-[-4px]">
                                    Node-01
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Synthesis Throughput Chart */}
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mb-8 relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-12 relative z-10">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900">Synthesis Throughput</h2>
                                <p className="text-xs text-slate-500">Real-time GAN synthesis distribution per microsecond</p>
                            </div>
                            <div className="bg-primary-50 px-3 py-1 rounded text-[10px] font-bold text-primary-600 font-mono tracking-widest border border-primary-100">
                                1.2 TB/S
                            </div>
                        </div>

                        <div className="h-64 relative w-full border-t border-slate-50 pt-4">
                            {/* Decorative background grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>

                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="gradientLine" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,60 Q 15,30 30,60 T 70,60 T 100,50 L100,100 L0,100 Z" fill="url(#gradientLine)" />
                                <path d="M0,60 Q 15,30 30,60 T 70,60 T 100,50" fill="none" stroke="#0ea5e9" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                                <circle cx="21.5" cy="51.5" r="1.5" fill="white" stroke="#0ea5e9" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                            </svg>

                            <div className="absolute left-[30%] top-[30%] bg-slate-900 border border-slate-700 shadow-xl text-white text-[10px] font-bold px-3 py-1.5 rounded-lg tracking-widest uppercase z-20">
                                Peak: 1,442 REQ/S
                            </div>
                        </div>
                    </div>

                    {/* Engine Status List */}
                    <div className="bg-white border border-slate-100 bg-white rounded-2xl p-6 shadow-sm overflow-hidden">
                        <h2 className="text-lg font-bold text-slate-900 mb-6">Engine Status List</h2>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/4">Instance Node</th>
                                    <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/6">Status</th>
                                    <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/6">Compute Load</th>
                                    <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5">Micro-Performance</th>
                                    <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/6 text-right">Uptime</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { node: "Engine Node-01", status: "Active", load: "88.2%", uptime: "14d 02h 11m", sparkline: "M0,10 L5,5 L10,12 L15,8 L20,15 L25,4 L30,6", color: "text-primary-500", st: "bg-green-100 text-green-700 border-green-200" },
                                    { node: "Engine Node-02", status: "Active", load: "42.1%", uptime: "14d 02h 09m", sparkline: "M0,12 L10,14 L20,10 L30,8", color: "text-primary-500", st: "bg-green-100 text-green-700 border-green-200" },
                                    { node: "Engine Node-03", status: "Balancing", load: "12.5%", uptime: "0d 00h 42m", sparkline: "M0,15 L30,15", color: "text-slate-300", st: "bg-orange-100 text-orange-700 border-orange-200" },
                                ].map((item, i) => (
                                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-5">
                                            <div className="font-bold text-slate-900 text-sm">{item.node}</div>
                                        </td>
                                        <td className="py-5">
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${item.st}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${item.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-5 text-sm font-medium text-slate-700">
                                            {item.load}
                                        </td>
                                        <td className="py-5">
                                            <svg width="40" height="20" viewBox="0 0 30 20" className="overflow-visible">
                                                <path d={item.sparkline} fill="none" stroke="currentColor" className={item.color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                                            </svg>
                                        </td>
                                        <td className="py-5 text-right font-mono text-xs text-slate-500">
                                            {item.uptime}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Sidebar - Security & Health */}
                <div className="w-[340px] border-l border-slate-200 bg-white flex flex-col pt-8">
                    <div className="px-8 flex items-center justify-between mb-8">
                        <h3 className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">Security & Health</h3>
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 space-y-4">
                        <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 hover:border-slate-200 transition-colors cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center mb-4">
                                <Zap size={16} fill="currentColor" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">System Optimized</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">Node-03 successfully rebalanced to Palo Alto cluster.</p>
                            <div className="text-[10px] font-bold text-primary-500 tracking-widest uppercase">Just Now</div>
                        </div>

                        <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 hover:border-slate-200 transition-colors cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                                <ShieldCheck size={16} fill="currentColor" />
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Security Integrity</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">Global firewall rules synchronized across all GAN nodes.</p>
                            <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">14 Min Ago</div>
                        </div>

                        <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 hover:border-slate-200 transition-colors cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-500 flex items-center justify-center mb-4">
                                <Activity size={16} />
                            </div>
                            <h4 className="font-bold text-slate-900 text-sm mb-1">Auto-Scale Trigger</h4>
                            <p className="text-xs text-slate-500 leading-relaxed mb-4">Demand surge detected. Provisioning ephemeral Node-04.</p>
                            <div className="text-[10px] font-bold text-primary-500 tracking-widest uppercase">2H Ago</div>
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">Engine Capacity</div>
                            <div className="flex items-end justify-between mb-4">
                                <div className="text-2xl font-black text-white">9.2 PFLOPS</div>
                                <div className="text-[10px] font-bold text-primary-400 uppercase tracking-widest border border-primary-500/30 px-2 py-0.5 rounded-full">Optimal</div>
                            </div>
                            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-primary-500 w-3/4 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
