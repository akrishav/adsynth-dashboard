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
              <Link href="#solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="#science" className="hover:text-slate-900 transition-colors">Science & Audit</Link>
              <Link href="#connectors" className="hover:text-slate-900 transition-colors">Connectors</Link>
              <Link href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider">
              <Link href="/sign-in" className="text-slate-600 hover:text-slate-900 transition-colors px-3 py-2">Log In</Link>
              <Link href="/clean-room" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow shadow-primary-500/20">
                Get Started
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
              <span>Hardware-Isolated Ephemeral Twin Engine</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Transform Sensitive Data Into Private <span className="bg-gradient-to-r from-primary-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">Synthetic Twins</span>
            </h1>
            
            <p className="text-base text-slate-500 mb-8 max-w-xl leading-relaxed">
              FaktorOS combines deep generative models (GANs) and AWS Nitro Enclaves to generate high-utility synthetic data. Automatically purge PII from RAM while preserving statistical correlations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="/clean-room" className="bg-slate-900 text-white px-7 py-4 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-800 transition-all flex items-center justify-center group shadow-lg shadow-slate-900/10">
                Launch Clean Room Sandbox
                <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform text-primary-400" />
              </Link>
              <Link href="mailto:contact@faktoros.com" className="bg-white border border-slate-200 text-slate-700 px-7 py-4 rounded-xl text-xs font-bold tracking-wider uppercase hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center shadow-sm">
                Book Enterprise Demo
              </Link>
            </div>

            {/* Compliances */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 flex items-center justify-center lg:justify-start gap-6 text-[10px] font-bold text-slate-400 tracking-wider uppercase">
              <span className="flex items-center gap-1.5"><Lock size={12} className="text-slate-400" /> GDPR Art. 5 Compliant</span>
              <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-slate-400" /> CCPA Certified</span>
              <span className="flex items-center gap-1.5"><Server size={12} className="text-slate-400" /> SOC2 Type II Certified</span>
            </div>
          </div>

          {/* Right Column: Visual Mockup (QA Report Preview) */}
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-indigo-100 rounded-3xl transform rotate-2 scale-105 opacity-40 blur-xl"></div>
            
            {/* Interactive QA Dashboard Card */}
            <div className="relative bg-white border border-slate-200 shadow-2xl rounded-3xl p-6 overflow-hidden">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                </div>
                <div className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">FaktorOS QA & PRIVACY REPORT</div>
              </div>

              {/* Grid Content */}
              <div className="space-y-4">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Utility Score</span>
                    <span className="text-lg font-black text-slate-900">94.2%</span>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-center">
                    <span className="text-[8px] font-bold text-slate-400 uppercase block mb-1">Privacy Score</span>
                    <span className="text-lg font-black text-green-600">100.0%</span>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center text-white">
                    <span className="text-[8px] font-bold text-primary-400 uppercase block mb-1">Exact Matches</span>
                    <span className="text-lg font-black">0</span>
                  </div>
                </div>

                {/* Correlation comparison mockup */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider flex items-center"><BarChart3 size={10} className="mr-1.5" /> Correlation Matrix Comparison</span>
                    <span className="text-[9px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">Identical Distributions</span>
                  </div>
                  
                  {/* Heatmap Grid */}
                  <div className="flex items-center justify-around gap-6 pt-2">
                    <div className="flex flex-col items-center">
                      <div className="grid grid-cols-3 gap-1.5 w-20 h-20">
                        <div className="bg-primary-500 rounded"></div>
                        <div className="bg-primary-300 rounded"></div>
                        <div className="bg-primary-100 rounded"></div>
                        <div className="bg-primary-300 rounded"></div>
                        <div className="bg-primary-600 rounded"></div>
                        <div className="bg-primary-200 rounded"></div>
                        <div className="bg-primary-100 rounded"></div>
                        <div className="bg-primary-200 rounded"></div>
                        <div className="bg-primary-400 rounded"></div>
                      </div>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-2">Original Data</span>
                    </div>

                    <div className="text-slate-300 font-bold">&rarr;</div>

                    <div className="flex flex-col items-center">
                      <div className="grid grid-cols-3 gap-1.5 w-20 h-20">
                        <div className="bg-primary-500 rounded"></div>
                        <div className="bg-primary-300 rounded"></div>
                        <div className="bg-primary-100 rounded"></div>
                        <div className="bg-primary-300 rounded"></div>
                        <div className="bg-primary-600 rounded"></div>
                        <div className="bg-primary-200 rounded"></div>
                        <div className="bg-primary-100 rounded"></div>
                        <div className="bg-primary-200 rounded"></div>
                        <div className="bg-primary-400 rounded"></div>
                      </div>
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-2">Synthetic Twin</span>
                    </div>
                  </div>
                </div>

                {/* Console Log */}
                <div className="bg-slate-900 rounded-xl p-3 text-left border border-slate-800">
                  <div className="text-[9px] font-mono text-primary-400 mb-1 flex justify-between">
                    <span>$ nsm-attest --verify-memory</span>
                    <span className="text-green-400">PASSED</span>
                  </div>
                  <p className="text-[9px] font-mono text-slate-400 leading-relaxed">
                    &gt; Zero exact row overlaps identified. Ephemeral memory wiped (ctypes.memset 0x00). SSL payload attested by Nitro Secure Module.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Process Stepper */}
      <div className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">The Synthetic Data Pipeline</h2>
            <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Standard Operating Procedure</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'PII Identification', desc: 'Scan and identify structured or free-text PII fields automatically (e.g. emails, names, SSNs).' },
              { num: '02', title: 'Generative Synthesis', desc: 'Train Gaussian Copula and CTGAN models in an isolated CPU thread-pool to learn mathematical twins.' },
              { num: '03', title: 'Attestation & Audit', desc: 'Verify zero exact row overlap, audit correlations, and generate cryptographic attestation certificates.' },
              { num: '04', title: 'Secure Dispatch', desc: 'Sync masked synthetic twins to Meta CAPI, Google Ads, or Snowflake enclaves with memory zero-out.' }
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
      <div id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Core Technology Offerings</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
            FaktorOS combines data masking, rule-based logic, and generative AI models to provide privacy-preserving synthetic data optimized for enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 border border-blue-100">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Synthetic Data Masking</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Replace sensitive details in database structures with high-fidelity, consistent mock data. Automatically scan for hidden PII columns and consistently map keys across relational databases.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
              <li className="flex items-center"><CheckCircle2 size={14} className="text-blue-500 mr-2" /> Automatic PII Scans</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-blue-500 mr-2" /> Consistent Key Mapping</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-blue-500 mr-2" /> Format-Preserving Encryption</li>
            </ul>
            <Link href="/clean-room" className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 flex items-center">
              Explore Masking <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 border border-green-100">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI-Generated Twin Engines</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Train deep GAN models to capture complex multi-dimensional distributions and pairwise correlations without copying any real records. Optimizes data shapes for high-quality analytics testing.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
              <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2" /> Deep CTGAN Modeling</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2" /> Gaussian Copula Synthesis</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-green-500 mr-2" /> Quality & Utility Audit Logs</li>
            </ul>
            <Link href="/clean-room" className="text-xs font-bold uppercase tracking-wider text-green-600 hover:text-green-700 flex items-center">
              Explore AI Twins <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 border border-purple-100">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Zero-Retention Sync Routing</h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Sync synthetic databases directly to advertising APIs (like Meta Conversions API) and external analytical enclaves. The pipeline wipes the variables at the memory address post-operation.
            </p>
            <ul className="space-y-2 text-xs font-bold text-slate-600 mb-6">
              <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-500 mr-2" /> AWS Nitro Ephemeral Memory</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-500 mr-2" /> Memory purges (ctypes.memset)</li>
              <li className="flex items-center"><CheckCircle2 size={14} className="text-purple-500 mr-2" /> Live Meta CAPI Connector</li>
            </ul>
            <Link href="/activations" className="text-xs font-bold uppercase tracking-wider text-purple-600 hover:text-purple-700 flex items-center">
              Explore Active Syncing <ChevronRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Science and Validation Section */}
      <div id="science" className="bg-slate-900 text-white py-24 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-slate-800 text-primary-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6">
                <FileText size={12} />
                <span>Verified Compliance & Utility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Scientifically Audited, <br />Regulatory Compliant
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                FaktorOS is designed to meet strict CCPA and GDPR constraints. We provide complete audit certificates with mathematical proofs of privacy, checking that no exact production record matches the synthetic twin.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-1">Zero Match Proof</h4>
                  <p className="text-[11px] text-slate-400">Our platform guarantees zero exact record matches compared with original production databases.</p>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-800">
                  <h4 className="text-xs font-bold text-white mb-1">Statistical Utility Audit</h4>
                  <p className="text-[11px] text-slate-400">Maintains pairwise trends and columns distributions, keeping data highly valuable for machine learning models.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 bg-slate-850 rounded-3xl p-6 border border-slate-800 relative">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider flex items-center"><ShieldCheck size={16} className="text-green-400 mr-2" /> Proof of Privacy Certificate</h3>
              
              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Source Database</span>
                  <span className="text-white">GLOBAL_CUSTOMER_DATA.csv</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Auditor Audit ID</span>
                  <span className="text-white">FOS-2026-992A</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">Epsilon Privacy Target</span>
                  <span className="text-green-400 font-bold">0.10 (STRICT)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">GDPR Compliance Status</span>
                  <span className="text-green-400 font-bold">CERTIFIED</span>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-6 flex justify-around items-center">
                <div className="text-center">
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Utility Score</span>
                  <span className="text-2xl font-black text-white">93.8%</span>
                </div>
                <div className="h-8 w-px bg-slate-800"></div>
                <div className="text-center">
                  <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Privacy Guarantee</span>
                  <span className="text-2xl font-black text-green-400">100%</span>
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
            Directly connect your source databases and destination marketing and analytics networks. Safe, isolated integration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: "PostgreSQL", desc: "Source DB Support", status: "Active" },
            { name: "Snowflake", desc: "Data Warehouse Connection", status: "Enterprise" },
            { name: "Meta Ads CAPI", desc: "Direct Endpoint Sync", status: "Active" },
            { name: "Google Ads API", desc: "Direct Endpoint Sync", status: "Active" },
            { name: "Shopify Webhooks", desc: "Purchase Tracking", status: "Active" },
            { name: "Salesforce CRM", desc: "Database Sink", status: "Active" },
            { name: "Amazon Redshift", desc: "Analytical Engine support", status: "Enterprise" },
            { name: "Google BigQuery", desc: "Tabular Connector", status: "Enterprise" }
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
              <Link href="/clean-room" className="w-full inline-block text-center bg-white border-2 border-primary-500 text-primary-600 py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-primary-50 transition-colors">
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
                <li><Link href="#solutions" className="hover:text-slate-900 transition-colors">Synthetic Masking</Link></li>
                <li><Link href="#solutions" className="hover:text-slate-900 transition-colors">AI Twins</Link></li>
                <li><Link href="#connectors" className="hover:text-slate-900 transition-colors">Ecosystem Connectors</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-xs uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-xs text-slate-500 font-medium">
                <li><Link href="#" className="hover:text-slate-900 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
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
