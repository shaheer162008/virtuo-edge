"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* White light spot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto p-8 md:p-12 lg:p-16 rounded-3xl glass border border-primary/30 text-center overflow-hidden group hover:border-primary/50 transition-all duration-500"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-bright/10 to-primary/10 group-hover:from-primary/20 group-hover:via-cyan-bright/20 group-hover:to-primary/20 transition-all duration-500" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform duration-500" />

                    <div className="relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        >
                            <span className="text-white">Ready to </span>
                            <span className="text-gradient">Transform?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto"
                        >
                            Let&apos;s discuss how we can revolutionize your business with AI automation and custom development solutions.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-sm text-primary/80 mb-10 flex items-center justify-center gap-2"
                        >
                            <span className="size-2 bg-primary rounded-full animate-pulse" />
                            Free consultation • Fast response within 24 hours
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Link
                                href="/contact"
                                className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                            >
                                Get Free Consultation
                                <ArrowRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
