import { Bell, HelpCircle } from "lucide-react";

interface HeaderProps {
    title?: string;
    breadcrumbs?: { label: string; href?: string }[];
    action?: React.ReactNode;
}

export function Header({ title, breadcrumbs, action }: HeaderProps) {
    return (
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10 w-full">
            <div className="flex items-center space-x-2 text-sm">
                {breadcrumbs ? (
                    <div className="flex items-center space-x-2 text-slate-500">
                        <span className="font-semibold text-slate-900">AdSynth</span>
                        {breadcrumbs.map((crumb, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-slate-300">/</span>
                                <span className={idx === breadcrumbs.length - 1 ? "text-slate-900" : ""}>
                                    {crumb.label}
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <span className="font-semibold text-slate-900 text-lg">{title}</span>
                )}
            </div>

            <div className="flex items-center space-x-4">
                {action}
                <div className="flex items-center space-x-3 text-slate-400 border-l border-slate-200 pl-4">
                    <button className="hover:text-slate-600 transition-colors">
                        <Bell size={20} />
                    </button>
                    <button className="hover:text-slate-600 transition-colors">
                        <HelpCircle size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}
