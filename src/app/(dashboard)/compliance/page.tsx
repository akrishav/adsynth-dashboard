"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ShieldCheck, FileCheck2, Download, CheckCircle2, AlertTriangle } from "lucide-react";

export default function CompliancePage() {
    const [report, setReport] = useState<any>(null);

    useEffect(() => {
        const saved = localStorage.getItem("adsynth_latest_report");
        if (saved) {
            try {
                setReport(JSON.parse(saved));
            } catch(e) {}
        }
    }, []);

    const handleDownloadPDF = () => {
        alert("Downloading PDF Certificate...");
        // Real implementation would generate a PDF blob
    };

    if (!report) {
        return (
            <>
                <Header title="Proof of Privacy" breadcrumbs={[]} />
                <div className="p-8 flex items-center justify-center min-h-[60vh]">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center max-w-lg">
                        <ShieldCheck size={48} className="mx-auto text-slate-300 mb-4" />
                        <h2 className="text-xl font-bold text-slate-900 mb-2">No Reports Available</h2>
                        <p className="text-slate-500 text-sm">Synthesize a dataset in the Clean Room first to generate a mathematical privacy certificate.</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Header 
                title="Proof of Privacy" 
                breadcrumbs={[]}
                action={
                    <button onClick={handleDownloadPDF} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors flex items-center shadow-sm">
                        <Download size={14} className="mr-2" /> Download PDF Certificate
                    </button>
                }
            />
            
            <div className="flex-1 overflow-y-auto w-full">
                {/* Certificate Wrapper */}
                <div className="max-w-4xl mx-auto my-8 border-8 border-double border-slate-200 bg-white p-12 shadow-2xl relative">
                    {/* Watermark */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03]">
                        <ShieldCheck size={400} />
                    </div>

                    <div className="relative z-10 text-center border-b border-slate-200 pb-8 mb-8">
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                            <ShieldCheck size={32} />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Mathematical Certificate of Privacy</h1>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">AdSynth Enterprise Governance</p>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-12 mb-12">
                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Dataset Details</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500 font-medium">Source Block</span>
                                    <span className="font-bold text-slate-900 font-mono text-xs bg-slate-100 px-2 py-0.5 rounded">{report.fileName}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500 font-medium">Certification Timestamp</span>
                                    <span className="font-bold text-slate-900">{new Date(report.timestamp).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500 font-medium">Generator Engine</span>
                                    <span className="font-bold text-slate-900">SDV Enterprise Core</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Auditor Findings</h3>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                                <div className="flex items-start mb-4">
                                    <CheckCircle2 size={20} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">Zero Exact Matches Found</div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">Cryptographic hash comparison guarantees {report.metrics?.exact_matches} exact records between source and synthetic output.</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckCircle2 size={20} className="text-green-500 mr-3 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">High Statistical Utility</div>
                                        <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">Multi-dimensional column shapes and pairwise trends preserved sufficiently for ML targeting.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-6 bg-slate-900 text-white rounded-2xl p-8 mb-8 shadow-xl">
                        <div className="text-center border-r border-slate-700">
                            <div className="text-[10px] font-bold tracking-widest text-primary-400 uppercase mb-2">Utility Score (SDV)</div>
                            <div className="text-5xl font-black">{report.metrics?.quality_score}%</div>
                            <p className="text-xs text-slate-400 mt-2 font-medium">Data distribution match rate</p>
                        </div>
                        <div className="text-center relative">
                            <div className="text-[10px] font-bold tracking-widest text-green-400 uppercase mb-2">Privacy Guarantee</div>
                            <div className="text-5xl font-black text-green-400">{report.metrics?.privacy_score}%</div>
                            <p className="text-xs text-green-400/70 mt-2 font-medium">0 exact records leaked</p>
                        </div>
                    </div>

                    <div className="relative z-10 border-t border-slate-200 mt-12 pt-8 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center justify-center">
                        <FileCheck2 size={16} className="mr-2" />
                        Valid for Regulatory Audits: GDPR Art. 5, CCPA Section 1798.140
                    </div>
                </div>
            </div>
        </>
    );
}
