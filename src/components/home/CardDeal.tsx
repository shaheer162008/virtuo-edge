"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Code, Palette, Video, Bot, Zap } from "lucide-react";

const services = [
    { icon: Globe, label: "Web Development", color: "text-blue-400" },
    { icon: Bot, label: "AI Automation", color: "text-purple-400" },
    { icon: Video, label: "Video Production", color: "text-pink-400" },
    { icon: Palette, label: "Brand Design", color: "text-orange-400" },
    { icon: Code, label: "Custom Software", color: "text-cyan-400" },
    { icon: Zap, label: "API Integration", color: "text-green-400" },
];

export const CardDeal = () => {
    return (
        <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 md:mb-8 leading-tight">
                            <span className="text-white">One team. Complete solutions.</span>
                            <br />
                            <span className="text-gradient">No juggling agencies.</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                            Websites, automation, branding, video, integrations Nexiler handles it all. Single point of contact, cohesive strategy, better results.
                        </p>
                        <Link href="/consultation">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="px-8 sm:px-10 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-base sm:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-500"
                            >
                                Get Free Consultation
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right: Services Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="relative"
                    >
                        {/* Services Grid Mockup */}
                        <div className="relative">
                            <div className="rounded-2xl sm:rounded-3xl overflow-hidden glass border border-white/10 p-5 sm:p-6 md:p-8">
                                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                                <span className="text-primary font-bold text-sm">N</span>
                                            </div>
                                            <span className="text-white font-semibold">Nexiler Services</span>
                                        </div>
                                        <div className="text-base sm:text-lg text-white/40">15+ Solutions</div>
                                    </div>
                                    {/* Services Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {services.map((service, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                                className="flex items-center gap-2 bg-white/5 rounded-lg p-3 border border-white/10 hover:border-primary/30 transition-all duration-300"
                                            >
                                                <service.icon className={`w-5 h-5 ${service.color}`} />
                                                <span className="text-base sm:text-lg text-white/70">{service.label}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    {/* Footer */}
                                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                                        <span className="text-base sm:text-lg text-white/40">Trusted by 230+ companies</span>
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/40 to-purple-500/40 border-2 border-dark" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-cyan-bright/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
