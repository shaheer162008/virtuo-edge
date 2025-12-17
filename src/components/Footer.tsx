import Link from "next/link";
import { Logo } from "./Logo";
import { Twitter, Linkedin, Github, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = {
    company: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Our Work", href: "/our-work" },
        { label: "Blog", href: "/blogs" },
    ],
    resources: [
        { label: "Case Studies", href: "/our-work" },
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
        <footer className="border-t border-white/10 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
                    {/* Brand Column */}
                    <div className="col-span-2 sm:col-span-2 lg:col-span-2">
                        <Logo className="mb-4" />
                        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-sm">
                            We help ambitious businesses unlock growth through intelligent automation, stunning web experiences, and strategic digital solutions. From startups to enterprises, we&apos;re your partner in building the future.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            {socialLinks.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95"
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Company</h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-primary text-sm sm:text-base transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Resources</h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-primary text-sm sm:text-base transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div className="col-span-2 sm:col-span-1">
                        <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Legal</h3>
                        <ul className="space-y-2.5 sm:space-y-3 flex flex-row sm:flex-col gap-4 sm:gap-0 flex-wrap">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-primary text-sm sm:text-base transition-all duration-300 hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                    <p className="text-white/50 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Nexiler. All rights reserved.
                    </p>
                    <p className="text-white/50 text-sm text-center sm:text-right">
                        Developed by Team Nexiler
                    </p>
                </div>
            </div>
        </footer>
    );
};
