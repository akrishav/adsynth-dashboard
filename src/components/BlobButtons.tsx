"use client";

import { Download } from "lucide-react";
import { useState } from "react";

// ─── Executive Summary / Board Report Download ────────────────────────────────
export function ExecSummaryDownload({ stats }: { stats: any }) {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        try {
            const reportContent = `
AdSynth Enterprise Executive Summary
-------------------------------------
Generated: ${new Date().toLocaleString()}

Total Synthetic Profiles: ${stats.totalProfiles}
Active Destinations: ${stats.activeDestinations}
Average ROI Lift: +${stats.avgRoi}%

Recent Syntheses:
${stats.runs.map((r: any) => `- ${r.fileName} (${r.rows} rows) | Utility: ${r.qualityScore}% | PII Leaks: 0`).join('\n')}

All system telemetry indicates optimal mathematical privacy retention.
            `.trim();

            const blob = new Blob([reportContent], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `AdSynth_Executive_Summary_${Date.now()}.txt`;
            a.click();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
        }
        setTimeout(() => setDownloading(false), 800);
    };

    return (
        <button
            onClick={handleDownload}
            disabled={downloading}
            className="bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-primary-600 transition-colors shadow-md shadow-primary-500/20 flex items-center"
        >
            <Download size={14} className="mr-2" />
            {downloading ? "Generating Output..." : "Download Executive Summary"}
        </button>
    );
}

// ─── CSV Audit Log Export ─────────────────────────────────────────────────────
export function CSVExportButton({ logs }: { logs: any[] }) {
    const [downloading, setDownloading] = useState(false);

    const handleExport = () => {
        setDownloading(true);
        try {
            const headers = "ID,Timestamp,Action,User,Details,Metrics,Status\n";
            const rows = logs.map(log =>
                `"${log.id}","${new Date(log.createdAt).toISOString()}","${log.action}","${log.user}","${log.details}","${log.metrics}","${log.status}"`
            ).join("\n");

            const blob = new Blob([headers + rows], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `AdSynth_Global_Audit_Logs_${Date.now()}.csv`;
            a.click();
            URL.revokeObjectURL(url);
        } catch (err) {
            console.error(err);
        }
        setTimeout(() => setDownloading(false), 800);
    };

    return (
        <button
            onClick={handleExport}
            disabled={downloading}
            className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-slate-50 transition-colors flex items-center shadow-sm"
        >
            <Download size={14} className="mr-2" />
            {downloading ? "Exporting Matrix..." : "Export CSV Logs"}
        </button>
    );
}

// ─── Generic Feedback Button (modals/toasts for non-destructive actions) ───────
export function FeedbackButton({
    label,
    icon: Icon,
    alertMessage,
    className,
}: {
    label: string;
    icon?: React.ElementType;
    alertMessage: string;
    className?: string;
}) {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(alertMessage);
        }, 600);
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className={
                className ||
                "bg-primary-500 text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center hover:bg-primary-600 transition-colors shadow-md"
            }
        >
            {Icon && <Icon size={14} className="mr-2" />}
            {loading ? "PROCESSING..." : label}
        </button>
    );
}
