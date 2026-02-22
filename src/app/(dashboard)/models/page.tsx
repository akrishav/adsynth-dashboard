import { Header } from "@/components/Header";
import { Cpu, Terminal, UploadCloud, Settings, Activity, Database } from "lucide-react";

export default function ModelsPage() {
    return (
        <>
            <Header
                title="GAN Engine Configuration"
                breadcrumbs={[]}
                action={
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20">
                        <UploadCloud size={16} className="mr-2" /> Deploy Core Update
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Model Architecture</h1>
                        <p className="text-sm text-slate-500">Base Transformer: <span className="font-mono font-medium text-slate-700">AdSynth-Synth-v4-Large</span></p>
                    </div>

                    <div className="bg-slate-900 text-white px-4 py-2 rounded-lg flex items-center space-x-3 shadow-lg">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-[10px] font-mono tracking-widest uppercase">Training Active: Epoch 1,442</span>
                    </div>
                </div>

                {/* Top Section: Node Structure */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-8 relative overflow-hidden flex items-center justify-center min-h-[240px]">
                    {/* Decorative Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>

                    <div className="relative z-10 w-full max-w-3xl flex justify-between items-center">

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-white border-2 border-slate-300 rounded-2xl shadow-sm flex items-center justify-center text-slate-400 mb-3 z-10">
                                <Database size={32} />
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 text-center">
                                Raw Data<br />(Encrypted)
                            </div>
                        </div>

                        <div className="h-0.5 bg-slate-300 flex-1 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Input</div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 bg-primary-500 border-4 border-white rounded-full shadow-xl shadow-primary-500/20 flex items-center justify-center text-white mb-3 z-10 relative">
                                <Cpu size={36} />
                                <div className="absolute -inset-1 border border-primary-300 rounded-full animate-ping opacity-20"></div>
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase text-primary-600 text-center">
                                Generator<br />Network
                            </div>
                        </div>

                        <div className="h-0.5 bg-primary-200 flex-1 relative overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-1/3 bg-primary-500 shadow-[0_0_8px_#0ea5e9]"></div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-slate-800 border-2 border-slate-700 rounded-2xl shadow-lg flex items-center justify-center text-white mb-3 z-10">
                                <Activity size={32} />
                            </div>
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-700 text-center">
                                Discriminator<br />Evaluation
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Split */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Telemetry Chart */}
                    <div className="lg:w-2/3 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-slate-900 mb-1">Training Telemetry</h2>
                                <p className="text-xs text-slate-500">Loss Curve: Discriminator vs Generator</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-[10px] font-bold tracking-widest uppercase text-primary-600">
                                    <span className="w-3 h-1 bg-primary-500 mr-2 rounded"></span> Generator Loss
                                </div>
                                <div className="flex items-center text-[10px] font-bold tracking-widest uppercase text-slate-500">
                                    <span className="w-3 h-1 bg-slate-800 mr-2 rounded"></span> Discriminator Loss
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 relative min-h-[250px] border-l border-b border-slate-100 pl-4 pb-4">
                            <svg className="absolute inset-0 w-full h-full p-4" preserveAspectRatio="none" viewBox="0 0 100 100">
                                {/* Grid lines */}
                                <path d="M0,25 L100,25 M0,50 L100,50 M0,75 L100,75" stroke="#f1f5f9" strokeWidth="1" vectorEffect="non-scaling-stroke" />

                                {/* Generator Line (smooth decreasing log curve) */}
                                <path d="M0,90 Q 20,40 50,30 T 100,20" fill="none" stroke="#0ea5e9" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />

                                {/* Discriminator Line (noisy stable) */}
                                <path d="M0,40 L10,50 L20,45 L30,55 L40,48 L50,52 L60,49 L70,51 L80,48 L90,52 L100,50" fill="none" stroke="#1e293b" strokeWidth="2" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
                            </svg>

                            <div className="absolute bottom-[-20px] left-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Epoch 0</div>
                            <div className="absolute bottom-[-20px] right-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Epoch 1500</div>
                        </div>

                        {/* Terminal Snippet */}
                        <div className="mt-8 bg-slate-900 rounded-xl p-4 flex items-start space-x-3 text-sm">
                            <Terminal size={16} className="text-slate-500 mt-1 shrink-0" />
                            <div className="font-mono text-slate-300">
                                <div className="text-green-400">root@adsynth-node-01:~# tail -f /var/log/gan/train.log</div>
                                <div>[INFO] Epoch 1442: G_loss = 0.2114, D_loss = 0.5012</div>
                                <div>[INFO] Privacy bound ε calculated: 0.1221 (Secure)</div>
                                <div className="text-slate-500">...</div>
                            </div>
                        </div>
                    </div>

                    {/* Hyperparameters Panel */}
                    <div className="lg:w-1/3 bg-white border border-primary-500 rounded-2xl shadow-sm shadow-primary-500/10 flex flex-col overflow-hidden">
                        <div className="bg-primary-50 border-b border-primary-100 p-6 flex items-center space-x-3">
                            <Settings size={20} className="text-primary-600" />
                            <h2 className="text-lg font-bold text-primary-900">Hyperparameters</h2>
                        </div>

                        <div className="p-6 flex-1 space-y-8">
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Epsilon Schedule</label>
                                    <span className="text-xs font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">Adaptive</span>
                                </div>
                                <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
                                    <option>Adaptive Decay</option>
                                    <option>Fixed Target (0.10)</option>
                                    <option>Momentum Guided</option>
                                </select>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Privacy Clip Norm</label>
                                </div>
                                <input type="text" defaultValue="1.50" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Batch Processing Rate</label>
                                    <span className="text-xs font-mono font-bold text-primary-600">4096</span>
                                </div>
                                <div className="w-full relative py-2">
                                    <div className="h-1.5 bg-slate-100 rounded-full w-full">
                                        <div className="h-full bg-primary-500 rounded-full w-[60%]"></div>
                                    </div>
                                    <div className="absolute top-[4px] left-[60%] w-4 h-4 bg-white border-2 border-primary-500 rounded-full shadow cursor-pointer transform -translate-x-1/2"></div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-100 bg-slate-50">
                            <button className="w-full bg-primary-500 text-white font-bold tracking-wider text-xs uppercase py-3.5 rounded-lg hover:bg-primary-600 transition-colors">
                                Update Parameters
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
// Note: added simple Database icon import mentally, let me add it manually in an inline Edit.
