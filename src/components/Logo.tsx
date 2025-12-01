import Link from "next/link";
import Image from "next/image";

export const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <Link href="/" className={`flex items-center ${className}`}>
            <div className="relative h-16 md:h-20 w-52 md:w-64">
                <Image 
                    src="/Nexiler.png" 
                    alt="Nexiler Logo" 
                    fill
                    className="object-contain object-left"
                    priority
                />
            </div>
        </Link>
    );
};
