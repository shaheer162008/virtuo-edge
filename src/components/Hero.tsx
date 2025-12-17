"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden pt-20 md:pt-24">
            {/* ========== OPTIMIZED GRADIENT BACKGROUND ========== */}
            <div className="absolute inset-0 bg-[#00040F] -z-30" />
            
            {/* Simplified gradient - Better performance */}
            <div 
                className="absolute top-0 right-0 w-full h-full -z-20 opacity-60"
                style={{
                    background: `radial-gradient(ellipse 70% 60% at 50% 30%, rgba(51, 187, 207, 0.15) 0%, transparent 70%)`,
                }}
            />

            {/* ========== CONTENT LAYER ========== */}
            <div className="container relative z-10 min-h-[calc(100vh-80px)] flex items-center px-4 py-12 md:py-16">
                <div className="w-full max-w-6xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-xs sm:text-sm text-primary backdrop-blur-sm font-medium mb-6"
                    >
                        <Sparkles size={16} className="text-primary" />
                        <span>Next Gen AI Automation • Trusted by 230+ Companies</span>
                    </motion.div>

                    {/* Main Heading - Responsive */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight mb-4">
                            Transform Your
                            <br />
                            <span className="text-gradient">Business with AI</span>
                        </h1>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        Custom AI automation solutions and traditional development services tailored to your unique needs. We build intelligent systems that scale your business exponentially.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <Link href="/contact">
                            <Button size="lg" className="w-full sm:w-auto min-w-[200px]">
                                Get Free Consultation
                                <ArrowRight className="ml-2" size={20} />
                            </Button>
                        </Link>
                        <Link href="/our-work">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px]">
                                See Success Stories
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto"
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
                                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-white/60">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
