"use client";

import { Header } from "@/components/Header";
import { FeedbackButton } from "@/components/BlobButtons";
import { Search, Plus, ShieldCheck, User, X, CheckCircle2, AlertTriangle, Info, ChevronRight } from "lucide-react";
import { useState } from "react";

const INITIAL_MEMBERS = [
    { name: "Sarah Chen", email: "sarah.c@adsynth.ai", role: "Privacy Officer", access: "Production, Research", mfa: "ENABLED", mfaStatus: "safe", avatar: "SC", perms: { capi: true, pii: false, logs: true } },
    { name: "Marcus Knight", email: "m.knight@adsynth.ai", role: "Data Scientist", access: "Staging", mfa: "ENABLED", mfaStatus: "safe", avatar: "MK", perms: { capi: false, pii: false, logs: false } },
    { name: "Lena Ross", email: "l.ross@audit.com", role: "External Auditor", access: "Audit Logs", mfa: "SMS-ONLY", mfaStatus: "warning", avatar: "LR", perms: { capi: false, pii: false, logs: true } },
    { name: "James Bennet", email: "j.bennet@adsynth.ai", role: "DevOps", access: "Infrastructure", mfa: "DISABLED", mfaStatus: "danger", avatar: "JB", perms: { capi: true, pii: false, logs: false } },
];

function Toggle({ enabled, onChange }: { enabled: boolean; onChange: () => void }) {
    return (
        <div
            onClick={onChange}
            className={`relative inline-flex h-6 w-11 items-center rounded-full shrink-0 cursor-pointer transition-colors duration-200 ${enabled ? "bg-primary-500" : "bg-slate-200"}`}
        >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${enabled ? "translate-x-6" : "translate-x-1"}`} />
        </div>
    );
}

export default function TeamPage() {
    const [members, setMembers] = useState(INITIAL_MEMBERS);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [panelOpen, setPanelOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [ipRange, setIpRange] = useState("192.168.1.0/24, 10.0.4.0/16");

    const filteredMembers = members.filter(m =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const selected = members[selectedIdx];

    const togglePerm = (key: keyof typeof selected.perms) => {
        setMembers(prev => prev.map((m, i) =>
            i === selectedIdx ? { ...m, perms: { ...m.perms, [key]: !m.perms[key] } } : m
        ));
    };

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
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                            />
                        </div>
                        <FeedbackButton
                            icon={Plus}
                            label="Invite Authorized User"
                            alertMessage="Secure invite link sent to the provisioned email based on RBAC mapping rules."
                            className="bg-primary-500 text-white px-4 py-2.5 rounded-lg flex items-center font-semibold text-sm hover:bg-primary-600 transition-colors"
                        />
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50/50">
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Member</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Role</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">Vault Access</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400">2FA Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold tracking-widest uppercase text-slate-400 text-right">Edit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredMembers.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-10 text-center text-slate-400 text-sm">No users match your search.</td>
                                    </tr>
                                ) : filteredMembers.map((member, idx) => {
                                    const realIdx = members.findIndex(m => m.email === member.email);
                                    const isSelected = realIdx === selectedIdx && panelOpen;
                                    return (
                                        <tr
                                            key={idx}
                                            onClick={() => { setSelectedIdx(realIdx); setPanelOpen(true); }}
                                            className={`cursor-pointer transition-colors ${isSelected ? "bg-primary-50/50 border-l-4 border-l-primary-500" : "hover:bg-slate-50"}`}
                                        >
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
                                            <td className="px-6 py-4 text-sm text-slate-600">{member.access}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center text-xs font-bold uppercase tracking-wider">
                                                    {member.mfaStatus === "safe" && <CheckCircle2 size={14} className="text-primary-500 mr-2" />}
                                                    {member.mfaStatus === "warning" && <AlertTriangle size={14} className="text-orange-500 mr-2" />}
                                                    {member.mfaStatus === "danger" && <X size={14} className="text-slate-400 mr-2" />}
                                                    <span className={member.mfaStatus === "safe" ? "text-primary-600" : member.mfaStatus === "warning" ? "text-orange-600" : "text-slate-500"}>
                                                        {member.mfa}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <ChevronRight size={16} className={`ml-auto transition-colors ${isSelected ? "text-primary-500" : "text-slate-300"}`} />
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Sidebar - Granular Permissions */}
                {panelOpen && selected && (
                    <div className="w-96 border-l border-slate-200 bg-white flex flex-col h-full overflow-y-auto">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                            <h2 className="text-lg font-bold text-slate-900">Granular Permissions</h2>
                            <button onClick={() => setPanelOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 flex-1">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-lg">
                                    {selected.avatar}
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">{selected.name}</div>
                                    <div className="text-xs font-bold tracking-widest text-primary-500 uppercase mt-0.5">{selected.role}</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-100 pb-2">Core Lab Actions</h3>

                                <div className="flex items-start justify-between">
                                    <div className="pr-4">
                                        <div className="font-semibold text-sm text-slate-900 mb-1">Can Push to CAPI</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Allows manual sync to high-security Cloud API nodes.</div>
                                    </div>
                                    <Toggle enabled={selected.perms.capi} onChange={() => togglePerm("capi")} />
                                </div>

                                <div className="flex items-start justify-between">
                                    <div className="pr-4">
                                        <div className="font-semibold text-sm text-slate-900 mb-1">Can View Raw PII</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Restricted access to unmasked personally identifiable data.</div>
                                    </div>
                                    <Toggle enabled={selected.perms.pii} onChange={() => togglePerm("pii")} />
                                </div>

                                <div className="flex items-start justify-between">
                                    <div className="pr-4">
                                        <div className="font-semibold text-sm text-slate-900 mb-1">Can Export Audit Logs</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">Required for external governance reporting.</div>
                                    </div>
                                    <Toggle enabled={selected.perms.logs} onChange={() => togglePerm("logs")} />
                                </div>

                                <h3 className="text-[10px] font-bold tracking-widest text-slate-400 uppercase border-b border-slate-100 pb-2 pt-4">Network Restrictions</h3>

                                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                                    <div className="flex items-center space-x-2 mb-3">
                                        <User size={14} className="text-primary-500" />
                                        <span className="text-xs font-bold text-slate-700">Authorized IP Range</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={ipRange}
                                        onChange={e => setIpRange(e.target.value)}
                                        className="font-mono text-xs text-slate-600 bg-white border border-slate-200 px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>

                                <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-4 flex items-start space-x-3">
                                    <Info size={16} className="text-primary-500 mt-0.5 shrink-0" />
                                    <div>
                                        <h4 className="text-xs font-bold text-primary-700 mb-1">Audit Log Requirement</h4>
                                        <p className="text-[11px] text-primary-600/80 leading-relaxed">
                                            Changes to {selected.name.split(" ")[0]}&apos;s permissions will be logged and require secondary approval from the Global Admin.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-slate-100 bg-slate-50 flex space-x-3 sticky bottom-0">
                            <FeedbackButton
                                label="Save Changes"
                                alertMessage={`${selected.name}'s access rules saved successfully and logged to audit trail.`}
                                className="flex-1 bg-primary-500 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-600 transition-colors"
                            />
                            <FeedbackButton
                                label="Discard"
                                alertMessage="Changes discarded. No modifications were applied."
                                className="flex-1 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors"
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
