/**
 * FaktorOS Logo — Uses the AI-generated premium PNG mark.
 * Circuit-flow "F" strokes in sky-blue→violet on deep navy.
 */
import Image from "next/image";

interface LogoMarkProps {
    size?: number;
    className?: string;
}

/** Just the icon mark */
export function FaktorOSMark({ size = 32, className = "" }: LogoMarkProps) {
    return (
        <Image
            src="/logo.png"
            alt="FaktorOS Logo"
            width={size}
            height={size}
            className={`rounded-xl ${className}`}
            priority
        />
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
                <span
                    style={{
                        color: "#0f172a",
                    }}
                >
                    Faktor
                </span>
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
