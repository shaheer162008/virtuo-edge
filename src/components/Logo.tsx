import Link from "next/link";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link href="/" className={`text-2xl md:text-3xl font-bold tracking-tight ${className}`}>
            <span className="text-gradient">NEXILER</span>
        </Link>
    );
};
