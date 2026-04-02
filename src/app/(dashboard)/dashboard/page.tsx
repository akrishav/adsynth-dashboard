import { Header } from "@/components/Header";
import { Download, Calculator, TrendingUp, Users, Database as DatabaseIcon, Zap } from "lucide-react";
import { getDashboardStats } from "@/app/actions";

export const dynamic = "force-dynamic";

export default async function MarketingROIPage() {
    const stats = await getDashboardStats();

    return (
        <>
            <Header
                title="Performance & ROAS Recovery"
                breadcrumbs={[{ label: "Overview", href: "/dashboard" }, { label: "Marketing ROI" }]}
                action={
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20 flex items-center">
                        <Download size={14} className="mr-2" /> Download Executive Summary
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Performance & ROAS Recovery</h1>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">
                    Real-time marketing attribution, synthesis tracking, and recovery metrics.
                </p>

                {/* Top 3 Cards from Database */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center"><Users size={14} className="mr-2" /> Total Synths</div>
                        <div className="text-4xl font-black text-primary-500 tracking-tight flex items-center mb-1">
                            {stats.totalProfiles.toLocaleString()} <TrendingUp size={24} className="ml-2 text-primary-400" />
                        </div>
                        <div className="text-xs text-slate-400">Total high-fidelity profiles generated</div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center"><Zap size={14} className="mr-2" /> Active Sync Destinations</div>
                        <div className="text-4xl font-black text-primary-500 tracking-tight mb-1">
                            {stats.activeDestinations}
                        </div>
                        <div className="text-xs text-slate-400">Live audience connections (Meta, Google, etc)</div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4 flex items-center"><TrendingUp size={14} className="mr-2" /> Average Attributed ROI</div>
                        <div className="text-4xl font-black text-primary-500 tracking-tight mb-1">
                            {stats.avgRoi > 0 ? `+${stats.avgRoi}%` : '0%'}
                        </div>
                        <div className="text-xs text-slate-400">Across {stats.activations.filter(a => a.status === 'Active').length} active campaigns</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="flex-1 space-y-8">

                        {/* Recent Synthesis Runs Table */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 mb-6">Recent Synthesis Runs</h2>
                            {stats.runs.length === 0 ? (
                                <div className="text-center py-8 text-slate-500 text-sm bg-slate-50 rounded-lg border border-slate-100 border-dashed">
                                    No datasets synthesized yet. Head to the Clean Room!
                                </div>
                            ) : (
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/3">Source File</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/4">Profiles</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/4 text-center">Quality / Privacy</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {stats.runs.slice(0, 4).map((run: any) => (
                                        <tr key={run.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-5 font-medium text-slate-900 text-sm truncate pr-4">
                                                {run.fileName}
                                            </td>
                                            <td className="py-5 text-sm text-slate-600">
                                                {run.rows.toLocaleString()}
                                            </td>
                                            <td className="py-5 text-center">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-xs font-bold text-slate-700">{run.qualityScore}% U</span>
                                                    <span className="text-[10px] text-green-500 font-bold">{run.privacyScore}% P</span>
                                                </div>
                                            </td>
                                            <td className="py-5 text-right text-xs text-slate-500">
                                                {new Date(run.createdAt).toLocaleDateString()}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            )}
                        </div>

                        {/* Active Campaigns Table */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 mb-6">Active Sync Campaigns</h2>
                            {stats.activations.length === 0 ? (
                                <div className="text-center py-8 text-slate-500 text-sm bg-slate-50 rounded-lg border border-slate-100 border-dashed">
                                    No audiences synced yet. Head to Activations!
                                </div>
                            ) : (
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/3">Audience & Destination</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/4">Status</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/4">Date</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 text-right">Attributed ROI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {stats.activations.map((act: any) => (
                                        <tr key={act.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-5">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-slate-900 text-sm">{act.audienceName}</span>
                                                    <span className="text-xs text-slate-500">{act.destination}</span>
                                                </div>
                                            </td>
                                            <td className="py-5">
                                                <div className="flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded w-max">
                                                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${act.status === 'Active' ? 'bg-primary-500' : 'bg-slate-400'}`}></span> {act.status}
                                                </div>
                                            </td>
                                            <td className="py-5 text-xs text-slate-500">
                                                {new Date(act.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="py-5 text-right font-bold text-primary-500">
                                                +{act.roi}%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            )}
                        </div>
                    </div>

                    {/* Right Sidebar Area */}
                    <div className="lg:w-80 flex flex-col space-y-6 shrink-0">

                        {/* Privacy Compliance Widget */}
                        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xs font-bold text-slate-900">Privacy Compliance</h3>
                                <span className="text-[10px] font-bold tracking-widest text-primary-500 uppercase">100% Active</span>
                            </div>

                            <div className="flex space-x-1 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-4">
                                <div className="w-1/4 h-full bg-primary-500 rounded-full"></div>
                                <div className="w-1/4 h-full bg-primary-500 rounded-full"></div>
                                <div className="w-1/4 h-full bg-primary-500 rounded-full"></div>
                                <div className="w-1/4 h-full bg-primary-500 rounded-full"></div>
                            </div>

                            <p className="text-[10px] text-slate-500 leading-relaxed">
                                Fully compliant with GDPR, CCPA, and Apple App Tracking Transparency (ATT). Synthetic data anonymization is active across all channels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
