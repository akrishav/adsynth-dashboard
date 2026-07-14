"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  Server, 
  Terminal, 
  ArrowLeft, 
  CheckCircle2, 
  CheckSquare, 
  Square,
  Building,
  User,
  Mail,
  HelpCircle
} from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

const STEPS = [
  "Opening secure socket handshake...",
  "Acquiring ephemeral AWS Nitro partition keys...",
  "Encrypting contact profile data in memory...",
  "Routing attestation metadata block...",
  "Filing ticket under luca.hoffmann@faktoros.com...",
  "Success! Inquiry dispatched safely with zero disk cache."
];

export default function BookDemoPage() {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [success, setSuccess] = useState(false);

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [spend, setSpend] = useState("<$5,000");
  const [requirements, setRequirements] = useState("");
  const [selectedNetworks, setSelectedNetworks] = useState<string[]>(["Meta CAPI"]);

  const networks = ["Meta CAPI", "Google CAPI", "TikTok Events API", "CRM Offline Uploads"];

  const toggleNetwork = (net: string) => {
    if (selectedNetworks.includes(net)) {
      setSelectedNetworks(selectedNetworks.filter(n => n !== net));
    } else {
      setSelectedNetworks([...selectedNetworks, net]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setCurrentStep(0);

    const runSubmissionSteps = () => {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        if (step < STEPS.length) {
          setCurrentStep(step);
        } else {
          clearInterval(interval);
          setLoading(false);
          setSuccess(true);
        }
      }, 900);
    };

    runSubmissionSteps();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white py-4 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <FaktorOSWordmark size={28} />
          </Link>
          <Link href="/" className="flex items-center text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft size={14} className="mr-1.5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl w-full grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Context / Specs */}
          <div className="md:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center space-x-1.5 bg-primary-500/20 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                <ShieldCheck size={10} className="text-primary-400" />
                <span>Enterprise Sandbox</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Request a Compliant Sandbox Demo
              </h2>

              <p className="text-slate-400 text-xs leading-relaxed">
                FaktorOS deploys ephemeral hardware-isolated instances to test pixel match and attribution lift. Schedule your walkthrough with our technical architects.
              </p>

              <div className="border-t border-slate-800 pt-6 space-y-4">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Demo Execution Checklist</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 text-xs">
                    <CheckCircle2 size={16} className="text-primary-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-200">1. Node Isolation</span>
                      <span className="text-slate-400 text-[10px]">Spin up single-tenant AWS Nitro container in Frankfurt or US East.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 text-xs">
                    <CheckCircle2 size={16} className="text-primary-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-200">2. Match-Rate Assessment</span>
                      <span className="text-slate-400 text-[10px]">Rehydrate incoming browser events and measure matching lift.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 text-xs">
                    <CheckCircle2 size={16} className="text-primary-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block text-slate-200">3. Proof of Destruction</span>
                      <span className="text-slate-400 text-[10px]">Generate certified attestation logs proving total RAM zeroization.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 border-t border-slate-800 pt-6 mt-8 flex items-center space-x-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <Lock size={12} className="text-slate-500" />
              <span>SOC2 Type II · Certified Cryptography</span>
            </div>
          </div>

          {/* Right Column: Inquiry Form / Success card */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center">
            
            {!success ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Tell us about your setup</h3>
                  <p className="text-xs text-slate-405 mt-1 font-semibold">We customize each sandbox instance to match your database stack.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wider mb-1.5 flex items-center">
                        <User size={12} className="mr-1 text-slate-400" /> Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wider mb-1.5 flex items-center">
                        <Mail size={12} className="mr-1 text-slate-400" /> Work Email
                      </label>
                      <input 
                        type="email" 
                        required
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Company Website & Spend row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wider mb-1.5 flex items-center">
                        <Building size={12} className="mr-1 text-slate-400" /> Company Website
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. acme.com"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-350 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wider mb-1.5">
                        Monthly Ad Spend
                      </label>
                      <select 
                        value={spend}
                        onChange={(e) => setSpend(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all bg-white"
                      >
                        <option value="<$5,000">&lt;$5,000</option>
                        <option value="$5,000 - $20,000">$5,000 - $20,000</option>
                        <option value="$20,000 - $100,000">$20,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Targeted Channels */}
                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-slate-655 uppercase tracking-wider">
                      Target Integration Channels
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {networks.map((net) => {
                        const active = selectedNetworks.includes(net);
                        return (
                          <button
                            key={net}
                            type="button"
                            onClick={() => toggleNetwork(net)}
                            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                              active 
                                ? "bg-primary-50 border-primary-200 text-primary-700 shadow-sm" 
                                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {active ? <CheckSquare size={12} className="text-primary-500" /> : <Square size={12} className="text-slate-400" />}
                            <span>{net}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-650 uppercase tracking-wider mb-1.5 flex items-center">
                      <HelpCircle size={12} className="mr-1 text-slate-400" /> Compliance / Notes
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Specify CISO guidelines (HIPAA, GDPR, SOC2 constraints)..."
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-350 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center shadow-lg shadow-slate-900/10"
                  >
                    Submit Demo Request
                    <ArrowRight size={14} className="ml-2 text-primary-400" />
                  </button>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <div className="text-center space-y-6 py-6 animate-fade-in">
                <div className="mx-auto w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-green-500 mb-2">
                  <CheckCircle2 size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900">Demolition Complete. Handshake Successful.</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto leading-relaxed font-semibold">
                    Thank you, <strong className="text-slate-900">{name}</strong>! We have received your inquiry for <strong className="text-slate-900">{company}</strong>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-205 rounded-2xl p-4 text-left max-w-sm mx-auto space-y-2.5 text-[11px] font-semibold text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Channels:</span>
                    <span className="font-bold text-slate-800">{selectedNetworks.join(", ") || "None selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Spend:</span>
                    <span className="font-bold text-slate-800">{spend}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200/50 pt-2 text-slate-500">
                    <span>Contact Officer:</span>
                    <span className="text-primary-600 font-bold hover:underline">
                      <a href="mailto:luca.hoffmann@faktoros.com">luca.hoffmann@faktoros.com</a>
                    </span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 leading-relaxed max-w-sm mx-auto font-semibold">
                  Luca Hoffmann will reach out to you at <strong className="text-slate-650">{email}</strong> within 24 hours to schedule the enclave demonstration.
                </p>

                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow"
                  >
                    <ArrowLeft size={12} /> Return to Home
                  </Link>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </main>

      {/* Provisioning Loader Modal */}
      {loading && (
        <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-white border border-slate-100 w-full max-w-md rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
              <div 
                className="bg-primary-500 h-full transition-all duration-700"
                style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
              ></div>
            </div>

            <div className="mx-auto w-16 h-16 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 animate-pulse mb-2">
              <Server size={28} />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">Securing Inquiry Package</h3>
              <p className="text-xs text-slate-400">Dispatch Step {currentStep + 1} of {STEPS.length}</p>
            </div>

            {/* Simulated terminal logging */}
            <div className="bg-slate-950 text-slate-300 font-mono text-[9px] rounded-xl p-4 text-left border border-slate-800 space-y-1.5 min-h-[90px] flex flex-col justify-end">
              <div className="flex items-center text-primary-400 font-bold">
                <Terminal size={10} className="mr-1.5 shrink-0" />
                <span>$ fstream-inquiry --vault-send</span>
              </div>
              <p className="text-slate-400 italic font-sans shrink-0">&gt; {STEPS[currentStep]}</p>
              {currentStep > 1 && <p className="text-green-400 shrink-0">&gt; [OK] GPG Encrypted handoff validated.</p>}
            </div>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Loader2 size={12} className="animate-spin text-slate-400" />
              <span>Attestation loop waiting...</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
        © 2026 FaktorOS · Secure Demonstration Environment
      </footer>
    </div>
  );
}
