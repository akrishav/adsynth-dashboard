import Link from "next/link";
import { Cloud, Lock, Server, Info, Network, Code, ShieldCheck } from "lucide-react";

export default function InstallPage() {
    return (
        <>
            {/* Wizard Steps */}
            <div className="px-10 pt-10 pb-6 border-b border-slate-100 flex items-center justify-between relative">
                <div className="absolute top-[3.25rem] left-24 right-24 h-[2px] bg-slate-100 -z-10"></div>
                <div className="absolute top-[3.25rem] left-24 w-1/4 h-[2px] bg-primary-500 -z-10"></div>

                <div className="flex flex-col items-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-primary-500 bg-white flex items-center justify-center relative">
                        <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900">Environment</span>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-xs font-bold text-slate-400">
                        02
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Vault Access</span>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-xs font-bold text-slate-400">
                        03
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Engine Init</span>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center text-xs font-bold text-slate-400">
                        04
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">Verification</span>
                </div>
            </div>

            <div className="flex flex-1">
                {/* Main Content Form */}
                <div className="flex-1 p-10 pr-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Configure Private Cloud Vault</h2>
                    <p className="text-sm text-slate-500 mb-8 max-w-lg leading-relaxed">
                        Establish a secure perimeter for your AI instances by defining your VPC parameters and encryption standards.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold tracking-wider text-slate-700 mb-4 uppercase">
                                Cloud Provider Selection
                            </label>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="border border-primary-500 bg-primary-50/30 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer relative">
                                    <Cloud size={28} className="text-slate-800 mb-3" fill="currentColor" />
                                    <span className="text-xs font-bold text-slate-900 tracking-wide uppercase">AWS VPC</span>
                                </div>
                                <div className="border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-slate-300 transition-colors">
                                    <Cloud size={28} className="text-slate-400 mb-3" />
                                    <span className="text-xs font-medium text-slate-500 tracking-wide">Azure VNet</span>
                                </div>
                                <div className="border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-slate-300 transition-colors">
                                    <Network size={28} className="text-slate-400 mb-3" />
                                    <span className="text-xs font-medium text-slate-500 tracking-wide">Google VPC</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-wider text-slate-700 mb-2 uppercase">
                                Security Group ID
                            </label>
                            <input
                                type="text"
                                placeholder="sg-0a1b2c3d4e5f6g7h8"
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm placeholder:text-slate-400"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold tracking-wider text-slate-700 mb-2 uppercase">
                                KMS Key ARN
                            </label>
                            <input
                                type="text"
                                placeholder="arn:aws:kms:us-east-1:123456789012:key/..."
                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 font-mono text-sm placeholder:text-slate-400"
                            />
                            <p className="text-[11px] italic text-slate-400 mt-2">AdSynth requires 'Encrypt' and 'Decrypt' permissions on the provided KMS key.</p>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar Info */}
                <div className="w-[300px] border-l border-slate-100 bg-slate-50/50 p-8 flex flex-col">
                    <h3 className="text-xs font-bold tracking-wider text-slate-900 mb-6 uppercase">Technical Requirements</h3>

                    <div className="space-y-8 flex-1">
                        <div className="flex items-start">
                            <Info size={16} className="text-primary-500 mr-3 mt-0.5 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">VPC Peering</h4>
                                <p className="text-xs leading-relaxed text-slate-600">Ensure the target VPC has an active peering connection to the AdSynth Management Hub.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Lock size={16} className="text-primary-500 mr-3 mt-0.5 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Egress Rules</h4>
                                <p className="text-xs leading-relaxed text-slate-600">Port 443 must be open for outbound traffic to the AdSynth Global Registry.</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Code size={16} className="text-primary-500 mr-3 mt-0.5 shrink-0" />
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 mb-1">Automation</h4>
                                <p className="text-xs leading-relaxed text-slate-600 mb-2">Prefer to use IaC?</p>
                                <Link href="#" className="text-xs font-semibold text-primary-500 hover:text-primary-600 flex items-center">
                                    View Terraform Template <span className="ml-1">↗</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-4 mt-6">
                        <div className="flex items-center space-x-2 mb-2">
                            <ShieldCheck size={14} className="text-slate-400" />
                            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Compliance Status</span>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-relaxed">
                            Architecture matches Swiss Banking Standard (SBS) Rev 4.2 guidelines.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="px-10 py-6 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <button className="text-sm font-bold tracking-wider uppercase text-slate-400 hover:text-slate-600 transition-colors">
                    Cancel Installation
                </button>
                <Link href="/dashboard" className="bg-primary-500 text-white px-8 py-3.5 rounded-lg font-bold tracking-wide uppercase text-sm hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
                    Initialize Secure Tunnel
                </Link>
            </div>
        </>
    );
}
