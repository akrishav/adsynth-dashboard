/**
 * FaktorOS Logo — Pure inline SVG, no background at all.
 * Design: Circuit-board "F" — thick rounded strokes with curved paths
 * and glowing node dots at endpoints. Sky-cyan → violet gradient.
 */

interface LogoMarkProps {
    size?: number;
    className?: string;
}

export function FaktorOSMark({ size = 36, className = "" }: LogoMarkProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 64 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Gradient: cyan at bottom-left → violet at top-right */}
                <linearGradient id="fk-grad" x1="4" y1="76" x2="58" y2="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
            </defs>

            {/* ── Vertical stem — slight organic curve ── */}
            <path
                d="M14 74 C13 58 11 42 12 28 C13 16 14 10 14 8"
                stroke="url(#fk-grad)"
                strokeWidth="7.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Top crossbar — curves gently right ── */}
            <path
                d="M14 8 C24 5 38 5 54 7"
                stroke="url(#fk-grad)"
                strokeWidth="7.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Mid crossbar — slightly shorter ── */}
            <path
                d="M13 41 C22 38 34 38 46 40"
                stroke="url(#fk-grad)"
                strokeWidth="7.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Endpoint node dots ── */}
            {/* Bottom of stem */}
            <circle cx="14" cy="74" r="5" fill="#38BDF8" />
            {/* Top of stem */}
            <circle cx="14" cy="8"  r="4" fill="#60C8F8" opacity="0.6" />
            {/* End of top crossbar */}
            <circle cx="54" cy="7"  r="5" fill="#A78BFA" />
            {/* End of mid crossbar */}
            <circle cx="46" cy="40" r="5" fill="#C4B5FD" />
        </svg>
    );
}

export function FaktorOSWordmark({
    size = 36,
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
                style={{ fontSize: size * 0.56 }}
            >
                <span style={{ color: "#0f172a" }}>Faktor</span>
                <span
                    style={{
                        background: "linear-gradient(135deg, #38BDF8 0%, #A78BFA 100%)",
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
