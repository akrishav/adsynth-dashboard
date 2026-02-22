import { Header } from "@/components/Header";
import { Send, Users, TrendingUp, RefreshCcw } from "lucide-react";

export default function ActivationsPage() {
    const audiences = [
        { name: "High-LTV Reactivation", size: "245K", destination: "Meta Ads", status: "Active", roi: "+22%" },
        { name: "Lookalike: Top Spenders", size: "1.2M", destination: "Google Ads", status: "Syncing", roi: "Calculating" },
        { name: "Churn Risk Prevention", size: "85K", destination: "Salesforce Marketing", status: "Paused", roi: "+14%" },
        { name: "Q4 Promo Suppression", size: "3.5M", destination: "TikTok Ads", status: "Active", roi: "+8%" },
    ];

    return (
        <>
            <Header
                title="Active Synthetic Audiences"
                breadcrumbs={[]}
                action={
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20">
                        <Send size={16} className="mr-2" /> Sync to Destination
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Audience Activations</h1>
                <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    Manage deployment of privacy-safe synthetic audiences to downstream marketing and analytics platforms.
                </p>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center">
                        <div className="w-12 h-12 bg-primary-50 text-primary-500 flex items-center justify-center rounded-xl mr-4 shadow-sm">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Total Synthetic Profiles</div>
                            <div className="text-2xl font-black text-slate-900">12.4M</div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex items-center">
                        <div className="w-12 h-12 bg-slate-50 text-slate-600 flex items-center justify-center rounded-xl mr-4 border border-slate-200 shadow-sm">
                            <Send size={24} />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Activation Destinations</div>
                            <div className="text-2xl font-black text-slate-900">7 Connected</div>
                        </div>
                    </div>

                    <div className="bg-white border border-primary-500 rounded-2xl p-6 shadow-sm shadow-primary-500/10 flex items-center relative overflow-hidden">
                        <div className="absolute top-[-20%] right-0 w-32 h-32 bg-primary-100/50 rounded-full blur-2xl z-0"></div>
                        <div className="w-12 h-12 bg-white border border-primary-100 text-primary-500 flex items-center justify-center rounded-xl mr-4 shadow-sm z-10">
                            <TrendingUp size={24} />
                        </div>
                        <div className="z-10">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Avg ROI Lift</div>
                            <div className="text-2xl font-black text-primary-500 flex items-center">
                                18.5% <span className="text-[10px] font-bold text-primary-600 ml-2 bg-primary-50 px-2 rounded-full uppercase tracking-widest">Global</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Audience Table */}
                    <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <h2 className="text-lg font-bold text-slate-900">Audience Segments</h2>
                            <button className="text-xs font-bold text-primary-500 uppercase tracking-wider hover:text-primary-600 transition-colors">
                                View All
                            </button>
                        </div>

                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Segment Name</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Size</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Destination</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {audiences.map((aud, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors cursor-pointer">
                                        <td className="px-6 py-5">
                                            <div className="font-bold text-slate-900 text-sm">{aud.name}</div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <span className="font-mono text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded">{aud.size}</span>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-slate-600 font-medium">
                                            {aud.destination}
                                        </td>
                                        <td className="px-6 py-5">
                                            {aud.status === 'Active' && (
                                                <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span> Active
                                                </span>
                                            )}
                                            {aud.status === 'Syncing' && (
                                                <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-full">
                                                    <RefreshCcw size={10} className="mr-1.5 animate-spin" /> Syncing
                                                </span>
                                            )}
                                            {aud.status === 'Paused' && (
                                                <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span> Paused
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Right Column: Performance Chart */}
                    <div className="lg:w-1/3 flex flex-col space-y-8">

                        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden flex-1 flex flex-col">
                            {/* Decorative background grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20"></div>

                            <div className="relative z-10 flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Activation Performance</h3>
                                    <p className="text-slate-400 text-xs">ROI lift per destination</p>
                                </div>
                            </div>

                            <div className="relative z-10 flex-1 flex items-end space-x-4 border-b border-slate-700 pb-2 h-48">
                                {/* Bar Chart Mockup */}
                                <div className="flex-1 flex flex-col justify-end items-center group">
                                    <div className="text-[10px] font-bold text-primary-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">22%</div>
                                    <div className="w-full bg-primary-500 rounded-t-sm transition-all duration-500" style={{ height: '80%' }}></div>
                                </div>
                                <div className="flex-1 flex flex-col justify-end items-center group">
                                    <div className="text-[10px] font-bold text-primary-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">14%</div>
                                    <div className="w-full bg-primary-400 rounded-t-sm transition-all duration-500" style={{ height: '50%' }}></div>
                                </div>
                                <div className="flex-1 flex flex-col justify-end items-center group">
                                    <div className="text-[10px] font-bold text-primary-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">8%</div>
                                    <div className="w-full bg-primary-300 rounded-t-sm transition-all duration-500" style={{ height: '30%' }}></div>
                                </div>
                                <div className="flex-1 flex flex-col justify-end items-center group">
                                    <div className="text-[10px] font-bold text-primary-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">11%</div>
                                    <div className="w-full bg-primary-600 rounded-t-sm transition-all duration-500" style={{ height: '40%' }}></div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-2 flex justify-between px-2">
                                <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">Meta</span>
                                <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase ml-2">SFDC</span>
                                <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">TikTok</span>
                                <span className="text-[9px] font-bold tracking-widest text-slate-500 uppercase">Other</span>
                            </div>
                        </div>

                        {/* Quick Action */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm border-l-4 border-l-green-500">
                            <h3 className="text-sm font-bold text-slate-900 mb-1">Destination Health</h3>
                            <p className="text-xs text-slate-500 mb-4 leading-relaxed">All API connections to external advertising networks are fully functional and secure.</p>
                            <button className="text-xs font-bold uppercase tracking-wider text-primary-600 hover:text-primary-700 transition-colors">
                                View Network Logs →
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
