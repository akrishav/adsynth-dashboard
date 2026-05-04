import { Header } from "@/components/Header";
import { Activity, TrendingUp, Zap, Target, Server, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default function AutonomousDashboard() {
    return (
        <>
            <Header
                title="Agentic DSP Overview"
                breadcrumbs={[{ label: "Overview", href: "/dashboard" }]}
                action={
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center shadow-sm">
                        <Activity size={16} className="mr-2" /> View Live Telemetry
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Autonomous Agent Overview</h1>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Real-time monitoring of your connected ad accounts and automated budget execution.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold border border-green-200 shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span>AGENT ACTIVE (24/7)</span>
                    </div>
                </div>

                {/* Top 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={64} />
                        </div>
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center"><Target size={14} className="mr-2" /> Active Ad Sets Monitored</div>
                        <div className="text-4xl font-black text-slate-900 tracking-tight flex items-center mb-1">
                            142
                        </div>
                        <div className="text-xs text-slate-400">Across Meta & Google Ads</div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp size={64} />
                        </div>
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center"><TrendingUp size={14} className="mr-2" /> Total Budget Managed</div>
                        <div className="text-4xl font-black text-slate-900 tracking-tight mb-1">
                            $18,450<span className="text-lg text-slate-400 font-medium">/day</span>
                        </div>
                        <div className="text-xs text-green-500 font-medium flex items-center mt-1">
                            <TrendingUp size={12} className="mr-1" /> +12% Efficiency (Agent Reallocation)
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 rounded-2xl p-6 shadow-lg relative overflow-hidden group text-white">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap size={64} />
                        </div>
                        <div className="text-[10px] font-bold tracking-widest text-primary-400 uppercase mb-4 flex items-center"><Zap size={14} className="mr-2" /> Lost Signals Recovered</div>
                        <div className="text-4xl font-black text-white tracking-tight mb-1">
                            21.4%
                        </div>
                        <div className="text-xs text-slate-400 mt-1">
                            Via Zero-Retention CAPI Proxy
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="flex-1 space-y-8">

                        {/* Autonomous Action Log */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold text-slate-900">Autonomous Action Log</h2>
                                <button className="text-xs font-semibold text-primary-600 hover:text-primary-700">View All</button>
                            </div>
                            
                            <div className="space-y-4">
                                {/* Action Item 1 */}
                                <div className="flex items-start p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                                        <AlertCircle size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-sm font-bold text-slate-900">Paused Underperforming Ad Set</h4>
                                            <span className="text-[10px] text-slate-500">2 mins ago</span>
                                        </div>
                                        <p className="text-xs text-slate-600 mb-2">Meta Ads • Campaign: <span className="font-medium">Q3_Retargeting</span> • Ad Set: <span className="font-medium">Lookalike_1%</span></p>
                                        <div className="inline-flex items-center text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-500 font-mono">
                                            Trigger: ROAS (0.8) &lt; Target (1.5)
                                        </div>
                                    </div>
                                </div>

                                {/* Action Item 2 */}
                                <div className="flex items-start p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                                        <TrendingUp size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-sm font-bold text-slate-900">Reallocated Budget to Winner</h4>
                                            <span className="text-[10px] text-slate-500">2 mins ago</span>
                                        </div>
                                        <p className="text-xs text-slate-600 mb-2">Google Ads • Campaign: <span className="font-medium">Search_NonBrand</span></p>
                                        <div className="flex items-center text-[10px] font-mono mt-1">
                                            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded mr-2">$150/day</span>
                                            <ArrowRight size={10} className="text-slate-400 mr-2" />
                                            <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">$350/day</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Item 3 */}
                                <div className="flex items-start p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                                        <Zap size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <h4 className="text-sm font-bold text-slate-900">Audience Segment Synced (Zero-Retention)</h4>
                                            <span className="text-[10px] text-slate-500">1 hour ago</span>
                                        </div>
                                        <p className="text-xs text-slate-600 mb-2">Meta CAPI • Audience: <span className="font-medium">High Intent Visitors (30d)</span></p>
                                        <div className="inline-flex items-center text-[10px] bg-white border border-slate-200 px-2 py-1 rounded text-slate-500 font-mono">
                                            [NSM] Payload Cryptographically Wiped
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Area */}
                    <div className="lg:w-80 flex flex-col space-y-6 shrink-0">

                        {/* Nitro Enclave Infrastructure Widget */}
                        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden border border-slate-800">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            
                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center"><Server size={14} className="mr-2 text-primary-400" /> Infrastructure</h3>
                                <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
                                    <span className="text-[10px] font-bold text-green-400 uppercase">Secure</span>
                                </div>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-slate-300">AWS Nitro Enclaves</span>
                                        <CheckCircle2 size={14} className="text-green-400" />
                                    </div>
                                    <div className="text-[10px] text-slate-500">Isolated volatile memory</div>
                                </div>

                                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-slate-300">Cryptographic Shredding</span>
                                        <CheckCircle2 size={14} className="text-green-400" />
                                    </div>
                                    <div className="text-[10px] text-slate-500">ctypes.memset(0x00) Active</div>
                                </div>

                                <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/50">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs font-medium text-slate-300">CISO Compliance Status</span>
                                        <span className="text-[10px] font-bold text-primary-400 bg-primary-500/20 px-2 py-0.5 rounded">APPROVED</span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 mt-1">Zero persistent PII storage detected.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
