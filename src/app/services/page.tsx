"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/home/CTA";
import { Bot, Code, Box, Video, Palette, Search, Share2, Wrench, Globe, Zap, Settings, Film, Plug, Layers } from "lucide-react";
import Link from "next/link";
import { servicesContent } from "@/lib/siteContent";

const serviceIcons: Record<string, React.ElementType> = {
    "website-development": Globe,
    "ai-automation-setup": Bot,
    "ai-chatbot-integration": Zap,
    "full-brand-creation": Settings,
    "motion-graphics": Video,
    "video-editing-short": Film,
    "video-editing-long": Film,
    "ai-automation-maintenance": Wrench,
    "seo-optimization": Search,
    "social-media-ads": Share2,
    "graphic-design": Palette,
    "website-maintenance": Wrench,
    "3d-modeling": Box,
    "api-integration": Plug,
    "custom-software": Layers,
};

const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-cyan-500 to-blue-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-teal-500",
    "from-pink-500 to-purple-500",
    "from-teal-500 to-green-500",
    "from-indigo-500 to-purple-500",
    "from-red-500 to-pink-500",
    "from-yellow-500 to-orange-500",
    "from-blue-500 to-indigo-500",
    "from-green-500 to-cyan-500",
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section - Clean & Simple */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Services</span>
                            </h1>
                            <p className="text-lg text-white/60">
                                {servicesContent.hero.subtitle}
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

                    {/* Services Grid - Same style as homepage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
                        {servicesContent.services.map((service, index) => {
                            const Icon = serviceIcons[service.slug] || Code;
                            const gradient = gradients[index % gradients.length];
                            const totalServices = servicesContent.services.length;
                            const isLastItem = index === totalServices - 1;
                            const isAloneInRow = totalServices % 3 === 1 && isLastItem;
                            
                            return (
                                <Link 
                                    key={service.slug} 
                                    href={`/services/${service.slug}`}
                                    className={isAloneInRow ? "lg:col-start-2" : ""}
                                >
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
                                        <div className={`relative inline-flex p-3 rounded-lg bg-gradient-to-br ${gradient} mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-primary/50`}>
                                            <Icon size={24} className="text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-3">
                                            {service.description}
                                        </p>

                                        {/* Pricing */}
                                        <p className="text-primary text-base sm:text-lg font-medium mb-4">
                                            {service.pricingRange || service.pricing}
                                        </p>

                                        {/* Learn More Arrow */}
                                        <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section - Use existing component */}
            <CTA />

            <Newsletter />
            <Footer />
        </main>
    );
}
