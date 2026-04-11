/**
 * FaktorOS Logo — Pure inline SVG, fully transparent background.
 * Replicates the circuit-flow "F" aesthetic: flowing curved strokes
 * with circular node endpoints, sky-cyan → soft-violet gradient.
 * Zero PNG artifacts, scales perfectly at any size.
 */

interface LogoMarkProps {
    size?: number;
    className?: string;
}

/** Just the icon mark — NO background, 100% transparent */
export function FaktorOSMark({ size = 32, className = "" }: LogoMarkProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 80 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="fk-g" x1="0" y1="0" x2="80" y2="96" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#38BDF8" />  {/* sky-400 cyan */}
                    <stop offset="100%" stopColor="#A78BFA" />  {/* violet-400  */}
                </linearGradient>
            </defs>

            {/* ── Vertical left stem — gently curved ── */}
            <path
                d="M18 88 C16 72 14 56 16 40 C18 24 22 14 26 8"
                stroke="url(#fk-g)"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Top crossbar — sweeps right with a slight curve ── */}
            <path
                d="M22 10 C36 6 52 5 64 9 C68 11 70 15 68 20"
                stroke="url(#fk-g)"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Mid crossbar — shorter, same curvature ── */}
            <path
                d="M18 48 C30 44 46 43 58 47"
                stroke="url(#fk-g)"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Endpoint node dots ── */}
            {/* Bottom of stem */}
            <circle cx="18" cy="88" r="4.5" fill="#38BDF8" />
            {/* Top of stem / start of top bar */}
            <circle cx="26" cy="8"  r="4.5" fill="#38BDF8" />
            {/* End of top crossbar */}
            <circle cx="68" cy="20" r="4.5" fill="#A78BFA" />
            {/* End of mid crossbar */}
            <circle cx="58" cy="47" r="4.5" fill="#A78BFA" />
        </svg>
    );
}

/** Full wordmark: mark + gradient "FaktorOS" text */
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
