"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Cone-shaped Spotlight from Badge */}
            <div className="absolute inset-0 -z-10">
                {/* Main cone spreading from top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[120vh]">
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 150px 100px at 50% 0%, rgba(255,255,255,0.2), transparent 40%)',
                            clipPath: 'polygon(45% 0%, 55% 0%, 85% 100%, 15% 100%)',
                            filter: 'blur(40px)',
                        }}
                    />
                </div>
                {/* Wider cone layer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[120vh]">
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 200px 120px at 50% 0%, rgba(255,255,255,0.12), transparent 45%)',
                            clipPath: 'polygon(42% 0%, 58% 0%, 90% 100%, 10% 100%)',
                            filter: 'blur(60px)',
                        }}
                    />
                </div>
                {/* Softest layer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[120vh]">
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(ellipse 300px 150px at 50% 0%, rgba(255,255,255,0.08), transparent 50%)',
                            clipPath: 'polygon(38% 0%, 62% 0%, 95% 100%, 5% 100%)',
                            filter: 'blur(80px)',
                        }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    {/* Top Badge - Centered */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        className="flex justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass border border-primary/30 hover:border-primary/50 transition-all duration-500">
                            <Sparkles size={18} className="text-primary animate-pulse" />
                            <span className="text-sm md:text-base text-white/80 font-medium">Next-Gen AI Automation • Trusted by 230+ Companies</span>
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
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                            >
                                <span className="block text-white mb-2">Transform Your</span>
                                <span className="block text-gradient">Business with AI</span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                className="text-base sm:text-lg md:text-xl text-white/70 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                Custom AI automation solutions and traditional development services tailored to your unique needs.
                                We build intelligent systems that scale your business exponentially.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
                                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12"
                            >
                                <Link
                                    href="/contact"
                                    className="group w-full sm:w-auto px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center gap-3"
                                >
                                    Get Free Consultation
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500 inline-flex items-center justify-center"
                                >
                                    See Success Stories
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
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
                                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-500">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm md:text-base text-white/60 font-medium">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Right Image - 1536x1536 (1.5x of 1024) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="relative group flex items-center justify-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                                className="relative"
                                style={{ width: '1536px', height: '1536px', maxWidth: '100%', maxHeight: '70vh' }}
                            >
                                <Image
                                    src="/hero.png"
                                    alt="AI Business Transformation"
                                    width={1536}
                                    height={1536}
                                    className="object-contain transition-transform duration-700"
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
