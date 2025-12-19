"use client";
import { motion } from "framer-motion";
import { Bot, Code, Zap, Globe, Video, Palette, Search, Share2, Wrench, Box, Settings, Film } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Globe,
        title: "Website Development with Next.js",
        description: "Modern, fast websites built to convert. We develop professional sites using cutting-edge technologies, optimized for search engines and designed to turn visitors into customers.",
        gradient: "from-blue-500 to-cyan-500",
        href: "/services/website-development",
    },
    {
        icon: Bot,
        title: "AI Automation Setup",
        description: "Intelligent workflows that reduce manual work and lower operational costs. From lead qualification to data processing, your team gets back hours every week to focus on strategy and growth.",
        gradient: "from-purple-500 to-pink-500",
        href: "/services/ai-automation-setup",
    },
    {
        icon: Wrench,
        title: "Workflow Optimization and Integrations",
        description: "Your tools don't talk to each other. We connect your systems—CRMs, email platforms, databases—so information flows seamlessly. Less friction, more efficiency.",
        gradient: "from-orange-500 to-red-500",
        href: "/services/workflow-optimization",
    },
    {
        icon: Palette,
        title: "Brand and Growth Strategy",
        description: "A strong brand identity and consistent strategy build lasting customer relationships. We create complete brand systems and growth plans tailored to your business, not generic templates.",
        gradient: "from-green-500 to-teal-500",
        href: "/services/full-brand-creation",
    },
    {
        icon: Zap,
        title: "AI Chatbot Integration",
        description: "24/7 automated customer support and lead qualification with smart chatbots.",
        gradient: "from-cyan-500 to-blue-500",
        href: "/services/ai-chatbot-integration",
    },
    {
        icon: Video,
        title: "Motion Graphics",
        description: "High-quality animation for explainer videos, ads, and engaging content.",
        gradient: "from-green-500 to-teal-500",
        href: "/services/motion-graphics",
    },
    {
        icon: Film,
        title: "Video Editing",
        description: "Professional editing for short-form Reels and long-form YouTube content.",
        gradient: "from-pink-500 to-purple-500",
        href: "/services/video-editing-short",
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description: "Comprehensive SEO strategy to dominate search rankings and drive traffic.",
        gradient: "from-teal-500 to-green-500",
        href: "/services/seo-optimization",
    },
    {
        icon: Share2,
        title: "Social Media Ads",
        description: "Expert management of paid campaigns for maximum ROI and growth.",
        gradient: "from-indigo-500 to-purple-500",
        href: "/services/social-media-ads",
    },
    {
        icon: Palette,
        title: "Graphic Design",
        description: "Professional design for social media, ads, and all marketing materials.",
        gradient: "from-red-500 to-pink-500",
        href: "/services/graphic-design",
    },
    {
        icon: Wrench,
        title: "Website Maintenance",
        description: "Keep your site secure, fast, and updated with ongoing maintenance.",
        gradient: "from-yellow-500 to-orange-500",
        href: "/services/website-maintenance",
    },
    {
        icon: Box,
        title: "3D Modeling",
        description: "Photorealistic 3D models and renders for products and architecture.",
        gradient: "from-blue-500 to-indigo-500",
        href: "/services/3d-modeling",
    },
    {
        icon: Code,
        title: "AI Automation Maintenance",
        description: "Ongoing monitoring and optimization for your AI automation systems.",
        gradient: "from-green-500 to-cyan-500",
        href: "/services/ai-automation-maintenance",
    },
];

export const Services = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
                            <span className="text-white">What Nexiler </span>
                            <span className="text-gradient">Delivers</span>
                        </h2>
                        <p className="text-lg text-white/60">
                            AI automation, web development, workflow optimization, and growth strategies that deliver measurable results. Nexiler combines expert web development with intelligent systems designed for real-world business challenges.
                        </p>
                        <p className="text-lg text-white/60">
                            Comprehensive AI automation, web development, branding, and digital marketing solutions designed to accelerate your business growth.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/50">
                            <span className="flex items-center gap-2">
                                <span className="size-2 bg-primary rounded-full animate-pulse" />
                                98% Client Satisfaction
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="size-2 bg-primary rounded-full animate-pulse" />
                                50+ Projects Delivered
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
                    {services.slice(0, 3).map((service, index) => (
                        <Link key={index} href={service.href}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative p-5 sm:p-6 md:p-7 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer h-full"
                            >
                                {/* Card Spotlight */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] via-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className={`relative inline-flex p-3 rounded-lg bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/50`}>
                                    <service.icon size={24} className="text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Learn More Arrow */}
                                <div className="mt-4 flex items-center gap-2 text-primary text-base sm:text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Learn More</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* View All Services Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link href="/services">
                        <button className="px-8 py-4 rounded-lg bg-primary hover:bg-primary-600 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105">
                            View All Services
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
