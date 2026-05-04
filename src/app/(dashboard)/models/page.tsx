import { Header } from "@/components/Header";
import { Plus, Power, Settings2, ShieldAlert, Cpu } from "lucide-react";

export const dynamic = "force-dynamic";

export default function AgentRulesPage() {
    return (
        <>
            <Header
                title="Autonomous Agent Rules"
                breadcrumbs={[{ label: "Agent Rules", href: "/models" }]}
                action={
                    <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center shadow-sm">
                        <Plus size={16} className="mr-2" /> Create New Rule
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Rule Configuration</h1>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                            Configure the threshold logic that governs the autonomous agent. When an ad set hits these conditions, the agent will execute the action via API.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Rule 1 */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mr-4">
                                    <ShieldAlert size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">Meta Ads: ROAS Protection</h3>
                                    <p className="text-xs text-slate-500">Monitors all Meta campaigns for sudden ROAS drops.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-3 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
                                <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-lg"><Settings2 size={16} /></button>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 mb-4 font-mono text-xs">
                            <div>
                                <span className="text-slate-400 block mb-1">IF CONDITION:</span>
                                <span className="text-slate-700 font-semibold">ROAS &lt; 1.5</span> <span className="text-slate-500">AND</span> <span className="text-slate-700 font-semibold">Spend &gt; $50</span>
                            </div>
                            <div>
                                <span className="text-slate-400 block mb-1">THEN ACTION:</span>
                                <span className="text-red-600 font-semibold">PAUSE Ad Set</span> <span className="text-slate-500">AND</span> <span className="text-primary-600 font-semibold">ALERT Slack</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center text-[10px] text-slate-400">
                            <Cpu size={12} className="mr-1" /> Agent Evaluation Frequency: Every 15 minutes
                        </div>
                    </div>

                    {/* Rule 2 */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mr-4">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">Google Ads: Winner Scaling</h3>
                                    <p className="text-xs text-slate-500">Automatically reallocates budget to high-performing keywords.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-3 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Active</span>
                                <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-lg"><Settings2 size={16} /></button>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 mb-4 font-mono text-xs">
                            <div>
                                <span className="text-slate-400 block mb-1">IF CONDITION:</span>
                                <span className="text-slate-700 font-semibold">CPA &lt; $12.00</span> <span className="text-slate-500">FOR</span> <span className="text-slate-700 font-semibold">48 Hours</span>
                            </div>
                            <div>
                                <span className="text-slate-400 block mb-1">THEN ACTION:</span>
                                <span className="text-green-600 font-semibold">INCREASE Budget +20%</span>
                            </div>
                        </div>
                        
                        <div className="flex items-center text-[10px] text-slate-400">
                            <Cpu size={12} className="mr-1" /> Agent Evaluation Frequency: Daily at 08:00 UTC
                        </div>
                    </div>

                    {/* Rule 3 (Inactive) */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mr-4">
                                    <Power size={20} />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">TikTok: Fatigue Prevention</h3>
                                    <p className="text-xs text-slate-500">Rotates creative automatically when frequency gets too high.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-3 text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">Inactive</span>
                                <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-lg"><Settings2 size={16} /></button>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 bg-slate-50 rounded-xl p-4 font-mono text-xs">
                            <div>
                                <span className="text-slate-400 block mb-1">IF CONDITION:</span>
                                <span className="text-slate-700 font-semibold">Frequency &gt; 3.5</span>
                            </div>
                            <div>
                                <span className="text-slate-400 block mb-1">THEN ACTION:</span>
                                <span className="text-blue-600 font-semibold">ROTATE Ad Creative</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Needed for the TrendingUp icon in rule 2
import { TrendingUp } from "lucide-react";
