import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lock, Server, ShieldCheck, Database, List, Cpu, Zap, Activity } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <FaktorOSWordmark size={34} />
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <Link href="#platform" className="hover:text-slate-900 transition-colors">How It Works</Link>
              <Link href="#infrastructure" className="hover:text-slate-900 transition-colors">Zero-Retention Infrastructure</Link>
              <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center space-x-4 text-sm font-medium">
              <Link href="/sign-in" className="text-slate-600 hover:text-slate-900 transition-colors">Log In</Link>
              <Link href="/sign-up" className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} />
              <span>Zero-Retention Architecture</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              The AI Agent That Runs Ads <span className="text-primary-500">Autonomously</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              FaktorOS monitors performance across Meta, Google, and TikTok, pauses losing ad sets, and reallocates budget to winners. <strong className="font-semibold text-slate-900">Zero Retention. Zero Risk.</strong>
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/activations" className="bg-slate-900 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center group">
                View Live Dashboard
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="mailto:contact@faktoros.com" className="bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center">
                Book Enterprise Demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-white rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
            <div className="relative bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 aspect-square flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative Grid bg */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>

              <div className="relative z-10 flex flex-col items-center space-y-8 w-full">
                <div className="flex justify-between w-full max-w-xs text-slate-400 mb-2">
                  <Activity size={20} className="text-green-500 animate-pulse" />
                  <Database size={20} />
                  <Server size={20} />
                </div>

                <div className="w-full bg-slate-900 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-6 relative z-20">
                  <div className="text-xs font-mono text-primary-400 mb-2 w-full text-left">&gt; AUTONOMOUS_ACTION_LOG</div>
                  <div className="text-xs font-mono text-slate-300 w-full text-left space-y-1">
                    <p>[08:42] Analyzing Meta Campaign: Q3_Retargeting</p>
                    <p className="text-red-400">[08:43] Ad Set 2 ROAS &lt; 1.5. Paused.</p>
                    <p className="text-green-400">[08:43] Reallocating $500/day to Ad Set 1.</p>
                    <p className="text-primary-300">[08:44] Action Complete. Memory Wiped.</p>
                  </div>
                </div>

                <div className="flex w-full max-w-xs justify-between mt-2">
                  <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs mb-1">f</div>
                    <span className="text-[10px] font-medium text-slate-500">META API</span>
                  </div>
                  <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs mb-1">G</div>
                    <span className="text-[10px] font-medium text-slate-500">GOOGLE ADS</span>
                  </div>
                </div>
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-[-10px] bg-white border border-slate-100 shadow-lg rounded-xl p-3 flex items-center space-x-3">
                <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Zero-Retention Verified</div>
                  <div className="text-[10px] text-slate-500">AWS NITRO ENCLAVES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400 text-sm font-semibold uppercase tracking-wider items-center">
          <span className="flex items-center gap-2"><ShieldCheck size={16} /> CISO APPROVED</span>
          <span className="flex items-center gap-2"><Lock size={16} /> NO LEGAL REVIEW REQUIRED</span>
          <span className="flex items-center gap-2"><Server size={16} /> AWS NITRO NATIVE</span>
          <span className="flex items-center gap-2"><Database size={16} /> ZERO DATA STORED</span>
        </div>
      </div>

      {/* How It Works (Platform) */}
      <div id="platform" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Smartest Way to Scale Ad Spend</h2>
          <p className="text-slate-600">Start with our 15-minute CAPI proxy wedge to immediately boost ROAS, then upgrade to full autonomous bidding.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'The Wedge: Signal Recovery', icon: Zap, desc: 'Replace a single URL in your Meta CAPI config. 15-minute integration. Immediate 15-20% ROAS improvement from restored signals lost to iOS 14.5.' },
            { step: '02', title: 'Zero-Retention Routing', icon: Lock, desc: 'All customer data is processed in volatile memory and cryptographically destroyed after each operation. Existing solutions store your data — we don\'t.' },
            { step: '03', title: 'Autonomous Action', icon: Cpu, desc: 'Our AI agent monitors performance 24/7. It pauses underperforming ad sets and reallocates budget to winners. We act, autonomously.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                <item.icon size={24} />
              </div>
              <div className="text-xs font-bold text-primary-500 tracking-wider mb-2">PHASE {item.step}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Zero-Retention Infrastructure (Science) */}
      <div id="infrastructure" className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                The Only Ad Agent <br /><span className="text-primary-400">CISOs Approve</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm lg:text-base">
                Competitors like Stape.io and Triple Whale store your customer data, creating massive legal exposure. We built an execution layer that physically cannot retain data.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-400 p-1 rounded-full mr-4 mt-1">
                    <Server size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Hardware-Enforced Ephemeral Processing</h4>
                    <p className="text-slate-400 text-sm mt-1">Built entirely on AWS Nitro Enclaves. Processing happens in isolated, volatile memory without persistent storage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-400 p-1 rounded-full mr-4 mt-1">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Cryptographic Memory Wiping</h4>
                    <p className="text-slate-400 text-sm mt-1">After every API dispatch, memory buffers are explicitly overwritten with null bytes. Mathematically verified zero-retention.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative aspect-video bg-slate-900 rounded-xl border border-slate-700 p-6 flex flex-col justify-center font-mono">
              <div className="text-xs text-slate-400 mb-4 border-b border-slate-700 pb-2">aws-nitro-enclaves-nsm-api</div>
              <div className="text-xs text-green-400 mb-2">&gt; Allocating strict bytearray buffer for PII...</div>
              <div className="text-xs text-slate-300 mb-2">&gt; Calculating SHA-256 hash...</div>
              <div className="text-xs text-primary-400 mb-2">&gt; [NSM] Generating Attestation Document...</div>
              <div className="text-xs text-green-400 mb-2">&gt; [MEMORY OPS] Address zeroed to 0x00.</div>
              <div className="text-xs text-slate-500 mt-4">System is Zero-Retention. No raw PII exists in persistent storage.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pricing Built for Scale</h2>
            <p className="text-slate-600">From recovering lost signal to fully autonomous AI execution.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SME Fast-Lane */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">SME Fast-Lane</h3>
              <p className="text-slate-500 text-sm mb-6 h-10">Immediate profit recovery through superior CAPI proxy routing.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-slate-900">$325</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-600">
                <li className="flex items-center"><ShieldCheck size={16} className="text-green-500 mr-2" /> 15-minute Meta CAPI integration</li>
                <li className="flex items-center"><ShieldCheck size={16} className="text-green-500 mr-2" /> ~20% signal loss recovery</li>
                <li className="flex items-center"><ShieldCheck size={16} className="text-green-500 mr-2" /> Analytics Dashboard</li>
                <li className="flex items-center"><ShieldCheck size={16} className="text-green-500 mr-2" /> Basic Attestation Preview</li>
              </ul>
              <Link href="/sign-up" className="w-full inline-block text-center bg-white border-2 border-primary-500 text-primary-600 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Agentic DSP */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Full AI Power
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Agency + Agentic DSP</h3>
              <p className="text-slate-400 text-sm mb-6 h-10">Hardware-enforced ephemeral routing and autonomous AI bidding.</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$2,700</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm text-slate-300">
                <li className="flex items-center"><ArrowRight size={16} className="text-primary-400 mr-2" /> Full Autonomous AI Bidding Agent</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-primary-400 mr-2" /> 24/7 Ad Set Optimization</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-primary-400 mr-2" /> AWS Nitro Enclaves Zero-Retention</li>
                <li className="flex items-center"><ArrowRight size={16} className="text-primary-400 mr-2" /> Enterprise CISO Compliance Pack</li>
              </ul>
              <Link href="mailto:contact@faktoros.com" className="w-full inline-block text-center bg-primary-500 text-white py-3 rounded-xl font-semibold hover:bg-primary-600 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <FaktorOSWordmark size={28} />
              </div>
              <p className="text-xs text-slate-500 mb-6">The only ad agent built on zero-retention infrastructure.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"><span className="text-xs font-bold">X</span></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"><span className="text-xs font-bold">in</span></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#platform" className="hover:text-slate-900 transition-colors cursor-pointer">Autonomous Agent</a></li>
                <li><a href="#infrastructure" className="hover:text-slate-900 transition-colors cursor-pointer">AWS Nitro Enclaves</a></li>
                <li><a href="#pricing" className="hover:text-slate-900 transition-colors cursor-pointer">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-slate-900 transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#" className="hover:text-slate-900 transition-colors cursor-pointer">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>© 2026 FaktorOS. All rights reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
