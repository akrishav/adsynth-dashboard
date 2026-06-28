import Link from "next/link";
import { Lock, FileText, Server, ShieldCheck, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function PrivacyPage() {
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
            Privacy & Trust Framework
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            FaktorOS Enterprise Governance, Cryptographic Purges, and Regulatory Compliance Policies.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-10 space-y-12">
          {/* Policy Intro */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
              <FileText size={20} className="text-primary-500 mr-2.5" /> Cryptographic Assurances
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              FaktorOS operates under a zero-retention standard. We do not store, write to disk, or lease your customer personal data (PII) at any point. When campaigns require signal conversion synchronizations, the payloads are evaluated entirely inside volatile buffers and cryptographically shredded immediately post-operation.
            </p>
          </section>

          {/* Enclaves */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
              <Server size={20} className="text-primary-500 mr-2.5" /> Isolated Enclave Boundary
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              All computing processes occur within <strong>AWS Nitro Enclaves</strong>. The enclaves utilize a virtual machine architecture that has no persistent storage, no interactive console access, and no external networking interfaces except for secure, attested cryptographic gateways. Attestation signatures (e.g. <code>PCR0</code> boot measurements) are validated before any outbound Meta CAPI or Google Ads dispatch.
            </p>
          </section>

          {/* Compliance */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center">
              <ShieldCheck size={20} className="text-primary-500 mr-2.5" /> Regulatory Compliance
            </h2>
            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
              <p>
                <strong>GDPR (Article 5 & 25):</strong> All personal data processed inside the enclaves is securely obfuscated and hashed via SHA-256. Post-hashing memory wipes ensure that data minimisation and privacy-by-design standards are mathematically guaranteed.
              </p>
              <p>
                <strong>CCPA:</strong> We act strictly as a service provider under CCPA guidelines, processing consumer data ephemerally without selling, renting, or retaining consumer metrics.
              </p>
            </div>
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
