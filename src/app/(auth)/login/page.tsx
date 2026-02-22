import Link from "next/link";
import { Lock, Shield, Zap } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="text-xs font-bold tracking-wider text-slate-500 mb-6 uppercase">
                Step 1: Authentication
            </div>

            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl p-8 w-[400px] flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                    <Lock size={20} className="text-slate-900" />
                </div>

                <h1 className="text-2xl font-bold text-slate-900 mb-2">Secure Access Gateway</h1>
                <p className="text-sm text-slate-500 text-center mb-8">
                    Synthetic data infrastructure for regulated banking.
                </p>

                <form className="w-full space-y-5" action="/verify">
                    <div>
                        <label className="block text-xs font-bold tracking-wider text-slate-700 mb-2 uppercase">
                            Work Email
                        </label>
                        <input
                            type="email"
                            placeholder="name@bank-domain.com"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold tracking-wider text-slate-700 mb-2 uppercase">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-slate-400 tracking-widest text-sm"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-primary-500 text-white font-semibold py-3.5 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center pt-4 pb-4 mt-2">
                        Continue <span className="ml-2">→</span>
                    </button>
                </form>

                <div className="relative w-full my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200"></div>
                    </div>
                    <div className="relative flex justify-center text-[10px] font-bold tracking-widest uppercase">
                        <span className="bg-white px-4 text-slate-400">OR</span>
                    </div>
                </div>

                <button className="flex items-center justify-center space-x-2 w-full text-slate-600 font-medium text-sm hover:text-slate-900 transition-colors mb-10">
                    <Shield size={16} />
                    <span>SSO with Active Directory</span>
                </button>

                <div className="flex items-center space-x-2 text-slate-300">
                    <div className="w-5 h-5 bg-slate-300 rounded flex items-center justify-center text-white">
                        <Zap size={12} fill="currentColor" />
                    </div>
                    <span className="font-bold tracking-tight text-lg">AdSynth</span>
                </div>
            </div>
        </div>
    );
}
