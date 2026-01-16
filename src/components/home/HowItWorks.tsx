"use client";
import { motion } from "framer-motion";
import { ClipboardCheck, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Discovery",
        description: "We listen first. We understand your business, goals, and the problems holding you back.",
    },
    {
        icon: ClipboardCheck,
        title: "Strategy and Planning",
        description: "We map out a clear path forward with realistic timelines, costs, and expected outcomes.",
    },
    {
        icon: Code2,
        title: "Build and Implementation",
        description: "We develop your solution websites, automation system, or growth strategy and make sure everything works together.",
    },
    {
        icon: Rocket,
        title: "Launch and Optimize",
        description: "We don't disappear after launch. We monitor performance, gather data, and optimize to keep delivering results.",
    },
];

export const HowItWorks = () => {
    return (
        <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-bright/10 rounded-full blur-3xl opacity-20 pointer-events-none" />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
                            <span className="text-white">The Virtuo Edge </span>
                            <span className="text-gradient">Process</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                            Clear steps from discovery to delivery. We work with you every step of the way to ensure your success.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="max-w-6xl mx-auto relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
                                whileHover={{ y: -8 }}
                                className="relative group"
                            >
                                {/* Step Number - Enhanced */}
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary to-cyan-bright flex items-center justify-center text-dark font-bold text-lg sm:text-xl z-20 shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110">
                                    {index + 1}
                                </div>

                                {/* Card - Enhanced */}
                                <div className="pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10 px-6 sm:px-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/15 hover:border-primary/40 transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
                                    {/* Card Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    
                                    <div className="relative z-10 flex flex-col items-center text-center flex-1">
                                        <div className="mb-6">
                                            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-bright/20 mb-6 inline-flex group-hover:scale-125 transition-transform duration-500 shadow-lg shadow-primary/20 group-hover:shadow-primary/40">
                                                <step.icon size={32} className="text-primary sm:w-8 sm:h-8" />
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-base sm:text-lg text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
