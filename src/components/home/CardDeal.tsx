"use client";
import { motion } from "framer-motion";

export const CardDeal = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-cyan-bright/[0.1] rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                            <span className="text-white">Find a better solution</span>
                            <br />
                            <span className="text-gradient">in few easy steps.</span>
                        </h2>
                        <p className="text-xl text-white/60 mb-12 leading-relaxed">
                            Get custom AI automation solutions tailored to your specific needs. Our streamlined process makes it easy to transform your business.
                        </p>
                        <button className="px-10 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300">
                            See Pricing
                        </button>
                    </motion.div>

                    {/* Right: Card Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Card Mockup */}
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden glass border border-white/10 p-8">
                                <div className="aspect-[16/10] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 flex flex-col justify-between">
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-white/80">NEXILER</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/40 mb-2">Card Number</div>
                                        <div className="text-2xl font-mono text-white tracking-wider mb-6">
                                            4562  1122  4594  7852
                                        </div>
                                        <div className="flex justify-between">
                                            <div>
                                                <div className="text-xs text-white/40 mb-1">CARD HOLDER</div>
                                                <div className="text-base font-semibold text-white">Your Name</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xs text-white/40 mb-1">EXPIRES</div>
                                                <div className="text-base font-semibold text-white">12/25</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-bright/20 rounded-full blur-3xl -z-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
