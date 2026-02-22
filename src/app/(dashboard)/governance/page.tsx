import { Header } from "@/components/Header";
import { Download, ShieldCheck, Globe, Database, ShieldAlert } from "lucide-react";

export default function GovernancePage() {
    const regions = [
        { name: "North America", standards: "HIPAA, CCPA, SOC2", status: "Audited", review: "Q4 2024" },
        { name: "European Union", standards: "GDPR, FINMA", status: "Audited", review: "Q1 2025" },
        { name: "Asia Pacific", standards: "PDPA, APPI", status: "In Progress", review: "Q3 2024" },
    ];

    return (
        <>
            <Header
                title="Global Privacy Governance"
                breadcrumbs={[]}
                action={
                    <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/20">
                        <Download size={14} className="mr-2" /> Generate Board Report
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Global Privacy Governance</h1>
                <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    High-level compliance overview, regional regulatory alignment, and macro-level privacy metrics.
                </p>

                {/* Real-Time Compliance Status */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm flex items-center justify-center flex-col md:flex-row md:justify-start mb-8 transition-colors hover:bg-green-100/50">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6 shrink-0 relative shadow-sm border border-green-200">
                        <ShieldCheck size={32} />
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-ping"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="text-center md:text-left">
                        <div className="text-[12px] font-bold tracking-widest text-green-600 uppercase mb-1">Real-Time Compliance Status</div>
                        <h2 className="text-xl md:text-2xl font-black text-green-800 tracking-tight">ALL SYSTEMS OPERATIONAL. 14 GLOBAL NODES SECURED.</h2>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 mb-8">

                    {/* Global Node Map */}
                    <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                        <div className="relative z-10 flex justify-between items-start mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">Global Node Map</h3>
                                <p className="text-xs text-slate-500">Active GAN processing centers</p>
                            </div>
                            <div className="bg-primary-50 px-3 py-1 rounded text-[10px] font-bold text-primary-600 tracking-widest uppercase border border-primary-100 flex items-center">
                                <Globe size={14} className="mr-2" /> Live Track
                            </div>
                        </div>

                        {/* Mock Map Element */}
                        <div className="flex-1 relative w-full flex justify-center items-center opacity-70">
                            {/* Decorative world map concept using SVG paths (simplified generic vectors) */}
                            <svg viewBox="0 0 1000 500" className="w-full h-full text-slate-200" fill="currentColor">
                                <path d="M200,150 Q220,130 250,140 T300,120 Q350,100 400,150 T450,200 Q500,220 550,180 T650,100 Q700,90 750,150 T800,250 Q850,300 900,280 T950,350 Q850,450 750,400 T600,350 Q550,400 500,380 T400,450 Q300,400 250,350 T150,300 Q100,250 150,200 Z" stroke="#cbd5e1" strokeWidth="2" fill="#f8fafc" />

                                {/* Node markers */}
                                <g transform="translate(250, 180)">
                                    <circle cx="0" cy="0" r="12" fill="#0ea5e9" opacity="0.2" className="animate-ping" />
                                    <circle cx="0" cy="0" r="4" fill="#0ea5e9" />
                                </g>
                                <g transform="translate(300, 220)">
                                    <circle cx="0" cy="0" r="12" fill="#0ea5e9" opacity="0.2" className="animate-ping" style={{ animationDelay: '0.5s' }} />
                                    <circle cx="0" cy="0" r="4" fill="#0ea5e9" />
                                </g>
                                <g transform="translate(550, 200)">
                                    <circle cx="0" cy="0" r="12" fill="#0ea5e9" opacity="0.2" className="animate-ping" style={{ animationDelay: '1s' }} />
                                    <circle cx="0" cy="0" r="4" fill="#0ea5e9" />
                                </g>
                                <g transform="translate(680, 260)">
                                    <circle cx="0" cy="0" r="12" fill="#0ea5e9" opacity="0.2" className="animate-ping" style={{ animationDelay: '1.5s' }} />
                                    <circle cx="0" cy="0" r="4" fill="#0ea5e9" />
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Metric Cards Stack */}
                    <div className="lg:w-1/3 flex flex-col space-y-6">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center">
                            <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center rounded-xl mr-4 shadow-sm">
                                <Database size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Total Protected Records</div>
                                <div className="text-2xl font-black text-slate-900">4.2B</div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center">
                            <div className="w-12 h-12 bg-primary-50 text-primary-500 flex items-center justify-center rounded-xl mr-4 border border-primary-100 shadow-sm">
                                <span className="text-lg font-bold">ε</span>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Average Epsilon Budget</div>
                                <div className="text-2xl font-black text-slate-900">0.12</div>
                            </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center">
                            <div className="w-12 h-12 bg-green-50 text-green-500 flex items-center justify-center rounded-xl mr-4 border border-green-100 shadow-sm">
                                <ShieldAlert size={24} />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Active Threats Blocked</div>
                                <div className="text-2xl font-black text-slate-900">14,204</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Regional Compliance Matrix */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
                    <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-lg font-bold text-slate-900">Regional Compliance Matrix</h2>
                    </div>

                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-slate-100">
                                <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Region</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Standard Frameworks</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Current Status</th>
                                <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Next Review</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-sm">
                            {regions.map((reg, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5 font-bold text-slate-900">
                                        {reg.name}
                                    </td>
                                    <td className="px-6 py-5 font-mono text-xs text-slate-600">
                                        {reg.standards}
                                    </td>
                                    <td className="px-6 py-5">
                                        {reg.status === 'Audited' && (
                                            <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-green-600 bg-green-50 border border-green-100 px-2.5 py-1 rounded-full">
                                                <ShieldCheck size={10} className="mr-1.5" /> Audited
                                            </span>
                                        )}
                                        {reg.status === 'In Progress' && (
                                            <span className="inline-flex items-center text-[10px] font-bold tracking-widest uppercase text-primary-600 bg-primary-50 border border-primary-100 px-2.5 py-1 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-1.5 animate-pulse"></span> In Progress
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-5 font-mono text-xs text-slate-500">
                                        {reg.review}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}
