"use client";

import Link from "next/link";
import { BookOpen, FileText, ArrowRight, ArrowLeft, ChevronDown, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

interface Article {
  title: string;
  type: string;
  date: string;
  body: string;
}

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

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const toggleFaq = (idx: number) => {
    setFaqs(prev => prev.map((f, i) => i === idx ? { ...f, open: !f.open } : f));
  };

  const articles: Article[] = [
    {
      title: "Preventing Memory Leakage in Modern AdTech Pipelines",
      type: "Technical Guide",
      date: "April 2026",
      body: `### The Problem: Dangling PII in Garbage-Collected Runtimes

Traditional high-level programming languages (such as Python, Node.js, and Java) do not immediately destroy variables in memory when they go out of scope. Instead, they rely on a Garbage Collector (GC) to reclaim memory blocks at arbitrary intervals. For compliance-locked ad attribution systems handling sensitive user metrics, this creates a major vulnerability: customer emails, names, and phone numbers can remain active in raw volatile RAM for minutes or hours after a network request finishes.

### The Solution: Hardware-Level Isolation and Ephemeral Buffers

FaktorOS solves this by using Python's raw ctypes module to allocate memory buffers. When a Conversion API (CAPI) sync request arrives, we allocate a mutable bytearray outside of standard GC routines:

\`\`\`python
# Allocate raw buffer block for PII match keys
raw_buffer = ctypes.create_string_buffer(size)
# Process and compute SHA-256 hash inside enclave boundary
hash_payload = hashlib.sha256(raw_buffer.raw).hexdigest()
\`\`\`

Immediately after dispatching the secure hashed payload to the target marketing network, we forcefully write null bytes directly to that memory register:

\`\`\`python
# Zero out raw PII memory immediately post-hash
ctypes.memset(ctypes.addressof(raw_buffer), 0x00, size)
\`\`\`

By ensuring that customer PII exists only as ephemeral buffers in RAM and is explicitly zeroed before GC cycles, we physically prevent dangling variable leaks and satisfy GDPR Article 5 and CCPA standards.`
    },
    {
      title: "Nitro Enclaves vs. Server Proxies: Why Stape.io & Triple Whale Fail CISO Reviews",
      type: "Security Whitepaper",
      date: "May 2026",
      body: `### The Proxy Trap: Customer Data in Transit

Many modern e-commerce brands use server-side proxies (such as Stape.io) or analytical tags (such as Triple Whale) to bypass ad blockers. While these systems successfully route conversion signals, they present a massive compliance loophole:
1. **Third-Party Custody:** They run on standard cloud servers (such as GCP or AWS EC2) where data is decrypted and processed in standard application memory.
2. **Access Vulnerabilities:** Root administrators, cloud engineers, or malicious actors with server access can run memory dumps to scrape active database variables.
3. **Data Logging:** Under standard server configurations, error logs often store raw request headers containing customer emails and order values.

### The FaktorOS Standard: Crytographically Attested AWS Nitro Enclaves

FaktorOS operates strictly inside **AWS Nitro Enclaves**. An enclave is a virtual machine with:
* No persistent storage disk.
* No interactive console access (no ssh/bash connectivity for any admin).
* Only a secure virtual socket (vsock) communicating with the host.

Furthermore, we utilize **Cryptographic Attestation**. Before any destination ad network accepts a conversion dispatch, the enclave generates a signed document containing PCR measurements proving that the code running inside is unmodified and secure. This eliminates human access vectors, satisfying strict enterprise CISO requirements.`
    },
    {
      title: "Understanding Epsilon Boundaries in Ad Attribution Systems",
      type: "Science & Math",
      date: "June 2026",
      body: `### Differential Privacy in B2B Customer Analytics

When sharing synthetic twin files or auditing attribution performance, we must mathematically guarantee that original customer identities cannot be reverse-engineered from aggregated marketing trends. FaktorOS utilizes **Differential Privacy** principles, specifically focusing on enforcing strict **Epsilon (ε)** boundaries.

### Math Behind the Boundary

Differential privacy measures the privacy loss parameter, Epsilon (ε), when executing queries over a database containing sensitive customer actions. Epsilon defines how much information an observer can learn about an individual in the database:

$$\\text{Pr}[\\mathcal{M}(D) \\in S] \\le e^\\epsilon \\times \\text{Pr}[\\mathcal{M}(D') \\in S]$$

Where:
* $D$ is the original customer database.
* $D'$ is the database with one individual's record removed.
* $\\mathcal{M}$ is the randomized synthesis algorithm.

### Multi-Dimensional Utility Audit

To maintain high ad targeting utility while keeping Epsilon targets strictly below $\\epsilon = 0.10$, our GAN models:
1. Audit correlation metrics across multi-dimensional features (e.g., customer zip code + purchase volume).
2. Apply calibrated Gaussian noise to prevent unique outliers from escaping the enclave.
3. Guarantee **zero exact matches** on sensitive columns, ensuring that the synthesized dataset mirrors conversion statistics without mirroring any real customer.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative">
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
                  <button 
                    onClick={() => setSelectedArticle(art)}
                    className="text-primary-500 flex items-center hover:text-primary-600 font-bold text-[10px] uppercase tracking-wider"
                  >
                    Read <ArrowRight size={12} className="ml-1" />
                  </button>
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

      {/* Article Slide-over / Modal Panel */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animate-slide-in relative">
            <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100 shrink-0">
              <div className="space-y-1">
                <span className="text-[9px] font-bold text-primary-500 tracking-wider uppercase bg-primary-50 px-2 py-0.5 rounded">{selectedArticle.type}</span>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">{selectedArticle.date}</div>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 sm:p-10 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {selectedArticle.title}
              </h2>
              
              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-6">
                {selectedArticle.body.split("\n\n").map((para, pidx) => {
                  if (para.startsWith("###")) {
                    return <h3 key={pidx} className="text-base sm:text-lg font-black text-slate-900 pt-4 border-b border-slate-100 pb-2">{para.replace("### ", "")}</h3>;
                  }
                  if (para.startsWith("1.") || para.startsWith("*")) {
                    return (
                      <ul key={pidx} className="list-disc pl-5 space-y-2">
                        {para.split("\n").map((li, lidx) => (
                          <li key={lidx}>{li.replace("* ", "").replace(/\d+\.\s+/, "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (para.startsWith("```")) {
                    const lines = para.split("\n");
                    const code = lines.slice(1, lines.length - 1).join("\n");
                    return (
                      <pre key={pidx} className="bg-slate-950 text-slate-200 p-4 rounded-xl font-mono text-[11px] overflow-x-auto leading-normal">
                        <code>{code}</code>
                      </pre>
                    );
                  }
                  return <p key={pidx}>{para}</p>;
                })}
              </div>
            </div>

            <div className="border-t border-slate-100 p-6 bg-slate-50/80 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Verified Compliance Document</span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © 2026 FaktorOS · All Systems Operational
      </footer>
    </div>
  );
}
