import { Header } from "@/components/Header";
import { BookOpen, Download, Share, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ComplianceReportPage() {
    return (
        <>
            <Header
                title="Compliance Report"
                breadcrumbs={[{ label: "Governance", href: "#" }, { label: "Compliance Report" }]}
                action={
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors uppercase tracking-wider shadow-sm">
                            <Share size={14} className="mr-1" /> Share Secure Link
                        </button>
                        <button className="flex items-center space-x-2 text-xs font-bold text-white bg-primary-500 px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors uppercase tracking-wider shadow-sm">
                            <Download size={14} className="mr-1" /> Export PDF
                        </button>
                    </div>
                }
            />

            {/* Trust Header below main header */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-3 flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                <div className="flex space-x-8">
                    <div className="flex items-center space-x-2 text-primary-600">
                        <ShieldCheck size={14} /> <span>VERIFIED BY ADSYNTH GAN ENGINE</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                        <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center"><CheckCircle2 size={10} /></span>
                        <span>GDPR COMPLIANT ARCHITECTURE</span>
                    </div>
                </div>
                <div className="text-slate-400 font-mono">
                    ID: ADSYNTH-AUDIT-2024-Q392-F1A9-X
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 lg:p-12 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 bg-white">

                {/* Main Document Content */}
                <div className="lg:w-2/3 pr-0 lg:pr-8">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Mathematical Proof of Privacy</h1>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl">
                        This document certifies the synthetic data generation process and differential privacy guarantees applied to the <span className="font-bold text-slate-900">Q3 Financial Data Sync</span>.
                    </p>

                    <div className="w-full h-1 bg-slate-900 mb-12"></div>

                    {/* Section 01 */}
                    <div className="mb-12">
                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-1">Section 01</span>
                                <h2 className="text-xl font-bold text-slate-900">Privacy-Utility Frontier</h2>
                            </div>
                            <div className="text-[10px] font-mono tracking-widest text-slate-400">Epsilon Optimization Curve (ε)</div>
                        </div>

                        <div className="w-full aspect-[21/9] bg-white border border-slate-100 rounded-2xl relative overflow-hidden shadow-sm p-6">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_2px,transparent_2px),linear-gradient(to_bottom,#f8fafc_2px,transparent_2px)] bg-[size:2rem_2rem] opacity-70"></div>

                            <svg className="absolute inset-0 w-full h-full p-8" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <path d="M0,80 Q 50,70 100,20" fill="none" stroke="#0ea5e9" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />

                                {/* Dotted lines for intersection */}
                                <path d="M0,50 L40,50" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                                <path d="M40,100 L40,50" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />

                                <circle cx="40" cy="50" r="3" fill="#0ea5e9" />
                            </svg>

                            <div className="absolute bottom-6 left-8 text-[9px] font-bold tracking-widest text-slate-400 uppercase">High Privacy (Low ε)</div>
                            <div className="absolute bottom-6 right-8 text-[9px] font-bold tracking-widest text-slate-400 uppercase">High Utility (High ε)</div>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-widest text-primary-500 uppercase">Current Balance (ε = 0.12)</div>
                        </div>
                    </div>

                    {/* Section 02 */}
                    <div className="mb-12">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-1">Section 02</span>
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Risk Assessment Indicators</h2>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white border-2 border-primary-500 rounded-xl p-6 shadow-sm shadow-primary-500/10 text-center">
                                <div className="text-[10px] font-bold tracking-widest text-primary-500 uppercase pl-1 mb-2">Re-identification Risk</div>
                                <div className="text-3xl font-black text-primary-500 mb-1">Near Zero</div>
                                <div className="text-xs text-slate-500">P &lt; 0.00001%</div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-center">
                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase pl-1 mb-2">Records Processed</div>
                                <div className="text-3xl font-black text-slate-900 mb-1">1,024,500</div>
                                <div className="text-xs font-bold text-green-500">+12% <span className="text-slate-400 font-normal">vs previous sync</span></div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm text-center">
                                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase pl-1 mb-2">Attack Resistance</div>
                                <div className="text-3xl font-black text-slate-900 mb-1">99.9%</div>
                                <div className="text-xs text-slate-500">Bayesian Bound Verified</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 03 */}
                    <div className="mb-12">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 block mb-1">Section 03</span>
                        <h2 className="text-xl font-bold text-slate-900 mb-6">Differential Privacy (ε) Audit</h2>

                        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-900 text-white">
                                        <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase w-1/3">Parameter</th>
                                        <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-center w-1/3">Mathematical Value</th>
                                        <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-right w-1/3">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 font-mono text-sm">
                                    <tr>
                                        <td className="px-6 py-5 font-bold text-slate-900 font-sans">Privacy Budget (ε)</td>
                                        <td className="px-6 py-5 text-center text-primary-600 font-bold">0.1224</td>
                                        <td className="px-6 py-5 text-right">
                                            <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold tracking-widest uppercase rounded">Optimal</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-5 font-bold text-slate-900 font-sans">Delta Parameter (δ)</td>
                                        <td className="px-6 py-5 text-center text-primary-600 font-bold">1e-7</td>
                                        <td className="px-6 py-5 text-right">
                                            <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold tracking-widest uppercase rounded">Secure</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-5 font-bold text-slate-900 font-sans">L2-Sensitivity Bound</td>
                                        <td className="px-6 py-5 text-center text-primary-600 font-bold">1.00</td>
                                        <td className="px-6 py-5 text-right">
                                            <span className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-[10px] font-bold tracking-widest uppercase rounded">Clamped</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-5 font-bold text-slate-900 font-sans">Noise Mechanism</td>
                                        <td className="px-6 py-5 text-center text-primary-600 font-bold">Gaussian-GAN</td>
                                        <td className="px-6 py-5 text-right">
                                            <span className="inline-flex items-center px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold tracking-widest uppercase rounded">Verified</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-8 mt-16 flex justify-between text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                        <span>© 2024 ADSYNTH PROTOCOL INC. CONFIDENTIAL COMPLIANCE DOCUMENT</span>
                        <div className="flex space-x-6">
                            <span className="hover:text-slate-600 cursor-pointer">PRIVACY POLICY</span>
                            <span className="hover:text-slate-600 cursor-pointer">TERMS OF SERVICE</span>
                            <span className="hover:text-slate-600 cursor-pointer">SECURITY DISCLOSURE</span>
                        </div>
                    </div>

                </div>

                {/* Right Sidebar - Legal Context */}
                <div className="lg:w-1/3 flex flex-col pt-4">
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 mb-8">
                        <BookOpen size={24} className="text-primary-500 mb-6" />
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Legal Context</h3>
                        <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-6">Auditor's Summary</div>

                        <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-8">
                            <p>
                                This report utilizes <strong>GAN-based (Generative Adversarial Network) Anonymization</strong> to create a synthetic representation of your underlying dataset.
                            </p>
                            <p>
                                Unlike traditional masking, GANs generate entirely new records that share the statistical properties of the original data without any direct 1:1 mapping. This ensures that no individual's personal information is contained within the output file.
                            </p>
                            <p>
                                The <em>Differential Privacy ε-budget</em> of 0.12 ensures that the mathematical probability of a "membership inference attack" is statistically negligible, meeting the highest compliance standards for financial and medical data privacy.
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">Official Stamps</div>
                            <div className="flex space-x-4">
                                <div className="w-16 h-16 rounded-full border border-primary-300 flex items-center justify-center text-[8px] font-bold text-primary-600 text-center leading-tight tracking-widest bg-primary-50/50">
                                    ADSYNTH<br />CERTIFIED
                                </div>
                                <div className="w-16 h-16 rounded-full border border-slate-300 flex items-center justify-center text-[8px] font-bold text-slate-500 text-center leading-tight tracking-widest bg-white">
                                    ISO 27001<br />ALIGN
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-white border border-slate-200 text-slate-700 px-4 py-3 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors shadow-sm">
                            Request Full Methodology
                        </button>
                    </div>

                    <div>
                        <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-2 pl-2">Verification Signature</div>
                        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-center items-center">
                            <div className="font-[cursive] text-2xl text-slate-300 opacity-60 mb-2 italic">
                                Dr. Aris Thorne - Chief Privacy Officer
                            </div>
                            <div className="text-[8px] font-mono text-slate-300 tracking-widest uppercase">
                                Hash: 44f2...3a8c | 2024-10-24 14:30:02 UTC
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
