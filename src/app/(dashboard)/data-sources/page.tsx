import { Header } from "@/components/Header";
import { Plus, Database, Link as LinkIcon, CheckCircle2, AlertCircle } from "lucide-react";

export const dynamic = "force-dynamic";

export default function DataSourcesPage() {
    return (
        <>
            <Header
                title="Integrations & Data Sources"
                breadcrumbs={[{ label: "Data Sources", href: "/data-sources" }]}
                action={
                    <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center shadow-sm">
                        <Plus size={16} className="mr-2" /> Add Integration
                    </button>
                }
            />

            <div className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 mb-2">Connected Platforms</h1>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                            Connect your ad networks and e-commerce platforms. The agent needs read-access to monitor performance, and write-access to pause ad sets and reallocate budgets.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Meta Ads API */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center font-bold text-xl">
                                f
                            </div>
                            <div className="flex items-center bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-green-200">
                                <CheckCircle2 size={12} className="mr-1" /> Connected
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Meta Ads API</h3>
                        <p className="text-xs text-slate-500 mb-6 flex-1">Read performance metrics (ROAS, CPA, CPC) and write pause/scale commands to Meta campaigns.</p>
                        
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600 mb-4">
                            <span>Account ID: 10839482910</span>
                        </div>
                        <button className="w-full text-center text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg py-2 hover:bg-slate-50 transition-colors">
                            Manage Connection
                        </button>
                    </div>

                    {/* Meta CAPI */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                                <Database size={24} />
                            </div>
                            <div className="flex items-center bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-green-200">
                                <CheckCircle2 size={12} className="mr-1" /> Connected
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Meta Conversions API (Zero-Retention)</h3>
                        <p className="text-xs text-slate-500 mb-6 flex-1">The AWS Nitro Enclave CAPI proxy. Recovers lost iOS signals by dispatching hashed PII directly to Meta.</p>
                        
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600 mb-4">
                            <span>Pixel ID: 88291038471</span>
                        </div>
                        <button className="w-full text-center text-sm font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg py-2 hover:bg-slate-50 transition-colors">
                            Manage Connection
                        </button>
                    </div>

                    {/* Google Ads */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#EA4335]/10 text-[#EA4335] flex items-center justify-center font-bold text-xl">
                                G
                            </div>
                            <div className="flex items-center bg-yellow-50 text-yellow-700 px-2.5 py-1 rounded-md text-xs font-semibold border border-yellow-200">
                                <AlertCircle size={12} className="mr-1" /> Reconnect Required
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Google Ads API</h3>
                        <p className="text-xs text-slate-500 mb-6 flex-1">Read performance metrics from Search, PMax, and Display campaigns, and write budget reallocations.</p>
                        
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600 mb-4">
                            <span className="text-red-500">OAuth Token Expired</span>
                        </div>
                        <button className="w-full text-center text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 rounded-lg py-2 transition-colors flex justify-center items-center">
                            <LinkIcon size={14} className="mr-2" /> Re-authenticate
                        </button>
                    </div>

                    {/* Shopify */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#95BF47]/10 text-[#95BF47] flex items-center justify-center font-bold text-xl">
                                S
                            </div>
                            <button className="flex items-center text-slate-500 hover:text-primary-600 text-xs font-semibold px-2.5 py-1">
                                <Plus size={12} className="mr-1" /> Connect
                            </button>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Shopify Webhooks</h3>
                        <p className="text-xs text-slate-500 mb-6 flex-1">Stream purchase events directly into the Zero-Retention Enclave to act as the source-of-truth for ROAS.</p>
                        
                        <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                            <span>No store connected</span>
                        </div>
                        <button className="w-full text-center text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg py-2 transition-colors">
                            Connect Store
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
