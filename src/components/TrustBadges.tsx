"use client";
import { motion } from "framer-motion";
import { Shield, Award, Users, Zap, Clock, Globe } from "lucide-react";

const trustBadges = [
    {
        icon: Shield,
        title: "Secure and Compliant",
        description: "Enterprise grade security",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Industry recognized",
    },
    {
        icon: Users,
        title: "50+ Clients",
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
    // Duplicate badges for seamless infinite scroll
    const duplicatedBadges = [...trustBadges, ...trustBadges];
    
    return (
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
            {/* Section Title */}
            <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-base sm:text-lg text-primary font-semibold uppercase tracking-wider mb-2">Why Choose Virtuo Edge</h2>
                    <p className="text-white/60 text-base sm:text-lg max-w-lg mx-auto">Trusted by 50+ businesses worldwide for reliable AI automation solutions</p>
                </motion.div>
            </div>
            
            {/* Marquee Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#00040F] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#00040F] to-transparent z-10 pointer-events-none" />
                
                {/* Animated Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex"
                >
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear",
                            },
                        }}
                        className="flex gap-6 sm:gap-8 md:gap-10"
                    >
                        {duplicatedBadges.map((badge, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group cursor-default"
                            >
                                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                                    <badge.icon size={24} className="text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-base sm:text-lg font-semibold text-white whitespace-nowrap">
                                        {badge.title}
                                    </h3>
                                    <p className="text-base sm:text-lg text-white/50 whitespace-nowrap">
                                        {badge.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
