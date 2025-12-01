"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* ========== FULL SCREEN GRADIENT BACKGROUND ========== */}
            {/* Base dark background */}
            <div className="absolute inset-0 bg-[#0a0a0f] -z-30" />
            
            {/* Main large gradient blob - center-right position like Flowrix - SMOOTH */}
            <div 
                className="absolute top-0 right-0 w-[100vw] h-[100vh] -z-20 animate-pulse"
                style={{
                    background: `
                        radial-gradient(ellipse 80% 70% at 60% 40%, 
                            rgba(139, 92, 246, 0.4) 0%, 
                            rgba(147, 51, 234, 0.3) 20%,
                            rgba(249, 115, 22, 0.35) 40%,
                            rgba(251, 146, 60, 0.25) 55%,
                            rgba(59, 130, 246, 0.15) 70%,
                            transparent 85%
                        )
                    `,
                    animationDuration: '6s'
                }}
            />
            
            {/* Orange/amber glow - right side - SMOOTH */}
            <div 
                className="absolute top-1/4 right-1/4 w-[700px] h-[700px] -z-10 animate-pulse"
                style={{
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(251, 146, 60, 0.3) 30%, transparent 70%)',
                    filter: 'blur(100px)',
                    animationDuration: '5s',
                    animationDelay: '1s'
                }}
            />
            
            {/* Purple/violet deep glow - center - SMOOTH */}
            <div 
                className="absolute top-1/3 left-1/3 w-[600px] h-[600px] -z-10 animate-pulse"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(91, 33, 182, 0.25) 40%, transparent 70%)',
                    filter: 'blur(120px)',
                    animationDuration: '7s',
                    animationDelay: '2s'
                }}
            />
            
            {/* Blue accent glow - bottom - SMOOTH */}
            <div 
                className="absolute bottom-0 left-1/4 w-[500px] h-[400px] -z-10 animate-pulse"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
                    filter: 'blur(100px)',
                    animationDuration: '6s',
                    animationDelay: '0.5s'
                }}
            />

            {/* Dark overlay for text readability on edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-transparent -z-5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-[#0a0a0f]/40 -z-5" />

            {/* ========== CONTENT LAYER ========== */}
            <div className="container relative z-10 min-h-screen flex items-center px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-sm text-primary backdrop-blur-sm font-medium"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span>Available For Projects</span>
                        </motion.div>

                        {/* Small Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-primary text-sm md:text-base font-medium"
                        >
                            Nexiler Helps You Turn Your Ideas Into
                            <br />
                            <span className="text-white/70">Something People Remember.</span>
                        </motion.p>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold text-white leading-[0.85] tracking-tight">
                                Nexiler
                            </h1>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Services Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative lg:pl-8"
                    >
                        {/* Top Info Text */}
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-right text-sm text-white/60 mb-6 font-medium leading-relaxed"
                        >
                            We Provide <span className="text-white">AI/UX Design</span> And
                            <br />
                            <span className="text-white">Development</span> Services As Well As
                            <br />
                            <span className="text-white">Branding</span> Services
                        </motion.p>

                        {/* Services Card */}
                        <div className="relative">
                            <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-2xl">
                                {/* Pricing Header */}
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                                    <span className="text-lg font-semibold text-white">Our Services</span>
                                    <Button size="sm" className="bg-white/10 text-white border-2 border-white/30 font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 px-5 py-2 text-sm rounded-lg">
                                        See Pricing
                                    </Button>
                                </div>

                                {/* Services List */}
                                <div className="space-y-2">
                                    {[
                                        "AI UX Design",
                                        "Development",
                                        "Website Design",
                                        "Motion Design"
                                    ].map((service, index) => (
                                        <motion.div
                                            key={service}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                                            className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/10"
                                        >
                                            <span className="text-white/90 font-medium text-sm">{service}</span>
                                            <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
