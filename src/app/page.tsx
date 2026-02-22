import Link from "next/link";
import { ArrowRight, Lock, Server, Zap, ShieldCheck, Database, List, Cpu } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">AdSynth</span>
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <Link href="#" className="hover:text-slate-900 transition-colors">Platform</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Science</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center space-x-4 text-sm font-medium">
              <Link href="/login" className="text-slate-600 hover:text-slate-900 transition-colors">Log In</Link>
              <Link href="/install" className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors">
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
              <span>Next-Gen Privacy Engine</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Restore Ad Performance with <span className="text-primary-500">Zero Privacy Risk</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              The enterprise-grade synthetic data clean room built for regulated industries. Scale your Meta and Google performance <strong className="font-semibold text-slate-900">without</strong> compromising user privacy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/clean-room" className="bg-slate-900 text-white px-6 py-3.5 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center group">
                Start Synthesizing
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-lg font-medium hover:bg-slate-50 transition-colors  flex items-center justify-center">
                View Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-100 to-white rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
            <div className="relative bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 aspect-square flex flex-col items-center justify-center overflow-hidden">
              {/* Decorative Grid bg */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40"></div>

              <div className="relative z-10 flex flex-col items-center space-y-8">
                <div className="flex justify-between w-full max-w-xs text-slate-400 mb-4">
                  <Database size={20} />
                  <Server size={20} />
                  <List size={20} />
                </div>

                <div className="w-48 h-48 bg-slate-900 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white p-6 relative z-20">
                  <Zap size={48} className="text-primary-400 mb-4" fill="currentColor" />
                  <span className="font-bold tracking-widest text-sm text-center">ADSYNTH GAN ENGINE</span>
                </div>

                <div className="flex w-full max-w-xs justify-between mt-4">
                  <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs mb-1">f</div>
                    <span className="text-[10px] font-medium text-slate-500">META PIXEL</span>
                  </div>
                  <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs mb-1">G</div>
                    <span className="text-[10px] font-medium text-slate-500">G-ADS API</span>
                  </div>
                </div>
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-[-10px] bg-white border border-slate-100 shadow-lg rounded-xl p-3 flex items-center space-x-3">
                <div className="bg-green-100 text-green-600 p-1.5 rounded-full">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% PII Secure</div>
                  <div className="text-[10px] text-slate-500">ZERO LINKAGE DETECTED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400 text-sm font-semibold uppercase tracking-wider items-center">
          <span className="flex items-center gap-2"><ShieldCheck size={16} /> GDPR Compliant</span>
          <span className="flex items-center gap-2"><ShieldCheck size={16} /> BSI Compliant</span>
          <span className="flex items-center gap-2"><Lock size={16} /> SOC2 Type II</span>
          <span className="flex items-center gap-2"><Server size={16} /> FinTech Secure</span>
          <span className="flex items-center gap-2"><Database size={16} /> HIPAA Ready</span>
        </div>
      </div>

      {/* Built for Performance Engineering */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Performance Engineering</h2>
          <p className="text-slate-600">Automate the generation of high-fidelity synthetic data without writing a single line of privacy logic.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: 'Ingest', icon: Lock, desc: 'Securely connect your 1st party data sources via API or Direct SQL. AdSynth handles encryption at rest and in transit before preprocessing.' },
            { step: '02', title: 'Synthesize', icon: Cpu, desc: 'Generate high-fidelity synthetic twins via the AdSynth GAN Engine. Our models preserve 99% of statistical variance while scrubbing all PII.' },
            { step: '03', title: 'Activate', icon: Zap, desc: 'Stream privacy-safe signals directly to ad platforms like Meta, Google, and Tiktok to fuel their machine learning algorithms.' }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
                <item.icon size={24} />
              </div>
              <div className="text-xs font-bold text-primary-500 tracking-wider mb-2">STEP {item.step}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The Math Behind the Clean Room */}
      <div className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-700/50">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                The Math Behind the <br /><span className="text-primary-400">Clean Room</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-sm lg:text-base">
                Our differential privacy engine ensures that no single individual can be re-identified, while maintaining the statistical integrity needed for ad algorithm training.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-400 p-1 rounded-full mr-4 mt-1">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">99.9% Differential Privacy</h4>
                    <p className="text-slate-400 text-sm mt-1">Mathematically proven privacy guarantees (ε &lt; 0.1).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-500/20 text-primary-400 p-1 rounded-full mr-4 mt-1">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Variance Retention</h4>
                    <p className="text-slate-400 text-sm mt-1">Preserve multi-dimensional correlations for complex modeling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 relative aspect-video bg-slate-900 rounded-xl border border-slate-700 p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xs font-semibold tracking-wider text-slate-400">UTILITY VS PRIVACY LEAKAGE</div>
                <div className="flex space-x-4 text-[10px]">
                  <span className="flex items-center text-primary-400"><span className="w-2 h-2 rounded-full bg-primary-400 mr-2"></span> Model Performance</span>
                  <span className="flex items-center text-slate-500"><span className="w-2 h-2 rounded-full bg-slate-500 mr-2"></span> Privacy Leakage</span>
                </div>
              </div>
              {/* Mock Chart */}
              <div className="relative h-40 w-full border-b border-l border-slate-700">
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  {/* Model Performance Curve */}
                  <path d="M0,90 Q 30,85 50,50 T 100,20" fill="none" stroke="#0ea5e9" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  {/* Privacy Leakage Curve */}
                  <path d="M0,95 Q 50,95 100,95" fill="none" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                </svg>
                <div className="absolute bottom-2 right-2 text-[8px] text-slate-500">Epsilon Optimization (ε)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to reclaim your ROAS?</h2>
        <p className="text-lg text-slate-600 mb-10">
          Join 50+ enterprise teams using AdSynth to drive ad performance in a post-cookie world.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <Link href="/install" className="bg-primary-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-600 transition-colors w-full sm:w-auto text-center shadow-lg shadow-primary-500/30">
            Start Your Free Trial
          </Link>
          <button className="bg-white border text-center border-slate-200 text-slate-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-slate-50 transition-colors w-full sm:w-auto">
            Talk to an Expert
          </button>
        </div>
        <p className="text-xs text-slate-400">No credit card required. SOC2 Type II compliance documents available upon request.</p>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
                  <Zap size={14} fill="currentColor" />
                </div>
                <span className="font-bold text-slate-900">AdSynth</span>
              </div>
              <p className="text-xs text-slate-500 mb-6">The world's leading synthetic data clean room for performance marketing, built by privacy engineers, for growth teams.</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"><span className="text-xs font-bold">X</span></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"><span className="text-xs font-bold">in</span></div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="hover:text-slate-900 cursor-pointer transition-colors">GAN Engine</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Clean Room</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Integrations</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Security</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Resources</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Documentation</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">API Reference</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Guide</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Case Studies</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="hover:text-slate-900 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-slate-900 cursor-pointer transition-colors">Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
            <p>© 2026 AdSynth Labs, Inc. All rights reserved.</p>
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
