"use client";

import { UserButton } from "@clerk/nextjs";

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
    { name: "Clean Room", href: "/clean-room", icon: Box },
    { name: "Activations", href: "/activations", icon: Zap },
    { name: "Overview (ROI)", href: "/dashboard", icon: LayoutDashboard },
    { name: "Data Sources", href: "/data-sources", icon: Database },
    { name: "Models Configuration", href: "/models", icon: Cpu },
    { name: "Proof of Privacy", href: "/compliance", icon: ShieldCheck },
    { name: "Global Governance", href: "/governance", icon: Globe },
    { name: "Engine Health", href: "/health", icon: Activity },
    { name: "Audit Logs", href: "/audit-logs", icon: List },
    { name: "Team & RBAC", href: "/team", icon: Users },
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
                    <UserButton />
                    <div>
                        <div className="text-sm font-semibold text-slate-900">Admin Terminal</div>
                        <div className="text-xs text-slate-500">SaaS Enterprise Plan</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
