"use client";
import { motion } from "framer-motion";
import { Bot, Workflow, BarChart3, Cpu } from "lucide-react";
import Link from "next/link";

const automationFeatures = [
    { icon: Workflow, label: "Auto Workflows" },
    { icon: BarChart3, label: "Live Data" },
    { icon: Cpu, label: "Smart Processing" },
];

export const Billing = () => {
    return (
        <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                    {/* Left: Visual/Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="relative"
                    >
                        {/* Automation Dashboard Mockup */}
                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden glass border border-white/10 p-5 sm:p-6 md:p-8">
                            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl sm:rounded-2xl p-6 flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-2">
                                        <Bot className="w-6 h-6 text-primary" />
                                        <span className="text-white font-semibold">Virtuo Edge AI</span>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                                    </div>
                                </div>
                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                        <div className="text-2xl font-bold text-primary">87%</div>
                                        <div className="text-sm sm:text-base text-white/50">Time Saved</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                                        <div className="text-2xl font-bold text-green-400">24/7</div>
                                        <div className="text-sm sm:text-base text-white/50">Uptime</div>
                                    </div>
                                </div>
                                {/* Workflow Items */}
                                <div className="flex-1 space-y-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                                <Workflow className="w-4 h-4 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-2 bg-white/20 rounded w-3/4 mb-1.5" />
                                                <div className="h-1.5 bg-white/10 rounded w-1/2" />
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Floating Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-primary/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10" />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
                            <span className="text-white">Automate the tedious work.</span>
                            <br />
                            <span className="text-gradient">Get time back.</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                            Workflow automation with AI removes repetitive tasks from your team's plate. Process data, qualify leads, send notifications all without manual intervention. Hours saved every week.
                        </p>
                        <div className="flex flex-row gap-3 sm:gap-4">
                            {automationFeatures.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all duration-500"
                                >
                                    <feature.icon size={18} className="text-primary sm:w-5 sm:h-5" />
                                    <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{feature.label}</span>
                                </motion.div>
                            ))}
                        </div>
                        <Link href="/services" className="inline-block mt-8">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="px-8 sm:px-10 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-500"
                            >
                                Explore Automation Services
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
