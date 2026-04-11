/**
 * FaktorOS Logo — Premium SVG mark.
 *
 * Design language: Modern dark-nav SaaS (Linear / Vercel feel)
 * - Deep navy rounded square background (#0F172A → #1E293B)
 * - Bold white vertical stem of the "F"
 * - Top & mid crossbars use a sky-blue → indigo gradient
 * - Small glowing accent node in corner (data-pipeline motif)
 * - Wordmark: "Faktor" slate-900 bold + "OS" sky→indigo gradient text
 */

interface LogoMarkProps {
    size?: number;
    className?: string;
}

export function FaktorOSMark({ size = 32, className = "" }: LogoMarkProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Dark navy background gradient */}
                <linearGradient id="fos-bg" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0C1220" />
                </linearGradient>

                {/* Sky → Indigo accent gradient for crossbars */}
                <linearGradient id="fos-bar" x1="9" y1="0" x2="27" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#818CF8" />
                </linearGradient>

                {/* Soft glow filter */}
                <filter id="fos-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Rounded square background */}
            <rect width="36" height="36" rx="9" fill="url(#fos-bg)" />

            {/* Subtle inner highlight on top edge */}
            <rect width="36" height="1.5" rx="0.75" fill="white" opacity="0.05" />

            {/* ── F mark ── */}

            {/* Vertical stem — pure white, slightly rounded */}
            <rect x="9" y="8" width="3.5" height="20.5" rx="1.75" fill="white" opacity="0.92" />

            {/* Top crossbar — sky→indigo gradient, bold */}
            <rect x="9" y="8" width="16" height="3.5" rx="1.75" fill="url(#fos-bar)" />

            {/* Mid crossbar — same gradient, slightly shorter & lighter */}
            <rect x="9" y="16.5" width="11.5" height="3" rx="1.5" fill="url(#fos-bar)" opacity="0.75" />

            {/* ── Accent: data-node dot in bottom-right ── */}
            {/* Outer glow ring */}
            <circle cx="26.5" cy="26.5" r="3.5" fill="#38BDF8" opacity="0.15" />
            {/* Mid ring */}
            <circle cx="26.5" cy="26.5" r="2.2" fill="#38BDF8" opacity="0.3" filter="url(#fos-glow)" />
            {/* Core dot */}
            <circle cx="26.5" cy="26.5" r="1.3" fill="#7DD3FC" />
        </svg>
    );
}

/** Full wordmark: mark + styled gradient "FaktorOS" text */
export function FaktorOSWordmark({
    size = 32,
    className = "",
}: {
    size?: number;
    className?: string;
}) {
    return (
        <div className={`flex items-center space-x-2.5 ${className}`}>
            <FaktorOSMark size={size} />
            <span
                className="font-black tracking-tight select-none"
                style={{ fontSize: size * 0.6 }}
            >
                <span
                    style={{
                        background: "linear-gradient(135deg, #0f172a 60%, #334155)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    Faktor
                </span>
                <span
                    style={{
                        background: "linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    OS
                </span>
            </span>
        </div>
    );
}
