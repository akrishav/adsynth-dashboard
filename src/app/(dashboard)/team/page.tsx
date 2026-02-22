import { Header } from "@/components/Header";
import { Search, Plus, ShieldCheck, User, X, CheckCircle2, AlertTriangle, Info } from "lucide-react";

export default function TeamPage() {
    const teamMembers = [
        { name: "Sarah Chen", email: "sarah.c@adsynth.ai", role: "Privacy Officer", access: "Production, Research", mfa: "ENABLED", mfaStatus: "safe", avatar: "SC" },
        { name: "Marcus Knight", email: "m.knight@adsynth.ai", role: "Data Scientist", access: "Staging", mfa: "ENABLED", mfaStatus: "safe", avatar: "MK" },
        { name: "Lena Ross", email: "l.ross@audit.com", role: "External Auditor", access: "Audit Logs", mfa: "SMS-ONLY", mfaStatus: "warning", avatar: "LR" },
        { name: "James Bennet", email: "j.bennet@adsynth.ai", role: "DevOps", access: "Infrastructure", mfa: "DISABLED", mfaStatus: "danger", avatar: "JB" },
    ];

    return (
        <>
            <Header
                title="Access Control & Governance"
                action={
                    <div className="flex items-center text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                        <ShieldCheck size={14} className="mr-1.5" /> FIPS 140-2 Compliant Environment
                    </div>
                }
            />

            <div className="flex-1 flex overflow-hidden">
                {/* Main Content Area */}
                <div className="flex-1 p-8 overflow-y-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div className="relative w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search authorized users..."
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                            />
                        </div>
                        <button className="bg-primary-500 text-white px-4 py-2.5 rounded-lg flex items-center font-semibold text-sm hover:bg-primary-600 transition-colors">
                            <Plus size={18} className="mr-2" /> Invite Authorized User
                        </button>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50/50">
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Member</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Role</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Vault Access</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">2FA Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {teamMembers.map((member, idx) => (
                                    <tr key={idx} className={`hover:bg-slate-50 cursor-pointer transition-colors ${idx === 0 ? 'bg-primary-50/30' : ''}`}>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-sm shrink-0">
                                                    {member.avatar}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-slate-900 text-sm">{member.name}</div>
                                                    <div className="text-xs text-slate-500">{member.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                                                {member.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {member.access}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center text-xs font-bold uppercase tracking-wider">
                                                {member.mfaStatus === 'safe' && <CheckCircle2 size={14} className="text-primary-500 mr-2" />}
                                                {member.mfaStatus === 'warning' && <AlertTriangle size={14} className="text-orange-500 mr-2" />}
                                                {member.mfaStatus === 'danger' && <X size={14} className="text-slate-400 mr-2" />}
                                                <span className={
                                                    member.mfaStatus === 'safe' ? 'text-primary-600' :
                                                        member.mfaStatus === 'warning' ? 'text-orange-600' : 'text-slate-500'
                                                }>
                                                    {member.mfa}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Sidebar - Granular Permissions */}
                <div className="w-96 border-l border-slate-200 bg-white flex flex-col h-full overflow-y-auto">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                        <h2 className="text-lg font-bold text-slate-900">Granular Permissions</h2>
                        <button className="text-slate-400 hover:text-slate-600 transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-6 flex-1">
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-lg">
                                SC
                            </div>
                            <div>
                                <div className="font-bold text-slate-900">Sarah Chen</div>
                                <div className="text-xs font-bold tracking-widest text-primary-500 uppercase mt-0.5">Privacy Officer</div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-100 pb-2">Core Lab Actions</h3>

                            <div className="flex items-start justify-between">
                                <div className="pr-4">
                                    <div className="font-semibold text-sm text-slate-900 mb-1">Can Push to CAPI</div>
                                    <div className="text-xs text-slate-500 leading-relaxed">Allows manual sync to high-security Cloud API nodes.</div>
                                </div>
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500 shrink-0 cursor-pointer">
                                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                                </div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="pr-4">
                                    <div className="font-semibold text-sm text-slate-900 mb-1">Can View Raw PII</div>
                                    <div className="text-xs text-slate-500 leading-relaxed">Restricted access to unmasked personally identifiable data.</div>
                                </div>
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 shrink-0 cursor-pointer">
                                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1" />
                                </div>
                            </div>

                            <div className="flex items-start justify-between">
                                <div className="pr-4">
                                    <div className="font-semibold text-sm text-slate-900 mb-1">Can Export Audit Logs</div>
                                    <div className="text-xs text-slate-500 leading-relaxed">Required for external governance reporting.</div>
                                </div>
                                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-500 shrink-0 cursor-pointer">
                                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6" />
                                </div>
                            </div>

                            <h3 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-100 pb-2 pt-4">Network Restrictions</h3>

                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-3">
                                    <User size={14} className="text-primary-500" />
                                    <span className="text-xs font-bold text-slate-700">Authorized IP Range</span>
                                </div>
                                <div className="font-mono text-xs text-slate-600 bg-white border border-slate-200 px-3 py-2 rounded-lg">
                                    192.168.1.0/24, 10.0.4.0/16
                                </div>
                            </div>

                            <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-4 flex items-start space-x-3">
                                <Info size={16} className="text-primary-500 mt-0.5 shrink-0" />
                                <div>
                                    <h4 className="text-xs font-bold text-primary-700 mb-1">Audit Log Requirement</h4>
                                    <p className="text-[11px] text-primary-600/80 leading-relaxed">
                                        Changes to Sarah's permissions will be logged and require secondary approval from the Global Admin.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 border-t border-slate-100 bg-slate-50 flex space-x-3 sticky bottom-0">
                        <button className="flex-1 bg-primary-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-colors">
                            Save Changes
                        </button>
                        <button className="flex-1 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors">
                            Discard
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
