import Link from "next/link";
import { 
  ArrowRight, 
  Lock, 
  Server, 
  ShieldCheck, 
  Database, 
  Cpu, 
  Zap, 
  Activity, 
  BarChart3, 
  RefreshCw, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  ShieldAlert, 
  Globe 
} from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <FaktorOSWordmark size={32} />
            </div>

            <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Link href="#platform" className="hover:text-slate-900 transition-colors">How It Works</Link>
              <Link href="#infrastructure" className="hover:text-slate-900 transition-colors">Infrastructure</Link>
              <Link href="#connectors" className="hover:text-slate-900 transition-colors">Connectors</Link>
              <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider">
              <Link href="/sign-in" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2">Log In</Link>
              <Link href="/dashboard" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow shadow-primary-500/20">
                Launch Console
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          
          {/* Left Column: Core Copy */}
          <div className="lg:col-span-6 mb-16 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-primary-100">
              <ShieldCheck size={12} className="text-primary-500 animate-pulse" />
              <span>Zero-Retention Autonomous Ad Ops</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              The AI Agent That Runs Ads <span className="bg-gradient-to-r from-primary-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">Autonomously</span>
            </h1>
            
            <p className="text-base text-slate-500 mb-8 max-w-xl leading-relaxed">
              FaktorOS monitors campaign performance across Meta, Google, and TikTok 24/7. We automatically pause losing ad sets, reallocate budgets to winners, and recover signals in volatile enclaves. <strong className="font-bold text-slate-900">Zero Retention. Zero Risk.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/dashboard" className="bg-slate-900 text-white px-7 py-4 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-800 transition-all flex items-center justify-center group shadow-lg shadow-slate-900/10">
                View Live Terminal
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform text-primary-400" />
              </Link>
              <Link href="mailto:contact@faktoros.com" className="bg-white border border-slate-200 text-slate-700 px-7 py-4 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm">
                Book Enterprise Demo
              </Link>
            </div>

            {/* Compliances */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-6 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              <span className="flex items-center gap-1.5"><Lock size={12} className="text-slate-400" /> CISO APPROVED</span>
              <span className="flex items-center gap-1.5"><Server size={12} className="text-slate-400" /> AWS NITRO NATIVE</span>
              <span className="flex items-center gap-1.5"><Database size={12} className="text-slate-400" /> ZERO DATA STORED</span>
            </div>
          </div>

          {/* Right Column: Visual Mockup (Agent Telemetry Terminal) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-indigo-100 rounded-3xl transform rotate-2 scale-105 opacity-40 blur-xl"></div>
            
            {/* Interactive Agent Terminal */}
            <div className="relative bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[9px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded uppercase">AGENT ACTIVE (24/7)</span>
                </div>
                <div className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">FaktorOS Autonomous DSP</div>
              </div>

              {/* Grid Content */}
              <div className="space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Managed Budget</span>
                    <span className="text-base font-black text-slate-900">$18.4K<span className="text-[10px] font-normal text-slate-400">/d</span></span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Signal Recovery</span>
                    <span className="text-base font-black text-green-600">+21.4%</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center text-white">
                    <span className="text-[8px] font-bold text-primary-400 uppercase block mb-1">Paused Ad Sets</span>
                    <span className="text-base font-black text-white">142</span>
                  </div>
                </div>

                {/* Live Action Tracker */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center"><BarChart3 size={10} className="mr-1.5" /> Reallocation Matrix</span>
                    <span className="text-[9px] font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">Efficiency Optimization</span>
                  </div>
                  
                  {/* Visual Bar Comparison */}
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 mb-1">
                        <span>Lookalike 1% (Meta Ads)</span>
                        <span className="text-red-500">CPA Limit Exceeded ($32.40 / $25.00 Target)</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[85%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] font-bold text-slate-500 mb-1">
                        <span>Search NonBrand (Google Ads)</span>
                        <span className="text-green-600">Scaling Budget +40% (ROAS 2.8)</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[65%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Console Log */}
                <div className="bg-slate-900 rounded-xl p-3 text-left border border-slate-800">
                  <div className="text-[9px] font-mono text-primary-400 mb-1 flex justify-between">
                    <span>$ nsm-attest --action-sync</span>
                    <span className="text-green-400">SUCCESS</span>
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 leading-relaxed">
                    &gt; [08:43] Pause command sent to Meta Ads Pixel (ID: 8829). ep-buffer cleared (ctypes.memset 0x00). Outbound CAPI payload cryptographically secured.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Process Stepper */}
      <div id="platform" className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">How FaktorOS Optimizes Your Funnel</h2>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Standard Operating Procedure</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'The CAPI Wedge', desc: 'Replace a single URL in your Meta Conversions API config. Quick 15-minute setup recovers signal lost to iOS 14.5+.' },
              { num: '02', title: 'Zero-Retention Route', desc: 'PII variables are formatted inside AWS Nitro isolated memory and cryptographically shredded post-operation.' },
              { num: '03', title: 'Agent Performance Evaluation', desc: 'Our AI agent continuously monitors campaign ROAS, CPA, and creative frequency caps against target boundaries.' },
              { num: '04', title: 'Autonomous Execution', desc: 'The agent actively triggers API commands to pause underperforming ad sets and scale budget in winners.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 relative hover:shadow-md transition-shadow">
                <div className="absolute top-4 right-4 text-xs font-black text-slate-200 font-mono text-2xl">{step.num}</div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions / Features Pillars (Syntho.ai Standard) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Core Technology Offerings</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            FaktorOS combines ad signal recovery, zero-retention cryptography, and autonomous decision logic in one cohesive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Signal Recovery (CAPI Wedge)</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Recover attribution signals lost to modern browser tracking protections. Deliver up to 20% ROAS improvement by dispatching clean match keys securely to destination networks.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
              <li className="flex items-center"><CheckCircle2 size={14} className="text-blue-500 mr-2" /> 15-Minute Pixel Integration</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-blue-500 mr-2" /> REST and Webhook Signal Recovery</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-blue-500 mr-2" /> Consistent Browser Deduplication</li>
            </ul>
            <Link href="/clean-room" className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 flex items-center">
              Explore CAPI Wedge <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 border border-green-100">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Autonomous Budget Optimization</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Set target rules and thresholds. The AI agent evaluates performance every 15 minutes, reallocating ad budget from high-CPA sets directly to high-utility campaign ad sets.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
              <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2" /> CPA Target Protections</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2" /> Real-time Budget Shuffling</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2" /> Unified Network Rules Engine</li>
            </ul>
            <Link href="/models" className="text-xs font-bold uppercase tracking-wider text-green-600 hover:text-green-700 flex items-center">
              Explore Rules Engine <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 border border-purple-100">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Zero-Retention Security</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Process customer database records and telemetry within hardware-isolated AWS Nitro Enclaves. Memory buffers are immediately zeroed out after every dispatch using `ctypes.memset`.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
              <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-500 mr-2" /> AWS Nitro Enclaves native</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-500 mr-2" /> ctypes.memset(0) Shredding</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-500 mr-2" /> SOC2 / HIPAA Compliant Layout</li>
            </ul>
            <Link href="/activations" className="text-xs font-bold uppercase tracking-wider text-purple-600 hover:text-purple-700 flex items-center">
              Explore Enclave Sync <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Science and Validation Section */}
      <div id="infrastructure" className="bg-slate-900 text-white py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-800 text-primary-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                <Server size={12} />
                <span>Verified Compliance & Privacy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Enterprise CISOs <br />Approve FaktorOS
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                Competitors like Stape.io and Triple Whale store your customer database records, creating massive legal and security exposure. FaktorOS is built on an execution layer that physically cannot retain database records.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-1">Hardware Isolation</h4>
                  <p className="text-[11px] text-slate-400">AWS Nitro Enclaves guarantee that your customer data is processed in isolated, volatile memory blocks with zero persistent disk storage.</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-1">Attested Purging</h4>
                  <p className="text-[11px] text-slate-400">Our platform cryptographically attests that sensitive payload match-keys were successfully purged from memory post-hashing.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 bg-slate-850 rounded-3xl p-6 border border-slate-800 relative">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center"><ShieldCheck size={16} className="text-green-400 mr-2" /> Proof of Privacy Certificate</h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Active Node Region</span>
                  <span className="text-white">eu-west-1 (AWS Dublin)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Attestation ID</span>
                  <span className="text-white">NSM-FAKTOR-091A</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Memory Integrity Target</span>
                  <span className="text-green-400 font-bold">ctypes.memset(0x00) ACTIVE</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Security Standard Compliance</span>
                  <span className="text-green-400 font-bold">GDPR Art. 5, CCPA Certified</span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6 flex justify-around items-center">
                <div className="text-center">
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-1">ROAS Signal Boost</span>
                  <span className="text-2xl font-black text-white">+18.5%</span>
                </div>
                <div className="h-8 w-px bg-slate-800"></div>
                <div className="text-center">
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Privacy Guarantee</span>
                  <span className="text-2xl font-black text-green-400">100% Wiped</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connectors / Supported Ecosystem */}
      <div id="connectors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Supported Connectors</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Directly connect your marketing accounts, databases, and e-commerce platforms. Safe, isolated integration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: "Meta Ads CAPI", desc: "Outbound Webhooks", status: "Active" },
            { name: "Google Ads API", desc: "OAuth Bidding Control", status: "Active" },
            { name: "TikTok Ads API", desc: "Outbound Webhooks", status: "Active" },
            { name: "Shopify", desc: "Conversion Signal Webhooks", status: "Active" },
            { name: "PostgreSQL", desc: "Customer Database Source", status: "Active" },
            { name: "Salesforce CRM", desc: "Contact Database Sync", status: "Active" },
            { name: "Snowflake", desc: "Data Warehouse Connection", status: "Enterprise" },
            { name: "Google BigQuery", desc: "Data Warehouse Connection", status: "Enterprise" }
          ].map((connector, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 text-left flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{connector.name}</h4>
                <p className="text-[10px] text-slate-500">{connector.desc}</p>
              </div>
              <span className={`text-[8px] font-bold tracking-widest uppercase mt-4 px-2 py-0.5 rounded-full w-max ${connector.status === 'Active' ? 'text-green-600 bg-green-50' : 'text-slate-400 bg-slate-100'}`}>
                {connector.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-slate-100 py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Flexible, Scalable Pricing</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Start with our SME Sandbox or scale to full autonomous enterprise agentic sync.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* SME Fast-Lane */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">SME Fast-Lane</h3>
              <p className="text-slate-500 text-xs mb-6 h-10">Immediate profit recovery through superior CAPI proxy routing.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">$325</span>
                <span className="text-slate-500 text-xs font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-xs text-slate-600 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2 shrink-0" /> 15-minute Meta CAPI integration</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2 shrink-0" /> ~20% signal loss recovery</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2 shrink-0" /> Analytics Dashboard access</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2 shrink-0" /> Basic Attestation Preview</li>
              </ul>
              <Link href="/dashboard" className="w-full inline-block text-center bg-white border-2 border-primary-500 text-primary-600 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-primary-50 transition-colors">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Agentic DSP */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 bg-primary-500 text-white text-[9px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Full AI Power
              </div>
              <h3 className="text-2xl font-bold mb-2">Agency + Agentic DSP</h3>
              <p className="text-slate-400 text-xs mb-6 h-10">Hardware-enforced ephemeral routing and autonomous AI bidding.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-white">$2,700</span>
                <span className="text-slate-400 text-xs font-bold">/month</span>
              </div>
              <ul className="space-y-4 mb-8 text-xs text-slate-300 font-medium">
                <li className="flex items-center"><CheckCircle2 size={14} className="text-primary-400 mr-2 shrink-0" /> Full Autonomous AI Bidding Agent</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-primary-400 mr-2 shrink-0" /> 24/7 Ad Set Optimization</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-primary-400 mr-2 shrink-0" /> AWS Nitro Enclaves Zero-Retention</li>
                <li className="flex items-center"><CheckCircle2 size={14} className="text-primary-400 mr-2 shrink-0" /> Enterprise CISO Compliance Pack</li>
              </ul>
              <Link href="mailto:contact@faktoros.com" className="w-full inline-block text-center bg-primary-500 text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-primary-600 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <FaktorOSWordmark size={28} />
              </div>
              <p className="text-xs text-slate-500 mb-6">The only ad agent built on zero-retention infrastructure.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"><span className="text-xs font-bold">X</span></div>
                <a href="https://www.linkedin.com/company/faktoros/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"><span className="text-xs font-bold">in</span></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-wider">Product</h4>
              <ul className="space-y-3 text-xs text-slate-500 font-medium">
                <li><Link href="#platform" className="hover:text-slate-900 transition-colors">How It Works</Link></li>
                <li><Link href="#infrastructure" className="hover:text-slate-900 transition-colors">Zero-Retention</Link></li>
                <li><Link href="#connectors" className="hover:text-slate-900 transition-colors">Connectors</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-xs text-slate-500 font-medium">
                <li><Link href="/about" className="hover:text-slate-900 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
                <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider">
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
