import { Header } from "@/components/Header";
import { Download, Calculator, TrendingUp } from "lucide-react";

export default function MarketingROIPage() {
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
                    Real-time marketing attribution and recovery tracking.
                </p>

                {/* Top 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">ROAS Lift</div>
                        <div className="text-4xl font-black text-primary-500 tracking-tight flex items-center mb-1">
                            +24% <TrendingUp size={24} className="ml-2 text-primary-400" />
                        </div>
                        <div className="text-xs text-slate-400">vs Previous Quarter Baseline</div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Audience Match Rate</div>
                        <div className="text-4xl font-black text-primary-500 tracking-tight mb-1">
                            98%
                        </div>
                        <div className="text-xs text-slate-400">Highest industry precision level</div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Total Attributed Revenue</div>
                        <div className="text-4xl font-black text-primary-500 tracking-tight mb-1">
                            $4.2M
                        </div>
                        <div className="text-xs text-slate-400">Directly attributed via AdSynth Signal</div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area */}
                    <div className="flex-1 space-y-8">

                        {/* Performance Comparison Chart */}
                        <div className="bg-white border border-primary-500 rounded-2xl p-6 shadow-sm shadow-primary-500/10">
                            <div className="flex justify-between items-center mb-10">
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900">Performance Comparison</h2>
                                    <p className="text-xs text-slate-500">Baseline vs. AdSynth-Enhanced (Last 6 Months)</p>
                                </div>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                        <span className="w-4 h-1 bg-slate-800 rounded mr-2"></span> Baseline
                                    </div>
                                    <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-primary-600">
                                        <span className="w-4 h-1 bg-primary-500 rounded mr-2"></span> AdSynth Enhanced
                                    </div>
                                </div>
                            </div>

                            <div className="h-64 relative w-full border-b border-slate-100">
                                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    {/* AdSynth Enhanced Line */}
                                    <defs>
                                        <linearGradient id="adsynthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                                            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,80 Q 20,70 40,50 T 70,40 T 100,20 L100,100 L0,100 Z" fill="url(#adsynthGradient)" />
                                    <path d="M0,80 Q 20,70 40,50 T 70,40 T 100,20" fill="none" stroke="#0ea5e9" strokeWidth="3" vectorEffect="non-scaling-stroke" />

                                    {/* Baseline Line */}
                                    <path d="M0,80 Q 20,80 40,75 T 70,80 T 100,75" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                                </svg>
                                <div className="absolute bottom-[-24px] w-full flex justify-between text-[10px] font-bold tracking-widest text-slate-400 uppercase px-4">
                                    <span>Jan</span>
                                    <span>Feb</span>
                                    <span>Mar</span>
                                    <span>Apr</span>
                                    <span>May</span>
                                    <span>Jun</span>
                                </div>
                            </div>
                        </div>

                        {/* Active Campaigns Table */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 mb-6">Active Campaigns</h2>
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100">
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-[40%]">Campaign Channel</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5">Status</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5 text-center">Compliance</th>
                                        <th className="pb-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5 text-right">Attributed ROI</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-xs">M</div>
                                                <span className="font-bold text-slate-900 text-sm">Meta Advantage+ Shopping</span>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center text-xs font-bold text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span> Active Signal
                                            </div>
                                        </td>
                                        <td className="py-5 text-center">
                                            <span className="bg-slate-100 text-slate-900 border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">100% Secure</span>
                                        </td>
                                        <td className="py-5 text-right font-bold text-primary-500">
                                            5.2x
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded bg-slate-100 text-slate-900 font-bold flex items-center justify-center text-xs">G</div>
                                                <span className="font-bold text-slate-900 text-sm">Google Performance Max</span>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center text-xs font-bold text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span> Active Signal
                                            </div>
                                        </td>
                                        <td className="py-5 text-center">
                                            <span className="bg-slate-100 text-slate-900 border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">100% Secure</span>
                                        </td>
                                        <td className="py-5 text-right font-bold text-primary-500">
                                            4.8x
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="py-5">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded bg-sky-100 text-sky-600 font-bold flex items-center justify-center text-xs">L</div>
                                                <span className="font-bold text-slate-900 text-sm">LinkedIn Lead Gen</span>
                                            </div>
                                        </td>
                                        <td className="py-5">
                                            <div className="flex items-center text-xs font-bold text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span> Active Signal
                                            </div>
                                        </td>
                                        <td className="py-5 text-center">
                                            <span className="bg-slate-100 text-slate-900 border border-slate-200 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">100% Secure</span>
                                        </td>
                                        <td className="py-5 text-right font-bold text-primary-500">
                                            3.1x
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Sidebar Area */}
                    <div className="lg:w-80 flex flex-col space-y-6 shrink-0">

                        {/* ROI Calculator */}
                        <div className="bg-white border border-primary-500 rounded-2xl p-6 shadow-sm shadow-primary-500/10">
                            <div className="flex items-center space-x-2 mb-6">
                                <div className="bg-primary-50 text-primary-600 p-1.5 rounded-lg">
                                    <Calculator size={18} />
                                </div>
                                <h3 className="font-bold text-slate-900 text-sm">ROI Calculator</h3>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Monthly Ad Spend ($)</label>
                                    <input
                                        type="text"
                                        defaultValue="100000"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Average CPM ($)</label>
                                    <input
                                        type="text"
                                        defaultValue="12.50"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-6 mb-6">
                                <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-1">Estimated ROAS Recovery</div>
                                <div className="text-3xl font-black text-primary-500 flex items-center justify-between">
                                    +$24,500 <span className="text-[10px] tracking-widest shrink-0 text-primary-600 bg-primary-50 border border-primary-100 px-2 py-0.5 rounded ml-2 uppercase">MO/MO</span>
                                </div>
                                <p className="text-[9px] text-slate-400 mt-3 leading-relaxed">
                                    Synthetic estimation based on current match rates and signal strength. Actual results may vary by creative performance.
                                </p>
                            </div>

                            <button className="w-full bg-slate-900 text-white font-bold tracking-wider text-xs uppercase py-3.5 rounded-lg hover:bg-slate-800 transition-colors">
                                Update Projections
                            </button>
                        </div>

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
                                Fully compliant with GDPR, CCPA, and Apple App Tracking Transparency (ATT). Synthetic data anonymization active.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
