"use client";
import { motion } from "framer-motion";
import { Apple, PlaySquare } from "lucide-react";

export const Billing = () => {
    return (
        <section className="py-32 bg-dark-secondary/50 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/[0.12] rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual/Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Billing Interface Mockup */}
                        <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-8">
                            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                                <div className="text-8xl font-bold text-white/10">$</div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                        </div>
                        {/* Floating Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            <span className="text-white">Easily control your</span>
                            <br />
                            <span className="text-gradient">billing & invoicing.</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-12 leading-relaxed">
                            Elite business intelligence with automated reporting, real-time analytics, and customizable dashboards that put you in complete control.
                        </p>
                        <div className="flex gap-6">
                            <button className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all">
                                <Apple size={28} className="text-white" />
                                <div className="text-left">
                                    <div className="text-xs text-white/40">GET IT ON</div>
                                    <div className="text-base font-semibold text-white">App Store</div>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 px-6 py-3 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all">
                                <PlaySquare size={28} className="text-white" />
                                <div className="text-left">
                                    <div className="text-xs text-white/40">GET IT ON</div>
                                    <div className="text-base font-semibold text-white">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
