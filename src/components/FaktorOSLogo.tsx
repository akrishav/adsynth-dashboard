/**
 * FaktorOS Logo Mark — SVG-based, works at any size.
 * The mark is a stylised "Fk" monogram formed by a bold "F"
 * with a diagonal data-flow accent slash — communicating speed,
 * data transformation, and privacy in a single geometric glyph.
 */

interface LogoMarkProps {
    size?: number;
    className?: string;
}

/** Just the icon mark (square) */
export function FaktorOSMark({ size = 32, className = "" }: LogoMarkProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Rounded square background with subtle gradient */}
            <defs>
                <linearGradient id="bg-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="accent-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.8" />
                </linearGradient>
            </defs>

            <rect width="32" height="32" rx="8" fill="url(#bg-grad)" />

            {/* Bold F strokes */}
            {/* Vertical stem */}
            <rect x="7" y="7" width="3.5" height="18" rx="1.5" fill="white" />
            {/* Top horizontal bar */}
            <rect x="7" y="7" width="14" height="3.5" rx="1.5" fill="white" />
            {/* Mid horizontal bar */}
            <rect x="7" y="14.25" width="10" height="3" rx="1.5" fill="white" />

            {/* Accent slash — "data pipeline" diagonal */}
            <path
                d="M20 18 L26 25"
                stroke="url(#accent-grad)"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <circle cx="26" cy="25" r="2" fill="white" opacity="0.7" />
        </svg>
    );
}

/** Full wordmark: mark + "FaktorOS" text together */
export function FaktorOSWordmark({
    size = 32,
    textClass = "text-xl font-bold tracking-tight text-slate-900",
}: {
    size?: number;
    textClass?: string;
}) {
    return (
        <div className="flex items-center space-x-2.5">
            <FaktorOSMark size={size} />
            <span className={textClass}>
                Faktor<span className="text-sky-500">OS</span>
            </span>
        </div>
    );
}
