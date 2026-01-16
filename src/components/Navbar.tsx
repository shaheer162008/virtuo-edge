"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { premiumServices } from "@/lib/servicesCopyNew";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blogs", label: "Blogs" },
    { href: "/packages", label: "Packages" },
    { href: "/our-work", label: "Our Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const pathname = usePathname();
    const servicesRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
                setServicesDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4 sm:pt-6">
            <div className="flex items-center h-16 sm:h-18 md:h-20 gap-4 lg:gap-6 px-4 sm:px-6 lg:px-8">
                
                {/* Mobile: Logo + Menu Icon in one container with full screen width */}
                <div className="flex lg:hidden items-center justify-between bg-black/40 backdrop-blur-md rounded-lg px-3 py-2 gap-4 w-full">
                    <Logo />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white hover:text-cyan-400 transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                
                {/* Desktop: Logo + Nav Links with Transparent Border */}
                <div className="hidden lg:flex items-center md:bg-black/40 md:backdrop-blur-md border-2 border-transparent px-4 sm:px-6 lg:px-8 h-full rounded-2xl gap-2 sm:gap-4">
                    {/* Logo */}
                    <Logo />
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6 ml-4 xl:gap-8">
                        {navLinks.map((link) => {
                            // Services dropdown
                            if (link.label === "Services") {
                                return (
                                    <div key={link.href} className="relative" ref={servicesRef}>
                                        <button
                                            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                                            className={`flex items-center gap-1 text-base xl:text-lg font-medium transition-all duration-300 hover:text-cyan-400 relative group whitespace-nowrap ${pathname === "/services" ? "text-cyan-400 font-bold" : "text-white/70"}`}
                                            onMouseEnter={() => setServicesDropdownOpen(true)}
                                        >
                                            {link.label}
                                            <ChevronDown size={18} className={`transition-transform duration-300 cursor-pointer hover:text-cyan-400 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                                        </button>

                                        {/* Services Dropdown */}
                                        <AnimatePresence>
                                            {servicesDropdownOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full mt-2 left-[-200px] w-[600px] bg-black/90 backdrop-blur-md border-2 border-transparent rounded-2xl p-6 grid grid-cols-2 gap-4 shadow-2xl z-50"
                                                    onMouseEnter={() => setServicesDropdownOpen(true)}
                                                    onMouseLeave={() => setServicesDropdownOpen(false)}
                                                >
                                                    {premiumServices.slice(0, 6).map((service) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/services/${service.slug}`}
                                                            onClick={() => setServicesDropdownOpen(false)}
                                                            className="px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:font-bold hover:bg-white/10 transition-all duration-300"
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    ))}
                                                    
                                                    {/* View All Services Button */}
                                                    <Link
                                                        href="/services"
                                                        onClick={() => setServicesDropdownOpen(false)}
                                                        className="col-span-2 px-4 py-3 rounded-lg text-sm font-bold text-cyan-400 hover:text-white hover:bg-cyan-400/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 text-center"
                                                    >
                                                        View All Services →
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-base xl:text-lg font-medium transition-all duration-300 hover:text-cyan-400 relative group whitespace-nowrap ${pathname === link.href ? "text-cyan-400 font-bold" : "text-white/70"}`}
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
                            );
                        })}
                    </nav>
                </div>

                {/* Right Side: CTA Button (Desktop Only) */}
                {/* Desktop: Consultation Button */}
                <div className="hidden md:flex items-center ml-auto mr-4 sm:mr-6 lg:mr-8 h-full">
                    <Link
                        href="/consultation"
                        className="flex items-center gap-2 text-base font-bold text-white/70 hover:text-cyan-400 transition-all duration-300 whitespace-nowrap group"
                    >
                        Get Free Consultation
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu - New Theme */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ top: '64px' }}
                        />
                        
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ top: '64px' }}
                        />
                        
                        {/* Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -400 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -400 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 w-full bg-gradient-to-b from-black/70 via-black/80 to-blue-950/60 backdrop-blur-xl border-r border-white/10 shadow-2xl z-50 overflow-y-auto"
                        >
                            {/* Logo at top */}
                            <div className="sticky top-0 flex items-center justify-between p-6 bg-black/60 backdrop-blur-md border-b border-white/10">
                                <Logo />
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white hover:text-cyan-400 transition-all duration-300"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Menu Content */}
                            <nav className="flex flex-col p-6 gap-2">
                                {navLinks.map((link, index) => {
                                    // Services dropdown in mobile menu
                                    if (link.label === "Services") {
                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                                className="flex flex-col gap-2"
                                            >
                                                <button
                                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                    className="flex items-center justify-between px-5 py-3 rounded-xl text-base font-medium text-white/70 hover:text-white hover:font-bold hover:bg-white/10 transition-all duration-300 w-full"
                                                >
                                                    {link.label}
                                                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                                                </button>

                                                {/* Services List */}
                                                <AnimatePresence>
                                                    {mobileServicesOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="grid grid-cols-2 gap-3 pl-4 my-2"
                                                        >
                                                            {premiumServices.map((service) => (
                                                                <Link
                                                                    key={service.slug}
                                                                    href={`/services/${service.slug}`}
                                                                    onClick={() => {
                                                                        setMobileMenuOpen(false);
                                                                        setMobileServicesOpen(false);
                                                                    }}
                                                                    className="px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white/70 hover:text-white hover:font-bold hover:bg-cyan-400/10 transition-all duration-300"
                                                                >
                                                                    {service.title}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        );
                                    }

                                    return (
                                        <motion.div
                                            key={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.2 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`block px-5 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                                    pathname === link.href
                                                        ? "text-cyan-400 font-bold bg-cyan-400/10"
                                                        : "text-white/70 hover:text-white hover:font-bold hover:bg-white/10"
                                                }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                                
                                {/* Divider */}
                                <div className="my-4 h-px bg-white/10" />
                                
                                {/* Consultation Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.2 }}
                                >
                                    <Link
                                        href="/consultation"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-white/10 border border-white/30 hover:bg-white/20 hover:border-white/50 hover:text-cyan-400 transition-all duration-300 group"
                                    >
                                        Get Free Consultation
                                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
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