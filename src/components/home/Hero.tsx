"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-[100vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10 px-4">
            {/* Video Background */}
            <div className="absolute inset-0 -z-20 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

            {/* Animated gradient accent */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 100% 70% at 50% 20%, rgba(51, 187, 207, 0.08), transparent)',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="max-w-4xl mx-auto">
                    {/* Top Badge - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="flex justify-center mb-6 sm:mb-8"
                    >
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full glass border border-primary/30 hover:border-primary/50 transition-all duration-500">
                            <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-primary animate-pulse" />
                            <span className="text-xs sm:text-sm md:text-base text-white/80 font-medium">Trusted by 50+ clients</span>
                        </div>
                    </motion.div>

                    {/* Centered Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                        className="text-center"
                    >
                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 leading-[1.05]"
                        >
                            <span className="text-white">Make Your Business Work </span>
                            <span className="text-gradient block whitespace-wrap">Smarter with Nexiler</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="text-base sm:text-lg md:text-xl text-white/70 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto"
                        >
                            We build websites, automate workflows, and help brands grow organically through AI driven systems designed for real results.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
                        >
                            <Link
                                href="/consultation"
                                className="group px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center gap-2"
                            >
                                Get Free Consultation
                                <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                            <Link
                                href="/our-work"
                                className="px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center"
                            >
                                View Our Work
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="flex gap-3 sm:gap-4 md:gap-6 justify-center flex-wrap"
                        >
                            {[
                                { value: "50+", label: "Clients" },
                                { value: "91%", label: "Positive Feedback" },
                                { value: "50+", label: "Projects Delivered" },
                                { value: "24/7", label: "Support" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient whitespace-nowrap mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm md:text-base text-white/70 whitespace-nowrap">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
