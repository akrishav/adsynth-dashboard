import Link from "next/link";
import { Users, Briefcase, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function CompanyHubPage() {
  const links = [
    { title: "About Us", href: "/about", desc: "Read our mission of building secure ad-tech infrastructure and team history.", icon: Users },
    { title: "Careers", href: "/careers", desc: "Browse open developer and design roles in Berlin or remote.", icon: Briefcase },
    { title: "Privacy Policy", href: "/privacy", desc: "Inspect compliance specs, AWS Nitro Enclaves, and attestation logs.", icon: FileText }
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Our Company
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            FaktorOS was engineered to build high-utility, hardware-isolated advertising software. Learn more about us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {links.map((link, idx) => (
            <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200">
                  <link.icon size={18} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{link.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{link.desc}</p>
              </div>
              <div className="pt-6">
                <Link href={link.href} className="text-xs font-bold uppercase tracking-wider text-primary-500 hover:text-primary-600 flex items-center group">
                  Open Page
                  <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Global footprints */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Distributed Architecture</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-lg mx-auto">
            FaktorOS engineering and administration operate out of **Berlin, Germany**, with nodes and enclave execution centers distributed across **Dublin, Ireland** and **Frankfurt, Germany**.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © 2026 FaktorOS · All Systems Operational
      </footer>
    </div>
  );
}
