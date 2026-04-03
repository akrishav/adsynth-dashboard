"use client";

import { Bell, HelpCircle, X, ShieldCheck, Database, Zap, ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface HeaderProps {
    title?: string;
    breadcrumbs?: { label: string; href?: string }[];
    action?: React.ReactNode;
}

const NOTIFICATIONS = [
    {
        id: 1,
        icon: "synth",
        title: "Synthesis Complete",
        body: "customers_q1_2026.csv synthesized successfully — 14,204 rows.",
        time: "2 min ago",
        unread: true,
    },
    {
        id: 2,
        icon: "privacy",
        title: "Privacy Score Alert",
        body: "Last run achieved 97.4% privacy score — within optimal range.",
        time: "18 min ago",
        unread: true,
    },
    {
        id: 3,
        icon: "sync",
        title: "Activation Synced",
        body: "High-LTV Reactivation audience delivered to Meta CAPI.",
        time: "1 hr ago",
        unread: false,
    },
    {
        id: 4,
        icon: "engine",
        title: "Engine Node Rebalanced",
        body: "Node-03 rebalanced to Palo Alto cluster. All systems nominal.",
        time: "2 hr ago",
        unread: false,
    },
];

const HELP_ITEMS = [
    { label: "Documentation", href: "https://github.com", icon: ExternalLink },
    { label: "API Reference", href: "https://github.com", icon: ExternalLink },
    { label: "Privacy Guide (DP101)", href: "#science", icon: ExternalLink },
    { label: "Contact Support", href: "mailto:support@adsynth.ai", icon: ExternalLink },
];

export function Header({ title, breadcrumbs, action }: HeaderProps) {
    const [notifOpen, setNotifOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [notifications, setNotifications] = useState(NOTIFICATIONS);
    const notifRef = useRef<HTMLDivElement>(null);
    const helpRef = useRef<HTMLDivElement>(null);

    const unreadCount = notifications.filter(n => n.unread).length;

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
            if (helpRef.current && !helpRef.current.contains(e.target as Node)) setHelpOpen(false);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread: false })));

    return (
        <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-40 w-full">
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

                    {/* ── Bell Notifications ── */}
                    <div className="relative" ref={notifRef}>
                        <button
                            onClick={() => { setNotifOpen(v => !v); setHelpOpen(false); }}
                            className="relative hover:text-slate-600 transition-colors"
                        >
                            <Bell size={20} />
                            {unreadCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                                    {unreadCount}
                                </span>
                            )}
                        </button>

                        {notifOpen && (
                            <div className="absolute right-0 top-10 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
                                    <span className="text-sm font-bold text-slate-900">Notifications</span>
                                    <div className="flex items-center space-x-2">
                                        {unreadCount > 0 && (
                                            <button onClick={markAllRead} className="text-[10px] font-bold text-primary-500 hover:text-primary-700 uppercase tracking-wider">
                                                Mark all read
                                            </button>
                                        )}
                                        <button onClick={() => setNotifOpen(false)}>
                                            <X size={14} className="text-slate-400 hover:text-slate-600" />
                                        </button>
                                    </div>
                                </div>
                                <div className="divide-y divide-slate-50 max-h-80 overflow-y-auto">
                                    {notifications.map(n => (
                                        <div
                                            key={n.id}
                                            className={`flex items-start space-x-3 px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors ${n.unread ? "bg-primary-50/30" : ""}`}
                                            onClick={() => setNotifications(prev => prev.map(x => x.id === n.id ? { ...x, unread: false } : x))}
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${n.unread ? "bg-primary-100" : "bg-slate-100"}`}>
                                                {n.icon === "synth" && <Database size={14} className={n.unread ? "text-primary-500" : "text-slate-400"} />}
                                                {n.icon === "privacy" && <ShieldCheck size={14} className={n.unread ? "text-primary-500" : "text-slate-400"} />}
                                                {n.icon === "sync" && <Zap size={14} className={n.unread ? "text-primary-500" : "text-slate-400"} />}
                                                {n.icon === "engine" && <Zap size={14} className="text-slate-400" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs font-bold text-slate-900">{n.title}</span>
                                                    {n.unread && <span className="w-2 h-2 rounded-full bg-primary-500 shrink-0 ml-2" />}
                                                </div>
                                                <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{n.body}</p>
                                                <span className="text-[10px] text-slate-400 mt-1 block">{n.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Help Menu ── */}
                    <div className="relative" ref={helpRef}>
                        <button
                            onClick={() => { setHelpOpen(v => !v); setNotifOpen(false); }}
                            className="hover:text-slate-600 transition-colors"
                        >
                            <HelpCircle size={20} />
                        </button>

                        {helpOpen && (
                            <div className="absolute right-0 top-10 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50">
                                <div className="px-4 py-3 border-b border-slate-100">
                                    <span className="text-sm font-bold text-slate-900">Help & Resources</span>
                                </div>
                                <div className="p-2">
                                    {HELP_ITEMS.map((item, i) => (
                                        <a
                                            key={i}
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel="noreferrer"
                                            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                                            onClick={() => setHelpOpen(false)}
                                        >
                                            <span>{item.label}</span>
                                            <item.icon size={12} className="text-slate-400" />
                                        </a>
                                    ))}
                                </div>
                                <div className="border-t border-slate-100 px-4 py-3">
                                    <p className="text-[10px] text-slate-400">AdSynth v2.4.0 · SOC2 Type II</p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </header>
    );
}
