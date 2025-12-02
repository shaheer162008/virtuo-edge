"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
            {/* Elegant Ambient Lighting */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                {/* Top Center Glow - Subtle */}
                <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[1000px] h-[500px] sm:h-[600px] md:h-[800px] opacity-40"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                
                {/* Left Side Accent */}
                <div 
                    className="absolute top-1/4 left-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle at left, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
                        filter: 'blur(100px)',
                    }}
                />
                
                {/* Right Side Accent */}
                <div 
                    className="absolute top-1/4 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle at right, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
                        filter: 'blur(100px)',
                    }}
                />
                
                {/* Bottom Soft Glow */}
                <div 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1000px] md:w-[1200px] h-[300px] sm:h-[400px] md:h-[500px] opacity-20"
                    style={{
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                        filter: 'blur(120px)',
                    }}
                />
                
                {/* Subtle Gradient Overlay */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 50%, rgba(255, 255, 255, 0.02) 100%)',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Top Badge - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="flex justify-center mb-6 sm:mb-8"
                    >
                        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full glass border border-primary/30 hover:border-primary/50 transition-all duration-500">
                            <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] text-primary animate-pulse" />
                            <span className="text-xs sm:text-sm md:text-base text-white/80 font-medium">Next-Gen AI Automation • Trusted by 230+ Companies</span>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                            className="text-center lg:text-left"
                        >
                            {/* Main Headline */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
                            >
                                <span className="block text-white mb-2">Transform Your</span>
                                <span className="block text-gradient">Business with AI</span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                Custom AI automation solutions and traditional development services tailored to your unique needs.
                                We build intelligent systems that scale your business exponentially.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mb-8 sm:mb-12"
                            >
                                <Link
                                    href="/contact"
                                    className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center gap-2 sm:gap-3"
                                >
                                    Get Free Consultation
                                    <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center"
                                >
                                    See Success Stories
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
                                        transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                                        className="text-center lg:text-left group cursor-default"
                                    >
                                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-500">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm md:text-base text-white/60 font-medium">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Image - Responsive */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="relative group flex items-center justify-center mt-8 lg:mt-0"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                                className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-none aspect-square"
                            >
                                <Image
                                    src="/hero.png"
                                    alt="AI Business Transformation"
                                    width={1536}
                                    height={1536}
                                    className="object-contain transition-transform duration-700 w-full h-full"
                                    priority
                                />
                            </motion.div>
                            {/* Subtle Glow Effect on Hover */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-cyan-400/10 blur-3xl -z-10 rounded-3xl pointer-events-none"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
