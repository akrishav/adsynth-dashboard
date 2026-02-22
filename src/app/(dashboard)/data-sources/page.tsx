import { Header } from "@/components/Header";
import { Plus, Cpu, Cloud, Database, ShieldCheck, RefreshCcw } from "lucide-react";

export default function DataSourcesPage() {
    return (
        <>
            <Header
                title="Secure Data Connections"
                breadcrumbs={[]}
                action={
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20">
                        <Plus size={16} className="mr-2" /> Add New Source
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 w-full">
                <h1 className="text-2xl font-bold text-slate-900 mb-1">Secure Data Connections</h1>
                <p className="text-sm text-slate-500 mb-8">Managing 4 active vaults across cloud and hybrid environments.</p>

                {/* Global Engine Banner */}
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-slate-900 rounded-xl flex items-center justify-center text-primary-500 relative shadow-lg">
                            <Cpu size={28} />
                            <div className="absolute top-[-4px] right-[-4px] w-4 h-4 bg-primary-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-1">AdSynth GAN Engine</h2>
                            <p className="text-sm text-slate-500">Processing real-time differential privacy obfuscation.</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-8 mt-6 md:mt-0">
                        <div className="text-center">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Latency</div>
                            <div className="text-xl font-black text-slate-900">14<span className="text-sm">ms</span></div>
                        </div>
                        <div className="text-center">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Throughput</div>
                            <div className="text-xl font-black text-slate-900">2.4 <span className="text-sm">GB/s</span></div>
                        </div>
                        <div className="text-center pr-4">
                            <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Status</div>
                            <div className="text-xl font-black text-primary-500 uppercase tracking-tight">Optimal</div>
                        </div>
                    </div>
                </div>

                {/* Connections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: AWS */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600">
                                <Cloud size={24} fill="currentColor" />
                            </div>
                            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                <span>Connected</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-2">AWS S3 Vault</h3>
                        <p className="text-xs text-slate-500 mb-8 flex-1">Production customer records storage.</p>

                        <div className="border-t border-slate-100 pt-4 mt-auto">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                                    <RefreshCcw size={10} className="mr-1" /> Last Sync: 2 mins ago
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheck size={14} className="text-primary-500 mr-2" />
                                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">ID: AWS-SRCE-099</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Expanded On-Premise */}
                    <div className="lg:col-span-2 bg-white border-2 border-primary-500 rounded-2xl flex flex-col lg:flex-row shadow-lg shadow-primary-500/10 overflow-hidden relative">
                        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-gradient-to-tr from-primary-50 to-transparent -z-10 opacity-50"></div>

                        <div className="p-6 lg:w-1/2 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-100">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white relative">
                                    <Database size={24} />
                                </div>
                                <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow animate-pulse"></span>
                                    <span>Active Tunnel</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">On-Premise SQL</h3>
                            <p className="text-xs text-slate-500 mb-8">Internal financial ledger connection.</p>

                            <div className="space-y-4 mb-8 text-sm">
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">IP Address</span>
                                    <span className="font-mono font-medium text-slate-900">192.168.1.144</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Port</span>
                                    <span className="font-mono font-medium text-slate-900">5432</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2">
                                    <span className="text-slate-500">Protocol</span>
                                    <span className="font-mono font-medium text-slate-900">gRPC Secure</span>
                                </div>
                            </div>

                            <button className="w-full bg-slate-800 text-white flex items-center justify-center py-3 rounded-xl hover:bg-slate-900 transition-colors mt-auto text-sm font-semibold shadow-md">
                                <RefreshCcw size={16} className="mr-2 text-slate-400" /> Test Connection
                            </button>
                        </div>

                        <div className="p-6 lg:w-1/2 flex flex-col justify-center bg-slate-50/50">
                            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-6">Differential Privacy Settings</div>

                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm mb-1">Enable GAN Obfuscation</h4>
                                    <p className="text-[11px] text-slate-500 leading-relaxed pr-4">Synthetically mask PII before it leaves the on-premise vault.</p>
                                </div>
                                {/* Toggle Switch */}
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500 shrink-0 cursor-pointer">
                                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 rounded-xl p-6 mt-4 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-xs font-bold text-slate-900">Privacy Budget (ε)</span>
                                </div>

                                <div className="w-full relative py-3">
                                    <div className="h-1 bg-slate-200 rounded-full w-full">
                                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '40%' }}></div>
                                    </div>
                                    <div className="absolute top-[8px] left-[40%] w-4 h-4 bg-primary-500 border-2 border-white rounded-full cursor-pointer transform -translate-x-1/2 shadow-sm"></div>
                                </div>
                                <div className="flex justify-between items-center text-[9px] font-bold tracking-widest uppercase text-slate-400 mt-2">
                                    <span>High Privacy</span>
                                    <span className="text-primary-500 border border-primary-200 px-1 rounded bg-primary-50">Current: 0.4</span>
                                    <span>High Utility</span>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center text-[10px] font-bold tracking-widest uppercase text-primary-600">
                                <ShieldCheck size={14} className="mr-2" /> EAL4+ CERTIFIED TUNNEL
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Google Clould */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 font-bold border border-slate-100 shadow-sm">
                                Ξ
                            </div>
                            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                <span>Connected</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-2">Google Cloud Storage</h3>
                        <p className="text-xs text-slate-500 mb-8 flex-1">Global asset and log archival.</p>

                        <div className="border-t border-slate-100 pt-4 mt-auto">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                                    <RefreshCcw size={10} className="mr-1" /> Last Sync: 1 hour ago
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheck size={14} className="text-primary-500 mr-2" />
                                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">ID: GCS-VAULT-22</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Snowflake */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600">
                                <div className="text-2xl mt-1">❄</div>
                            </div>
                            <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase text-primary-500 bg-primary-50 px-2.5 py-1 rounded-full border border-primary-100">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                <span>Connected</span>
                            </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 mb-2">Snowflake Warehouse</h3>
                        <p className="text-xs text-slate-500 mb-8 flex-1">Enterprise data warehouse node.</p>

                        <div className="border-t border-slate-100 pt-4 mt-auto">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                                    <RefreshCcw size={10} className="mr-1" /> Last Sync: 45 mins ago
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheck size={14} className="text-primary-500 mr-2" />
                                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">ID: SNOW-9122</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
