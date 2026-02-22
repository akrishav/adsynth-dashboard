"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart2,
    Settings,
    ShieldCheck,
    Database,
    Cpu,
    Zap,
    Users,
    List,
    LayoutDashboard,
    Box,
    Activity,
    Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Overview (ROI)", href: "/dashboard", icon: LayoutDashboard },
    { name: "Engine Health", href: "/health", icon: Activity },
    { name: "Models Configuration", href: "/models", icon: Cpu },
    { name: "Data Sources", href: "/data-sources", icon: Database },
    { name: "Clean Room", href: "/clean-room", icon: Box },
    { name: "Activations", href: "/activations", icon: Zap },
    { name: "Team & RBAC", href: "/team", icon: Users },
    { name: "Audit Logs", href: "/audit-logs", icon: List },
    { name: "Proof of Privacy", href: "/compliance", icon: ShieldCheck },
    { name: "Global Governance", href: "/governance", icon: Globe },
    { name: "Security Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen border-r border-slate-200 bg-white flex flex-col fixed left-0 top-0">
            <div className="p-6 flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                    <Zap size={20} fill="currentColor" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">AdSynth</span>
            </div>

            <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary-50 text-primary-600"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                            )}
                        >
                            <item.icon size={18} className={isActive ? "text-primary-500" : "text-slate-400"} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-100">
                <div className="flex items-center space-x-3 px-2 py-2">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                        <UserIcon />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-slate-900">Admin Terminal</div>
                        <div className="text-xs text-slate-500">SaaS Enterprise Plan</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserIcon() {
    return (
        <svg viewBox="0 0 36 36" fill="none" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" fill="#E2E8F0" />
            <circle cx="18" cy="14" r="6" fill="#94A3B8" />
            <path d="M7 32C7 26.4772 11.4772 22 17 22H19C24.5228 22 29 26.4772 29 32V36H7V32Z" fill="#94A3B8" />
        </svg>
    );
}
