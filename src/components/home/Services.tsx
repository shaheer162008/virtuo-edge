"use client";
import { motion } from "framer-motion";
import { Bot, Zap, Globe, Video, Settings, Film, ArrowRight } from "lucide-react";
import Link from "next/link";

const topServices = [
    {
        icon: Globe,
        title: "Website Development",
        description: "High-performance, conversion-optimized websites built with cutting-edge technologies.",
        gradient: "from-blue-500 to-cyan-500",
        href: "/services/website-development",
    },
    {
        icon: Bot,
        title: "AI Automation Setup",
        description: "Intelligent workflows that reduce operational costs and eliminate manual work.",
        gradient: "from-purple-500 to-pink-500",
        href: "/services/ai-automation-setup",
    },
    {
        icon: Settings,
        title: "Full Brand Creation",
        description: "Complete brand identity with logo, guidelines, and comprehensive brand strategy.",
        gradient: "from-orange-500 to-red-500",
        href: "/services/full-brand-creation",
    },
    {
        icon: Zap,
        title: "AI Chatbot Integration",
        description: "24/7 automated customer support and intelligent lead qualification systems.",
        gradient: "from-cyan-500 to-blue-500",
        href: "/services/ai-chatbot-integration",
    },
    {
        icon: Video,
        title: "Motion Graphics",
        description: "Professional animations for explainer videos, ads, and engaging visual content.",
        gradient: "from-green-500 to-teal-500",
        href: "/services/motion-graphics",
    },
    {
        icon: Film,
        title: "Video Editing",
        description: "Professional editing for short-form Reels and YouTube long-form content.",
        gradient: "from-pink-500 to-purple-500",
        href: "/services/video-editing-short",
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
                        <span className="text-white">What Nexiler </span>
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
                                <div className="absolute inset-0 bg-linear-to-br from-white/8 to-white/2 border border-white/20 rounded-2xl group-hover:border-primary/50 transition-all duration-500" />
                                
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                {/* Content */}
                                <div className="relative p-6 sm:p-7 md:p-8 h-full flex flex-col">
                                    {/* Premium Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 12 }}
                                        transition={{ duration: 0.4 }}
                                        className={`relative inline-flex p-4 rounded-2xl bg-linear-to-br ${service.gradient} mb-5 w-fit shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <service.icon size={28} className="text-white" />
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
