/**
 * FaktorOS Logo — Pure inline SVG matching the circuit-flow "F" image.
 * Multiple curved strokes forming the F letter, sky-cyan → violet gradient,
 * circular endpoint nodes. Zero background, zero glow artifacts.
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
            viewBox="0 0 72 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                {/* Cyan at bottom-left → Violet at top-right, matching the image exactly */}
                <linearGradient id="fk-g" x1="8" y1="88" x2="68" y2="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0%"   stopColor="#22D3EE" />
                    <stop offset="50%"  stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
            </defs>

            {/* ── Left outer curve of the stem (flows from bottom up) ── */}
            <path
                d="M 12 86 C 10 66 9 44 11 22 C 12 13 14 7 17 5"
                stroke="url(#fk-g)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Right side of stem (inner parallel stroke) ── */}
            <path
                d="M 21 86 C 19 66 18 44 20 22"
                stroke="url(#fk-g)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Top crossbar — upper stroke ── */}
            <path
                d="M 15 5 C 28 1 48 1 65 5"
                stroke="url(#fk-g)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Top crossbar — lower parallel stroke ── */}
            <path
                d="M 20 18 C 32 14 50 14 65 18"
                stroke="url(#fk-g)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Mid crossbar — upper stroke ── */}
            <path
                d="M 14 48 C 26 44 42 43 58 46"
                stroke="url(#fk-g)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Mid crossbar — lower parallel stroke ── */}
            <path
                d="M 14 58 C 26 54 42 53 58 56"
                stroke="url(#fk-g)"
                strokeWidth="5.5"
                strokeLinecap="round"
                fill="none"
            />

            {/* ── Endpoint node circles ── */}
            <circle cx="65" cy="5"  r="4.5" fill="#A78BFA" />  {/* top-right of top bar */}
            <circle cx="65" cy="18" r="4.5" fill="#818CF8" />  {/* bottom-right of top bar */}
            <circle cx="58" cy="46" r="4.5" fill="#60A5FA" />  {/* top-right of mid bar */}
            <circle cx="58" cy="56" r="4.5" fill="#60A5FA" />  {/* bottom-right of mid bar */}
            <circle cx="12" cy="86" r="4.5" fill="#22D3EE" />  {/* bottom of stem */}
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
