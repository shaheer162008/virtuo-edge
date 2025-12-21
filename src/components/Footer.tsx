import Link from "next/link";
import { Logo } from "./Logo";
import { Twitter, Linkedin, Github, Mail, Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Our Work", href: "/our-work" },
        { label: "Blog", href: "/blogs" },
    ],
    resources: [
        { label: "Packages", href: "/packages" },
        { label: "Free Consultation", href: "/consultation" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Cookie Policy", href: "/cookie-policy" },
    ],
};

const socialLinks = [
    { Icon: Twitter, href: "https://x.com/NexilerOfficial", label: "X" },
    { Icon: Youtube, href: "https://www.youtube.com/@Nexiler.Official", label: "Youtube" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/nexiler", label: "LinkedIn" },
    { Icon: Github, href: "https://github.com/nexiler-official", label: "GitHub" },
    { Icon: Instagram, href: "https://www.instagram.com/nexiler.official", label: "Instagram" },
    { Icon: Mail, href: "mailto:contact@nexiler.tech", label: "Email" },
    { Icon: Facebook, href: "https://www.facebook.com/share/1APYFEoejH/", label: "Facebook" },
];

export const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-transparent border-t border-white/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-14">
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="mb-4">
                            <Logo />
                        </div>
                        <p className="text-white/65 text-base sm:text-base md:text-lg leading-relaxed mb-6 max-w-xs">
                            Unlock growth through intelligent automation, stunning web experiences, and strategic digital solutions.
                        </p>
                        <div className="flex gap-2.5 flex-wrap">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 hover:from-primary/20 hover:to-primary/10 text-white/50 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
                                    aria-label={label}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <Icon size={18} className="relative z-10" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 sm:mb-5 text-base sm:text-lg uppercase tracking-widest opacity-90">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-base sm:text-lg transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-2"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 sm:mb-5 text-base sm:text-lg uppercase tracking-widest opacity-90">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-base sm:text-lg transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-2"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 sm:mb-5 text-base sm:text-lg uppercase tracking-widest opacity-90">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/60 hover:text-primary text-base sm:text-lg transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-2"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 sm:pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-base sm:text-lg text-center sm:text-left">
                        © {new Date().getFullYear()} Nexiler. All rights reserved.
                    </p>
                    <p className="text-white/40 text-base sm:text-lg">
                        Developed by Team Nexiler
                    </p>
                </div>
            </div>
        </footer>
    );
};