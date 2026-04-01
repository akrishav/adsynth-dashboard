import { Header } from "@/components/Header";
import { List, Download, Activity, Database, CheckCircle2, Search } from "lucide-react";
import { getAuditLogs } from "@/app/actions";

export default async function AuditLogsPage() {
    const logs = await getAuditLogs();

    return (
        <>
            <Header 
                title="Global Audit Logs" 
                breadcrumbs={[{ label: "Governance" }, { label: "Audit Logs" }]}
                action={
                    <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors flex items-center shadow-sm">
                        <Download size={14} className="mr-2" /> Export CSV Let
                    </button>
                }
            />
            
            <div className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">System Audit Records</h1>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                            A complete, immutable log of all data interactions, synthesis operations, and external sync events across your environment.
                        </p>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                        <div className="relative w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input 
                                type="text"
                                placeholder="Search logs..."
                                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                        </div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 py-1.5 bg-slate-200 rounded-full">
                            {logs.length} Events Logged
                        </div>
                    </div>

                    {logs.length === 0 ? (
                        <div className="text-center py-16">
                            <List size={48} className="mx-auto text-slate-300 mb-4" />
                            <h3 className="text-slate-900 font-bold mb-2">No logs found</h3>
                            <p className="text-slate-500 text-sm">System events will appear here automatically.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-white">
                                    <tr className="border-b border-slate-100">
                                        <th className="py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-slate-400">Timestamp</th>
                                        <th className="py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-slate-400">Action Type</th>
                                        <th className="py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-slate-400">Details</th>
                                        <th className="py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-slate-400">User</th>
                                        <th className="py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-slate-400">Metrics</th>
                                        <th className="py-4 px-6 text-[10px] font-bold tracking-widest uppercase text-slate-400 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {logs.map((log) => (
                                        <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="py-4 px-6 whitespace-nowrap text-xs text-slate-500">
                                                {new Date(log.createdAt).toLocaleString()}
                                            </td>
                                            <td className="py-4 px-6">
                                                <div className="flex items-center">
                                                    {log.action === 'SYNTHESIS_RUN' ? (
                                                        <Database size={14} className="text-primary-500 mr-2 shrink-0" />
                                                    ) : (
                                                        <Activity size={14} className="text-green-500 mr-2 shrink-0" />
                                                    )}
                                                    <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                                                        log.action === 'SYNTHESIS_RUN' ? 'bg-primary-50 text-primary-600 border border-primary-100' : 'bg-green-50 text-green-600 border border-green-100'
                                                    }`}>
                                                        {log.action.replace('_', ' ')}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 font-medium text-slate-900 truncate max-w-xs">
                                                {log.details}
                                            </td>
                                            <td className="py-4 px-6 text-slate-600">
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 rounded-full bg-slate-200 mr-2 flex items-center justify-center text-[10px] font-bold text-slate-600">SA</div>
                                                    {log.user}
                                                </div>
                                            </td>
                                            <td className="py-4 px-6 text-xs text-slate-500 whitespace-nowrap">
                                                {log.metrics}
                                            </td>
                                            <td className="py-4 px-6 text-right">
                                                <div className="flex items-center justify-end text-green-600 font-medium">
                                                    <CheckCircle2 size={14} className="mr-1.5" />
                                                    {log.status}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
