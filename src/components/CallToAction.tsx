"use client";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] lg:w-[700px] lg:h-[700px] bg-primary/[0.08] rounded-full blur-3xl pointer-events-none" />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 -z-10" />

            <div className="container text-center max-w-3xl relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
                >
                    Ready to build the future?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/60 mb-10"
                >
                    Join thousands of developers and startups who are already using our platform to ship faster.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg group">
                        Start Building Now
                        <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};
