"use client";

import Link from "next/link";
import { ShieldCheck, Zap } from "lucide-react";

export default function VerifyPage() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="text-xs font-bold tracking-wider text-slate-500 mb-6 uppercase">
                Step 2: Verification
            </div>

            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl p-8 w-[400px] flex flex-col items-center justify-between min-h-[500px]">

                <div className="flex flex-col items-center w-full">
                    <div className="w-12 h-12 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck size={20} />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-2">Verification Required</h1>
                    <p className="text-sm text-slate-500 text-center mb-10 px-4">
                        Enter the code from your hardware security key or authenticator app.
                    </p>

                    <form action="/dashboard" className="w-full flex flex-col items-center">
                        <div className="flex justify-between w-full space-x-2 mb-8">
                            {[5, 8, 2, '', '', ''].map((val, idx) => (
                                <input
                                    key={idx}
                                    type="text"
                                    maxLength={1}
                                    defaultValue={val}
                                    className="w-12 h-14 text-center text-xl font-bold bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            ))}
                        </div>

                        <button type="submit" className="w-full bg-primary-500 text-white font-semibold flex items-center justify-center py-3.5 rounded-lg hover:bg-primary-600 transition-colors mb-6">
                            <span className="mr-2 text-xs">⎘</span> Verify & Enter Vault
                        </button>
                    </form>

                    <div className="flex flex-col items-center space-y-3">
                        <button className="text-[11px] font-bold tracking-wider text-slate-400 hover:text-slate-600 transition-colors uppercase">
                            Resend Verification Code
                        </button>
                        <button className="text-[11px] font-bold tracking-wider text-slate-400 hover:text-slate-600 transition-colors uppercase">
                            Use Recovery Key
                        </button>
                    </div>
                </div>

                <div className="flex items-center space-x-2 text-slate-300 mt-8">
                    <div className="w-5 h-5 bg-slate-300 rounded flex items-center justify-center text-white">
                        <Zap size={12} fill="currentColor" />
                    </div>
                    <span className="font-bold tracking-tight text-lg">AdSynth</span>
                </div>
            </div>
        </div>
    );
}
