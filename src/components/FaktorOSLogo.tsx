/**
 * FaktorOS Logo — white-background PNG with mix-blend-mode: multiply.
 * This makes the white areas transparent while the colored F strokes
 * remain fully vibrant — the exact F shape, no dark glow artifacts.
 */
import Image from "next/image";

interface LogoMarkProps {
    size?: number;
    className?: string;
}

export function FaktorOSMark({ size = 36, className = "" }: LogoMarkProps) {
    // The interlocking circles logo (taller than it is wide)
    const height = size * 1.6;
    return (
        <svg 
            width={size} 
            height={height} 
            viewBox="0 0 100 160" 
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Top Circle - Black */}
            <circle cx="50" cy="50" r="40" stroke="#000000" strokeWidth="12" />
            {/* Bottom Circle - Navy Blue */}
            <circle cx="50" cy="110" r="40" stroke="#0056b3" strokeWidth="12" />
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
        <div className={`flex items-center space-x-3 ${className}`}>
            <FaktorOSMark size={size * 0.8} />
            <span
                className="font-semibold tracking-tight select-none"
                style={{ fontSize: size * 0.7, color: "#0056b3" }}
            >
                faktorOS
            </span>
        </div>
    );
}
