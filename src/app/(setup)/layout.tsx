import { HelpCircle, Zap } from "lucide-react";

export default function SetupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-primary-500 rounded flex items-center justify-center text-white">
                        <Zap size={14} fill="currentColor" />
                    </div>
                    <span className="font-bold text-slate-900 tracking-tight">ADSYNTH <span className="text-slate-400 font-medium ml-1">INSTALLATION</span></span>
                </div>

                <div className="flex items-center space-x-6 text-xs font-bold tracking-wider uppercase">
                    <div className="flex items-center space-x-2 text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                        <span>Secure Session Active</span>
                    </div>
                    <button className="w-6 h-6 rounded-full bg-slate-400 flex items-center justify-center text-white hover:bg-slate-500 transition-colors">
                        <HelpCircle size={14} />
                    </button>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
                <div className="w-full max-w-4xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden flex flex-col">
                    {children}
                </div>
            </main>

            <footer className="h-16 flex items-center justify-center space-x-8 text-[10px] font-bold tracking-wider text-slate-400 uppercase pb-6">
                <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>API Gateway: Operational</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Regional Node: Zurich (ZRH-1)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    <span>Encryption: AES-256-GCM</span>
                </div>
            </footer>
        </div>
    );
}
