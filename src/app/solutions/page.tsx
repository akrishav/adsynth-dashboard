import Link from "next/link";
import { Zap, Cpu, Lock, CheckCircle2, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Signal Recovery (CAPI Proxy)",
      icon: Zap,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      desc: "Reclaim lost attribution signal due to iOS 14.5+ restrictions and tracking blockers. Our 15-minute proxy routes campaign events through secure enclaves, consistently boosting Meta and Google ROAS by 15-20% through restored event match quality.",
      features: [
        "15-Minute DNS Configuration",
        "Consistent Event Deduplication",
        "Browser Key Rehydration",
        "Cross-Network Pixel Synchronization"
      ]
    },
    {
      title: "Autonomous Ad Optimization",
      icon: Cpu,
      color: "text-green-600 bg-green-50 border-green-100",
      desc: "Connect campaign bidding loops to our AI Agent. The rules engine continuously scans CPA limits, target ROAS constraints, and creative frequency fatigue every 15 minutes. Automatically pauses losing ad sets and reallocates budget to winners.",
      features: [
        "CPA Guardrail Protections",
        "Real-time Budget Reallocation",
        "Creative Fatigue Rotations",
        "Cross-Network Multi-variate Bidding"
      ]
    },
    {
      title: "Secure Enclave Sync",
      icon: Lock,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      desc: "The only platform built specifically for strict CISO constraints. Process sensitive CRM and purchase logs entirely in volatile, hardware-isolated AWS Nitro memory. Raw PII identifiers are cryptographically purged from memory immediately post-hash.",
      features: [
        "AWS Nitro Hardware Isolation",
        "Attested memory shredding (ctypes.memset)",
        "Zero persistent storage verification logs",
        "Full CCPA & GDPR Art. 5 certification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
              <FaktorOSWordmark size={32} />
            </Link>
            <div className="flex items-center space-x-6 text-xs font-bold uppercase tracking-wider">
              <Link href="/platform" className="text-slate-500 hover:text-slate-900 transition-colors">Platform</Link>
              <Link href="/use-cases" className="text-slate-500 hover:text-slate-900 transition-colors">Use Cases</Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center">
                <ArrowLeft size={14} className="mr-1.5" /> Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            FaktorOS Solutions
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Privacy-preserving, hardware-isolated infrastructure built to restore signal and optimize campaign spend.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${sol.color}`}>
                  <sol.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{sol.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">{sol.desc}</p>
              </div>

              <div>
                <ul className="space-y-2.5 border-t border-slate-100 pt-6 mb-8 text-xs font-bold text-slate-600">
                  {sol.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center">
                      <CheckCircle2 size={14} className="text-primary-500 mr-2 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link href="mailto:luca.hoffmann@faktoros.com?subject=Book%20a%20Demo" className="w-full inline-block text-center bg-slate-900 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors">
                  Book a Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © 2026 FaktorOS · All Systems Operational
      </footer>
    </div>
  );
}
