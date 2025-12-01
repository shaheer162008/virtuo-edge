"use client";
import { motion } from "framer-motion";
import { Shield, Award, Users, Zap, Clock, Globe } from "lucide-react";

const trustBadges = [
    {
        icon: Shield,
        title: "Secure & Compliant",
        description: "Enterprise-grade security",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Industry recognized",
    },
    {
        icon: Users,
        title: "230+ Clients",
        description: "Trusted worldwide",
    },
    {
        icon: Zap,
        title: "Fast Delivery",
        description: "Quick turnaround",
    },
    {
        icon: Clock,
        title: "24/7 Support",
        description: "Always available",
    },
    {
        icon: Globe,
        title: "Global Reach",
        description: "Worldwide service",
    },
];

export const TrustBadges = () => {
    return (
        <section className="py-16 md:py-20 bg-dark-secondary/30 relative overflow-hidden">
            {/* Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {trustBadges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-3 group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-300 group-hover:scale-110">
                                <badge.icon size={28} className="text-primary" />
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-1">
                                {badge.title}
                            </h3>
                            <p className="text-xs text-white/50">
                                {badge.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
