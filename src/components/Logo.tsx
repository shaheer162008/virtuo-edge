import Link from "next/link";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link href="/" className={`flex items-center gap-2 ${className}`}>
            <div className="h-8 md:h-10 flex items-center justify-center flex-shrink-0">
                {/* Logo Icon */}
                <img
                    src="/virtuo-edge-logo.png"
                    alt="Virtuo Edge Logo"
                    className="h-full w-auto object-contain"
                    loading="eager"
                />
            </div>
            
            {/* Logo Text */}
            <div className="h-8 md:h-10 flex items-center">
                <img
                    src="/virtuo-edge-text.png"
                    alt="Virtuo Edge"
                    className="h-full w-auto object-contain"
                    loading="eager"
                />
            </div>
        </Link>
    );
};
