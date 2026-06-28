"use client";

import Link from "next/link";
import { BookOpen, FileText, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function ResourcesPage() {
  const [faqs, setFaqs] = useState([
    {
      q: "How does zero-retention memory processing work?",
      a: "Customer purchase events and PII match keys (emails, phones) are loaded into mutable bytearray buffers in isolated AWS Nitro RAM enclaves. Once hashed via SHA-256 and verified, explicit memory purges (using ctypes.memset) overwrite the memory address blocks with 0x00 null bytes before garbage collection. No customer records ever touch persistent storage disk drives.",
      open: true
    },
    {
      q: "What is the CAPI proxy wedge?",
      a: "It is a serverless proxy URL configuration. By changing the endpoint URL inside your Meta Conversion API setup to FaktorOS's enclave destination, we intercept signals, secure them, rehydrate missing browser cookies lost to tracking limits, and deliver them with high-fidelity deduplication keys.",
      open: false
    },
    {
      q: "Is it compliant with GDPR Article 5 and CCPA?",
      a: "Yes. By anonymizing PII match keys cryptographically and physically destroying the source values in memory immediately, we satisfy the data minimisation and privacy-by-design standards required under GDPR Art. 5 and CCPA, completely eliminating legal data custody risks.",
      open: false
    }
  ]);

  const toggleFaq = (idx: number) => {
    setFaqs(prev => prev.map((f, i) => i === idx ? { ...f, open: !f.open } : f));
  };

  const articles = [
    { title: "Preventing Memory Leakage in Modern AdTech Pipelines", type: "Technical Guide", date: "April 2026" },
    { title: "Nitro Enclaves vs. Server Proxies: Why Stape.io & Triple Whale Fail CISO Reviews", type: "Security Whitepaper", date: "May 2026" },
    { title: "Understanding Epsilon Boundaries in Ad Attribution Systems", type: "Science & Math", date: "June 2026" }
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
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Resources & Documentation
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Technical guides, compliance standards, and FAQ manuals for developer teams.
          </p>
        </div>

        {/* Guides List */}
        <div className="space-y-12 mb-20">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center"><FileText size={20} className="mr-2 text-primary-500" /> Technical Guides & Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((art, idx) => (
              <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow h-full">
                <div className="space-y-2">
                  <div className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">{art.type}</div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{art.title}</h3>
                </div>
                <div className="pt-6 flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>{art.date}</span>
                  <Link href="/dashboard" className="text-primary-500 flex items-center hover:text-primary-600">
                    Read <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Toggles */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center"><BookOpen size={20} className="mr-2 text-primary-500" /> FAQ Manual</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={16} className={`text-slate-400 transition-transform ${faq.open ? 'rotate-180' : ''}`} />
                </button>
                {faq.open && (
                  <div className="px-6 pb-6 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © 2026 FaktorOS · All Systems Operational
      </footer>
    </div>
  );
}
