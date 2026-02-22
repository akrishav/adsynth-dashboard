export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative p-4">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-primary-500"></div>

            <div className="w-full max-w-sm">
                {children}
            </div>

            <div className="mt-12 flex items-center justify-between w-full max-w-2xl px-8 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>ALL SYSTEMS OPERATIONAL</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="bg-slate-200 w-3 h-3 rounded-sm flex items-center justify-center">≡</span>
                    <span>REGION: US-EAST-1</span>
                </div>
                <div>
                    © 2024 ADSYNTH INFRASTRUCTURE INC. INTERNAL USE ONLY.
                </div>
            </div>
        </div>
    );
}
