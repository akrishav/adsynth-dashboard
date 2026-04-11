/**
 * FaktorOS Logo — uses the transparent circuit-flow F PNG.
 * Transparent background: the checker pattern shown in preview
 * is just the transparency indicator — it renders cleanly on any surface.
 */
import Image from "next/image";

interface LogoMarkProps {
    size?: number;
    className?: string;
}

export function FaktorOSMark({ size = 36, className = "" }: LogoMarkProps) {
    return (
        <Image
            src="/logo.png"
            alt="FaktorOS Logo"
            width={size}
            height={size}
            className={className}
            priority
        />
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
