"use client";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, MessageCircle, Palette, Film, Wrench, TrendingUp, Share2, Paintbrush, Box, Plug, Smartphone, Settings } from "lucide-react";
import Link from "next/link";

const getServiceIcon = (slug: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
        "website-development": Code,
        "ai-automation-setup": Zap,
        "ai-chatbot-integration": MessageCircle,
        "full-brand-creation": Palette,
        "motion-graphics": Film,
        "video-editing-short": Film,
        "video-editing-long": Film,
        "ai-automation-maintenance": Wrench,
        "seo-optimization": TrendingUp,
        "social-media-ads": Share2,
        "graphic-design": Paintbrush,
        "website-maintenance": Wrench,
        "3d-modeling": Box,
        "api-integration": Plug,
        "mobile-app-development": Smartphone,
        "custom-software": Settings,
    };
    return iconMap[slug] || Code;
};

const topServices = [
    {
        icon: "website-development",
        title: "Website Development",
        description: "High-performance, conversion-optimized websites built with cutting-edge technologies.",
        href: "/services/website-development",
    },
    {
        icon: "ai-automation-setup",
        title: "AI Automation Setup",
        description: "Intelligent workflows that reduce operational costs and eliminate manual work.",
        href: "/services/ai-automation-setup",
    },
    {
        icon: "full-brand-creation",
        title: "Full Brand Creation",
        description: "Complete brand identity with logo, guidelines, and comprehensive brand strategy.",
        href: "/services/full-brand-creation",
    },
    {
        icon: "ai-chatbot-integration",
        title: "AI Chatbot Integration",
        description: "24/7 automated customer support and intelligent lead qualification systems.",
        href: "/services/ai-chatbot-integration",
    },
    {
        icon: "mobile-app-development",
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps built for engagement, performance, and scale.",
        href: "/services/mobile-app-development",
    },
    {
        icon: "custom-software",
        title: "Custom Software Solutions",
        description: "Bespoke software built exactly for your business needs and unique challenges.",
        href: "/services/custom-software",
    },
];

export const Services = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-500/3 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Premium Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-[1.15]">
                        <span className="text-white">What Virtuo Edge </span>
                        <span className="text-gradient">Delivers</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-4">
                        AI automation, web development, branding, and growth strategies engineered for excellence.
                    </p>
                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/60">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            98% Satisfaction
                        </span>
                        <span className="hidden sm:flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full" />
                            50+ Projects
                        </span>
                    </div>
                </motion.div>

                {/* Premium Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14">
                    {topServices.map((service, index) => (
                        <Link key={index} href={service.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.06 }}
                                whileHover={{ y: -12, scale: 1.03 }}
                                className="group relative h-full rounded-2xl overflow-hidden cursor-pointer"
                            >
                                {/* Premium Card Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/6 to-white/1 border border-white/15 rounded-2xl group-hover:border-primary/40 transition-all duration-500" />
                                
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10 pointer-events-none">
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                                </div>

                                {/* Content */}
                                <div className="relative p-6 sm:p-7 md:p-8 h-full flex flex-col">
                                    {/* Premium Icon from Lucide */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-white/8 to-white/4 border border-white/8 mb-5 w-fit shadow-lg group-hover:shadow-primary/20 group-hover:border-primary/30 transition-all duration-300"
                                        style={{ width: '56px', height: '56px' }}
                                    >
                                        {(() => {
                                            const IconComponent = getServiceIcon(service.icon);
                                            return <IconComponent size={32} className="text-primary stroke-[1.5]" />;
                                        })()}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-white group-hover:to-primary group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-base sm:text-lg text-white/65 leading-relaxed mb-5 line-clamp-3 group-hover:text-white/80 transition-colors duration-300 grow">
                                        {service.description}
                                    </p>

                                    {/* CTA */}
                                    <motion.div
                                        whileHover={{ x: 6 }}
                                        className="flex items-center gap-2 text-primary font-semibold text-base sm:text-lg group-hover:gap-3 transition-all duration-300"
                                    >
                                        <span>Explore</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                                    </motion.div>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 pointer-events-none">
                                    <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.06, boxShadow: "0 25px 50px rgba(51, 187, 207, 0.25)" }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 sm:py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg"
                        >
                            <span>Explore All Services</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                    <p className="text-white/50 text-xs sm:text-sm mt-4 sm:mt-5">
                        We offer 15+ specialized services tailored to your needs
                    </p>
                </motion.div>
            </div>
        </section>
    );
};;
