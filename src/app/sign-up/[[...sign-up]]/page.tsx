import { SignUp } from "@clerk/nextjs";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8 flex items-center space-x-2">
        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
          <Zap size={20} fill="currentColor" />
        </div>
        <span className="font-bold text-2xl tracking-tight text-slate-900">AdSynth</span>
      </Link>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" forceRedirectUrl="/dashboard" />
    </div>
  );
}
