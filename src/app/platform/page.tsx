import Link from "next/link";
import { Server, ShieldCheck, Cpu, HardDrive, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function PlatformPage() {
  const specs = [
    { title: "Isolated CPU Boundaries", icon: Cpu, desc: "Process sensitive payload match-keys in enclaves with dedicated CPU cores and partitioned memory, isolating processes from the host OS." },
    { title: "No Persistent Storage", icon: HardDrive, desc: "Enclave environments run on a read-only, volatile memory block, ensuring data cannot be written to disk or persistently cached." },
    { title: "Cryptographic Wipes", icon: ShieldCheck, desc: "Our execution script explicitly zeroes out RAM variables using ctypes.memset(0x00) immediately after outbound dispatches." },
    { title: "Attested Execution", icon: Server, desc: "Outbound API calls only authenticate if the enclave's PCR measurements match certified cryptographic boot signatures." }
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
              <Link href="/use-cases" className="text-slate-500 hover:text-slate-900 transition-colors">Use Cases</Link>
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center">
                <ArrowLeft size={14} className="mr-1.5" /> Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            The FaktorOS Engine
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Discover the hardware-isolated architecture that guarantees complete data security.
          </p>
        </div>

        {/* Console mockup */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-xl text-left font-mono text-xs text-slate-300 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-6 relative z-10">
            <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Nitro Enclave Pipeline Architecture</span>
            <span className="text-green-400 font-bold">● ONLINE</span>
          </div>

          <div className="space-y-4 relative z-10">
            <div>
              <p className="text-slate-500">// 1. Incoming payload parsed inside isolated enclave</p>
              <p className="text-white">&gt; Ingesting CAPI payload: 142 records</p>
            </div>
            <div>
              <p className="text-slate-500">// 2. Format-preserving encryption & bytearray allocation</p>
              <p className="text-white">&gt; Allocating volatile bytearrays [Address range: 0x00FF8E...0x00FF9C]</p>
            </div>
            <div>
              <p className="text-slate-500">// 3. Generate SHA-256 hashes and attest boot PCR0 measurements</p>
              <p className="text-white">&gt; Hashed value matches: [PCR0: 8a93...fd0a] - Verification: PASSED</p>
            </div>
            <div>
              <p className="text-slate-500">// 4. Memory Purge Loop (ctypes.memset)</p>
              <p className="text-green-400 font-bold">&gt; RAM address range zeroed to 0x00. No dangling string references survive.</p>
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {specs.map((spec, idx) => (
            <div key={idx} className="bg-white border border-slate-200 shadow-sm rounded-3xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200">
                <spec.icon size={18} />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-slate-900 text-sm">{spec.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{spec.desc}</p>
              </div>
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
