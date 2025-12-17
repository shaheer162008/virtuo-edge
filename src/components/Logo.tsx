import Link from "next/link";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link href="/" className={`flex items-center ${className}`}>
            <div className="h-8 md:h-10 w-40 md:w-48 flex items-center">
                {/* Use a plain img as a robust fallback to avoid Next/Image rendering issues in some environments */}
                <img
                    src="/Nexiler.png"
                    alt="Nexiler"
                    className="w-full h-full object-contain object-left"
                    loading="eager"
                />
            </div>
        </Link>
    );
};
