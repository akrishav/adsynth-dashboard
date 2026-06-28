"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, CreditCard, ArrowRight, Loader2, Server, Terminal, Cloud } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Checkout Form fields
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [domain, setDomain] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const steps = [
    "Contacting Stripe payment gateways...",
    "Allocating isolated AWS Nitro CPU nodes...",
    "Calculating secure vault memory partition...",
    "Attesting container integrity PCR measurements...",
    "Deploying secure CAPI proxy routing gateways...",
    "Setup completed! Initializing environment configuration..."
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !brandName || !domain || !cardNumber) {
      alert("Please fill out all required fields.");
      return;
    }
    
    setLoading(true);
    setCurrentStep(0);

    const runProvisioningSteps = () => {
      let step = 0;
      const interval = setInterval(() => {
        step++;
        if (step < steps.length) {
          setCurrentStep(step);
        } else {
          clearInterval(interval);
          router.push("/install");
        }
      }, 1200);
    };

    runProvisioningSteps();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans relative flex flex-col">
      {/* Simple Header */}
      <header className="border-b border-slate-200 bg-white py-4 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/">
            <FaktorOSWordmark size={28} />
          </Link>
          <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <Lock size={12} className="text-slate-400" />
            <span>Secure SSL checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Checkout Form */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h1 className="text-xl font-extrabold text-slate-900">Configure Subscription</h1>
            
            <form onSubmit={handleSubscribe} className="space-y-6">
              {/* Account Details */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">1. Account Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Corp" 
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Business Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. admin@acme.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Target Domain (Conversion Source)</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. shop.acme.com" 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-300 font-mono"
                  />
                  <p className="text-[9px] text-slate-400 mt-1.5 italic">This is the base domain where client purchase events originate.</p>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center">
                  <CreditCard size={14} className="mr-1.5" /> 2. Payment details
                </h3>
                
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Card number</label>
                  <input 
                    type="text" 
                    required
                    placeholder="•••• •••• •••• ••••" 
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-300 font-mono"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Expiration</label>
                    <input 
                      type="text" 
                      required
                      placeholder="MM / YY" 
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-300 font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">CVC</label>
                    <input 
                      type="text" 
                      required
                      placeholder="•••" 
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-primary-500 focus:outline-none placeholder:text-slate-300 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center shadow-lg shadow-slate-900/10"
              >
                Complete & Provision Enclave
                <ArrowRight size={14} className="ml-2 text-primary-400" />
              </button>
            </form>
          </div>

          {/* Right Column: Order Summary */}
          <div className="md:col-span-5 bg-slate-100 border border-slate-200 rounded-3xl p-6 space-y-6">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Order Summary</h2>
            
            <div className="bg-white border border-slate-200/60 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">SME Fast-Lane Plan</h4>
                  <p className="text-[10px] text-slate-500 mt-1">CAPI Proxy Wedge & Attested Signal Recovery</p>
                </div>
                <span className="font-black text-slate-900 text-xs">$325<span className="text-[9px] font-medium text-slate-400">/mo</span></span>
              </div>

              <div className="space-y-2 text-[10px] font-medium text-slate-500">
                <div className="flex justify-between">
                  <span>Enclave Provisioning Fee</span>
                  <span className="text-green-600 font-bold">FREE ($0.00)</span>
                </div>
                <div className="flex justify-between">
                  <span>RAM Memory Allocation</span>
                  <span>1.0 GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Signal Limit</span>
                  <span>150,000 events</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100 font-bold text-xs text-slate-900">
                <span>Total Due Today</span>
                <span className="font-black text-sm">$325.00</span>
              </div>
            </div>

            <div className="bg-white/50 border border-slate-200/40 rounded-2xl p-4 space-y-3">
              <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-600 uppercase">
                <ShieldCheck size={14} className="text-green-500" />
                <span>Zero-Retention Certified</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed">
                Billing profiles are stored securely in Stripe. The database domains and conversion streams are processed in hardware enclaves with cryptographically certified zero-retention memory loops.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Provisioning Loader Modal */}
      {loading && (
        <div className="fixed inset-0 bg-slate-950/80 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-white border border-slate-100 w-full max-w-md rounded-3xl p-8 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
              <div 
                className="bg-primary-500 h-full transition-all duration-1000"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="mx-auto w-16 h-16 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center text-primary-500 animate-pulse mb-2">
              <Server size={28} />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">Provisioning Isolated Enclave</h3>
              <p className="text-xs text-slate-400">Step {currentStep + 1} of {steps.length}</p>
            </div>

            {/* Simulated terminal logging */}
            <div className="bg-slate-950 text-slate-300 font-mono text-[10px] rounded-xl p-4 text-left border border-slate-800 space-y-1.5 min-h-[90px] flex flex-col justify-end">
              <div className="flex items-center text-primary-400">
                <Terminal size={10} className="mr-1.5 shrink-0" />
                <span>$ fstream-init --domain={domain}</span>
              </div>
              <p className="text-slate-400 italic font-sans shrink-0">&gt; {steps[currentStep]}</p>
              {currentStep > 1 && <p className="text-green-400 shrink-0">&gt; [OK] Nitro Secure Module Attested PCR0.</p>}
            </div>

            <div className="flex items-center justify-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <Loader2 size={12} className="animate-spin text-slate-400" />
              <span>Vault Configuration active</span>
            </div>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest shrink-0">
        © 2026 FaktorOS · Secure Encrypted Environment
      </footer>
    </div>
  );
}
