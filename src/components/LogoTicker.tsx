"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Zap, Shield, Cloud, Server } from "lucide-react";

const logos = [
    { name: "Acme Corp", icon: Cpu },
    { name: "Echo Valley", icon: Globe },
    { name: "Quantum", icon: Zap },
    { name: "Pulse", icon: Shield },
    { name: "Celestial", icon: Cloud },
    { name: "Apex", icon: Server },
];

export const LogoTicker = () => {
    return (
        <section className="py-20 md:py-24 border-y border-white/5 bg-white/5 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
            
            <div className="container relative z-10">
                <div className="flex items-center gap-5">
                    <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                        <motion.div
                            initial={{ translateX: "0%" }}
                            animate={{ translateX: "-50%" }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex gap-14 pr-14 flex-none"
                        >
                            {[...logos, ...logos].map((logo, index) => (
                                <div key={index} className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-all duration-300 hover:scale-110">
                                    <logo.icon className="size-8" />
                                    <span className="text-xl font-semibold">{logo.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
