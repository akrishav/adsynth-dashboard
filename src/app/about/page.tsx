import Link from "next/link";
import { ShieldCheck, Target, Server, Users, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
              <FaktorOSWordmark size={32} />
            </Link>
            <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center">
                <ArrowLeft size={14} className="mr-1.5" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            About FaktorOS
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Pioneering the world's first hardware-enforced, zero-retention marketing optimization engine.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-10 space-y-12">
          {/* Mission */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
              <Target size={20} className="text-primary-500 mr-2.5" /> Our Mission
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              FaktorOS was founded in Berlin with a simple, singular mandate: to bridge the gap between autonomous AI operations and strict data compliance. As advertising networks increasingly rely on high-fidelity user signals, traditional SaaS architectures have created immense CISO and legal exposure. We believe that privacy shouldn't bottleneck performance.
            </p>
          </section>

          {/* Infrastructure */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
              <Server size={20} className="text-primary-500 mr-2.5" /> Ephemeral Processing
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike legacy attribution platforms that store customer PII on physical disks, FaktorOS operates entirely within volatile, hardware-isolated RAM enclaves. Using AWS Nitro technology and cryptographic attestation protocols, we ensure customer identifiers are wiped via <code>ctypes.memset</code> immediately post-operation. We build software that physically cannot retain your data.
            </p>
          </section>

          {/* Leadership/Team */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
              <Users size={20} className="text-primary-500 mr-2.5" /> Built for Scale
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Engineered by distributed systems and ad-tech veterans, FaktorOS manages over $18,000/day in ad spend for leading brands, recovering signal attribution, lowering CPA, and scaling ROAS under strict GDPR Art. 5 and CCPA standards.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © 2026 FaktorOS · All Systems Operational
      </footer>
    </div>
  );
}
