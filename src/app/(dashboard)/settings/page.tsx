import { Header } from "@/components/Header";
import { Info, ShieldCheck } from "lucide-react";

export default function SecuritySettingsPage() {
    return (
        <>
            <Header
                title="Security Settings"
                breadcrumbs={[{ label: "Settings", href: "/settings" }, { label: "Security" }]}
                action={
                    <button className="flex items-center space-x-2 text-xs font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-wider bg-white">
                        View Audit Logs
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">Security Settings</h1>
                <p className="text-sm text-slate-500 mb-10 leading-relaxed max-w-3xl">
                    Configure advanced GAN engine parameters, differential privacy epsilon budgets, and cryptographic key management for enterprise-grade data protection.
                </p>

                {/* Section 01: GAN Engine Configuration */}
                <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-6 relative">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 shrink-0">Section 01</span>
                        <div className="h-px bg-slate-200 w-full"></div>
                        <span className="text-xs font-bold text-slate-900 shrink-0 whitespace-nowrap">GAN Engine Configuration</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col lg:flex-row shadow-sm">
                        <div className="lg:w-1/2 pr-8 flex flex-col justify-center">
                            <h3 className="text-sm font-bold text-slate-900 mb-2">Synthetic Utility vs. Privacy Trade-off</h3>
                            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
                                Balance the mathematical fidelity of generated synthetic data against strict differential privacy boundaries.
                            </p>

                            <div className="w-full relative py-4">
                                <div className="h-1.5 bg-slate-100 rounded-full w-full">
                                    <div className="h-full bg-primary-500 rounded-full w-[65%]"></div>
                                </div>
                                <div className="absolute top-[8px] left-[65%] w-5 h-5 bg-white border-2 border-primary-500 rounded-full shadow cursor-pointer transform -translate-x-1/2"></div>

                                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-4">
                                    <span>Max Privacy</span>
                                    <span>Balanced</span>
                                    <span>Max Utility</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 mt-8 lg:mt-0 relative aspect-[2/1] border border-slate-100 rounded-xl bg-slate-50 overflow-hidden flex items-center justify-center">
                            {/* Decorative background grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"></div>

                            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <path d="M10,80 Q 50,80 70,40 T 95,20" fill="none" stroke="#0ea5e9" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                                <circle cx="70" cy="40" r="3" fill="#0ea5e9" />
                            </svg>

                            <div className="absolute top-[30%] left-[68%] text-primary-600 font-bold text-xs tracking-wider">
                                f(x, ε) = 0.65
                            </div>

                            <div className="absolute bottom-3 right-3 flex space-x-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500/30"></span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500/30"></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 02: Differential Privacy Budget */}
                <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-6 relative">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 shrink-0">Section 02</span>
                        <div className="h-px bg-slate-200 w-full"></div>
                        <span className="text-xs font-bold text-slate-900 shrink-0 whitespace-nowrap">Differential Privacy (ε) Budget</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col lg:flex-row shadow-sm">
                        <div className="lg:w-1/2 pr-8 flex flex-col justify-center">
                            <label className="flex items-center text-sm font-bold text-slate-900 mb-4">
                                Privacy Epsilon (ε) <Info size={14} className="text-slate-400 ml-2" />
                            </label>

                            <div className="relative mb-4 max-w-xs border border-primary-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary-500">
                                <input
                                    type="text"
                                    defaultValue="0.10"
                                    className="w-full px-4 py-3 bg-white text-lg font-bold text-slate-900 focus:outline-none"
                                />
                                <div className="absolute right-0 top-0 bottom-0 px-4 py-3 bg-white flex items-center border-l border-primary-50">
                                    <span className="text-[10px] font-bold tracking-widest text-primary-500 uppercase">Budget Cap</span>
                                </div>
                            </div>

                            <p className="text-xs text-slate-500">
                                Current Protection Level: <span className="font-bold text-primary-500">Strict Mathematical Guarantee</span>
                            </p>
                        </div>

                        <div className="lg:w-1/2 mt-8 lg:mt-0 bg-slate-50/50 border-l-4 border-primary-500 rounded-r-xl p-8">
                            <h4 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Formula Context</h4>
                            <div className="font-mono text-xs text-slate-600 bg-white border border-slate-200 p-4 rounded-lg mb-4 whitespace-pre-wrap leading-relaxed shadow-sm">
                                Pr[K(D1) ∈ S] ≤ exp(ε) · Pr[K(D2) ∈ S] + δ
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed font-mono">
                                With ε=0.10, the probability of any single record affecting the output remains within a factor of 1.105x.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 03: Encryption & Keys */}
                <div className="mb-12">
                    <div className="flex items-center space-x-4 mb-6 relative">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 shrink-0">Section 03</span>
                        <div className="h-px bg-slate-200 w-full"></div>
                        <span className="text-xs font-bold text-slate-900 shrink-0 whitespace-nowrap">Encryption & Keys</span>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-2/5">Key Identifier</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5">Algorithm</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 w-1/5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-slate-900 text-sm mb-1">production-gan-v4-master</div>
                                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">CREATED: OCT 12, 2023</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center text-[10px] font-bold tracking-widest text-green-600 uppercase bg-green-50 w-max px-2.5 py-1 rounded-full border border-green-100">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span> Secure
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-mono text-xs text-slate-500">AES-256-GCM</div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-800 transition-colors">
                                            Rotate Key
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-5">
                                        <div className="font-bold text-slate-900 text-sm mb-1">staging-gan-v3-legacy</div>
                                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">CREATED: AUG 04, 2023</div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span> Archived
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="font-mono text-xs text-slate-500">AES-256-GCM</div>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <button className="bg-white border border-slate-200 text-slate-400 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase disabled cursor-not-allowed">
                                            Rotate Key
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    );
}
