import Link from "next/link";
import { Users, Building, ShieldCheck, ArrowRight, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function UseCasesPage() {
  const cases = [
    {
      title: "Growth Startups & SMEs",
      badge: "ROAS Signal Boost",
      icon: Users,
      color: "text-blue-600 bg-blue-50 border-blue-100",
      desc: "For startups looking to recover attribution accuracy immediately without complex data warehousing setups. Integrate the CAPI Proxy wedge in 15 minutes, recover 15-20% of lost customer purchase signals, and instantly lower CPA on Facebook and Google.",
      cta: "Explore SME Fast-Lane"
    },
    {
      title: "Performance Marketing Agencies",
      badge: "24/7 Autonomy",
      icon: Building,
      color: "text-green-600 bg-green-50 border-green-100",
      desc: "For agencies managing high daily spend across multiple client accounts. Leverage the AI Agent to scale winning ad sets and automatically pause sub-1.5 ROAS campaigns in real-time, preventing wasted budget while the team sleeps.",
      cta: "Explore Agency Solutions"
    },
    {
      title: "Enterprise Brands & CISOs",
      badge: "Compliance Guaranteed",
      icon: ShieldCheck,
      color: "text-purple-600 bg-purple-50 border-purple-100",
      desc: "For enterprise organizations bound by strict HIPAA, GDPR, or CCPA legal requirements. Deploy isolated enclaves to sync customer purchase databases and offline conversions directly to ad networks with certified proof of memory zeroing.",
      cta: "Explore Enterprise Specs"
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
              <Link href="/solutions" className="text-slate-500 hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="/platform" className="text-slate-500 hover:text-slate-900 transition-colors">Platform</Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center">
                <ArrowLeft size={14} className="mr-1.5" /> Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Operational Use Cases
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            See how different teams utilize FaktorOS to protect customer data privacy while scaling ad performance.
          </p>
        </div>

        <div className="space-y-8">
          {cases.map((c, idx) => (
            <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start md:items-center hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border ${c.color}`}>
                <c.icon size={28} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="inline-block text-[9px] font-bold tracking-widest uppercase text-slate-400">{c.badge}</div>
                <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
              <Link href="mailto:luca.hoffmann@faktoros.com?subject=Book%20a%20Demo" className="bg-slate-900 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center shrink-0 w-full md:w-auto justify-center group">
                Book a Demo
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform text-primary-400" />
              </Link>
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
