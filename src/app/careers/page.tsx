import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowLeft } from "lucide-react";
import { FaktorOSWordmark } from "@/components/FaktorOSLogo";

export default function CareersPage() {
  const jobs = [
    { title: "Enclave Security Engineer", dept: "Engineering", location: "Berlin / Remote", type: "Full-time" },
    { title: "Distributed Systems Developer (Rust/Python)", dept: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Senior Product Designer", dept: "Design", location: "Berlin", type: "Full-time" },
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
            <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-wider">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center">
                <ArrowLeft size={14} className="mr-1.5" /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Join FaktorOS
          </h1>
          <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            Build the next generation of privacy-preserving ad-tech infrastructure.
          </p>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 sm:p-10 space-y-12">
          {/* Job listings */}
          <section className="space-y-6">
            <h2 className="text-xl font-extrabold text-slate-900">Open Positions</h2>
            
            <div className="divide-y divide-slate-100 border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50">
              {jobs.map((job, idx) => (
                <div key={idx} className="p-6 bg-white hover:bg-slate-50 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                      <span className="flex items-center"><Briefcase size={12} className="mr-1.5" /> {job.dept}</span>
                      <span className="flex items-center"><MapPin size={12} className="mr-1.5" /> {job.location}</span>
                      <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {job.type}</span>
                    </div>
                  </div>
                  <Link href="mailto:careers@faktoros.com" className="text-xs font-bold uppercase tracking-wider text-primary-500 border border-primary-500/20 bg-primary-50 px-4 py-2 rounded-lg hover:bg-primary-100 transition-colors">
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Core Values */}
          <section className="space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900">Our Engineering Philosophy</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We value absolute technical integrity, hardware-level security constraints, and highly automated execution loops. If you enjoy deep-diving into AWS Nitro Enclaves, building zero-allocation pipelines, or optimizing real-time telemetry dashboards in Next.js, we'd love to chat.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        © 2026 FaktorOS · All Systems Operational
      </footer>
    </div>
  );
}
