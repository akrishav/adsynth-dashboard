import { Header } from "@/components/Header";
import { UploadCloud, File, ShieldAlert, Cpu, CheckCircle2 } from "lucide-react";

export default function CleanRoomPage() {
    return (
        <>
            <Header
                title="Clean Room Workspace"
                action={
                    <div className="flex items-center space-x-3">
                        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors">
                            Save Template
                        </button>
                        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-slate-800 transition-colors shadow-md">
                            <Cpu size={14} className="mr-2" /> Synthesize Data
                        </button>
                    </div>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Synthesis Configuration</h1>
                <p className="text-sm text-slate-500 mb-8 max-w-2xl leading-relaxed">
                    Upload sensitive datasets into the ephemeral secure enclave. Data is obfuscated in memory and mathematical proofs are generated instantly.
                </p>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Column: Input & Progress */}
                    <div className="lg:w-2/3 space-y-8 flex flex-col">

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex-1">
                            <h2 className="text-lg font-bold text-slate-900 mb-6">Source Dataset</h2>

                            {/* Upload Area */}
                            <div className="border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50 hover:bg-primary-50 hover:border-primary-300 transition-colors p-12 flex flex-col items-center justify-center cursor-pointer min-h-[300px]">
                                <div className="w-16 h-16 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center text-primary-500 mb-6">
                                    <UploadCloud size={28} />
                                </div>
                                <div className="text-sm font-bold text-slate-900 mb-2">Drag and drop file here</div>
                                <div className="text-xs text-slate-500 mb-6 font-mono bg-white px-3 py-1 rounded border border-slate-100">
                                    Upload CSV, JSON, or Parquet
                                </div>
                                <button className="bg-white border border-slate-200 text-slate-700 px-6 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-sm hover:border-slate-300 transition-colors">
                                    Browse Files
                                </button>
                            </div>
                        </div>

                        {/* Active Processing State (Mocked) */}
                        <div className="bg-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <h2 className="text-lg font-bold text-white">Data Synthesis Progress</h2>
                                <span className="text-[10px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 px-3 py-1 rounded-full">
                                    Running
                                </span>
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center text-sm font-mono text-slate-300 bg-slate-800 border border-slate-700 p-4 rounded-xl">
                                    <File size={16} className="text-primary-400 mr-3 shrink-0" />
                                    <span className="truncate flex-1">Generating: <strong>user_transactions_synthetic.csv</strong></span>
                                    <span className="text-primary-400 font-bold ml-4 shrink-0">3.2 GB</span>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3">
                                        <span>Applying GAN Mapping</span>
                                        <span className="text-white">85%</span>
                                    </div>
                                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary-500 rounded-full relative">
                                            <div className="absolute inset-0 bg-white/20 animate-[pulse_1s_ease-in-out_infinite]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Constraints */}
                    <div className="lg:w-1/3">
                        <div className="bg-white border border-primary-500 rounded-2xl shadow-sm shadow-primary-500/10 p-6 sticky top-8">
                            <div className="flex items-center space-x-3 border-b border-primary-100 pb-4 mb-6">
                                <ShieldAlert size={20} className="text-primary-600" />
                                <h2 className="text-lg font-bold text-slate-900">Privacy Constraints</h2>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Target Epsilon (ε)</label>
                                        <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded uppercase tracking-wider">Strict</span>
                                    </div>
                                    <input type="text" defaultValue="0.10" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" />
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Outlier Clipping Percentile</label>
                                    </div>
                                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow appearance-none">
                                        <option>99.9th Percentile</option>
                                        <option>99.0th Percentile</option>
                                        <option>95.0th Percentile</option>
                                    </select>
                                </div>

                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                                    <h3 className="text-xs font-bold text-slate-900 mb-4 uppercase tracking-wider">Transformations</h3>

                                    <div className="space-y-4">
                                        <label className="flex items-start cursor-pointer">
                                            <div className="w-5 h-5 rounded border border-primary-500 bg-primary-500 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">Categorical Suppression</div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">Hide categories with fewer than 50 occurrences to prevent targeted attacks.</div>
                                            </div>
                                        </label>

                                        <label className="flex items-start cursor-pointer">
                                            <div className="w-5 h-5 rounded border border-primary-500 bg-primary-500 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">Format Preserving Encryption</div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">Maintain string structures (e.g. SSNs, Emails) in synthetic output.</div>
                                            </div>
                                        </label>

                                        <label className="flex items-start cursor-pointer opacity-60">
                                            <div className="w-5 h-5 rounded border border-slate-300 bg-white mr-3 shrink-0 mt-0.5">
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">Time-Series Offset</div>
                                                <div className="text-[11px] text-slate-500 leading-relaxed mt-1">Add randomized jitter to temporal data points.</div>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
