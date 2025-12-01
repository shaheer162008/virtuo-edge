"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
            {/* White Light Spots */}
            <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-40 left-40 w-[500px] h-[500px] bg-cyan/[0.1] rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Animated Background Gradients */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-primary/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass border border-primary/30 mb-10 hover:border-primary/50 transition-all"
                    >
                        <Sparkles size={20} className="text-primary animate-pulse" />
                        <span className="text-base text-white/80">Next-Gen AI Automation • Trusted by 230+ Companies</span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 md:mb-8 leading-tight px-4"
                    >
                        <span className="block text-white mb-2">Transform Your</span>
                        <span className="block text-gradient">Business with AI</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed px-4"
                    >
                        Custom AI automation solutions and traditional development services tailored to your unique needs.
                        We build intelligent systems that scale your business exponentially.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4"
                    >
                        <Link
                            href="/contact"
                            className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
                        >
                            Get Free Consultation
                            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center"
                        >
                            See Success Stories
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-20 md:mt-24 px-4"
                    >
                        {[
                            { value: "3900+", label: "Active Users" },
                            { value: "230+", label: "Trusted Companies" },
                            { value: "$230M+", label: "Transaction Volume" },
                            { value: "24/7", label: "Support" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                                className="text-center group cursor-default"
                            >
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base lg:text-lg text-white/60 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
