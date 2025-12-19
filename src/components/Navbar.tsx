"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/our-work", label: "Our Work" },
    { href: "/blogs", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
            {/* Navbar Gradient Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#00040F]/95 via-[#00040F]/90 to-[#00040F]/85" />
            
            <div className="container mx-auto px-4 sm:px-6 z-10">
                <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 sm:h-18 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 z-50 col-start-1 justify-self-start">
                        <Logo />
                    </div>

                    {/* Desktop Navigation - centered column */}
                    <div className="hidden md:flex justify-center pointer-events-auto z-40 col-start-2">
                        <nav className="flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-base xl:text-lg font-medium transition-all duration-300 hover:text-primary relative group whitespace-nowrap ${pathname === link.href ? "text-primary" : "text-white/70"}`}
                                >
                                    {link.label}
                                    {pathname === link.href && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-gradient rounded-full"
                                        />
                                    )}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Right column: CTA (desktop) and mobile menu toggle */}
                    <div className="col-start-3 col-end-4 justify-self-end z-50 flex items-center gap-2">
                        <Link
                            href="/consultation"
                            className="hidden md:inline-flex px-5 xl:px-6 py-2.5 xl:py-3 bg-white/10 text-white border-2 border-white/30 rounded-xl text-base xl:text-lg font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 whitespace-nowrap"
                        >
                            Get Free Consultation
                        </Link>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-3 rounded-lg text-white hover:text-primary hover:bg-white/5 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ top: '64px' }}
                        />
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="md:hidden fixed inset-x-0 top-16 sm:top-18 md:top-20 bg-[#00040F]/98 border-b border-white/10 shadow-2xl z-50 backdrop-blur-xl"
                            style={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}
                        >
                        <nav className="container mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 ${
                                            pathname === link.href
                                                ? "text-primary bg-primary/10 border-l-4 border-primary"
                                                : "text-white/80 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-primary/50"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-white/10"
                            >
                                <Link
                                    href="/consultation"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block w-full px-6 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl text-base sm:text-lg font-bold text-center hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                                >
                                    Get Free Consultation
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};
