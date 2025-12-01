"use client";
import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";

const guarantees = [
    "100% Money-Back Guarantee",
    "Free Consultation & Quote",
    "Unlimited Revisions",
    "Lifetime Support",
];

export const MoneyBackGuarantee = () => {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="p-8 md:p-10 rounded-2xl glass border border-primary/30 relative overflow-hidden group">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-cyan-bright/10 to-primary/10 group-hover:from-primary/20 group-hover:via-cyan-bright/20 group-hover:to-primary/20 transition-all duration-500" />
                        
                        <div className="relative z-10 text-center">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <Star size={24} className="text-primary fill-primary" />
                                <Star size={24} className="text-primary fill-primary" />
                                <Star size={24} className="text-primary fill-primary" />
                                <Star size={24} className="text-primary fill-primary" />
                                <Star size={24} className="text-primary fill-primary" />
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Our 30-Day Money-Back Guarantee
                            </h3>
                            
                            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                                We&apos;re so confident in our services that if you&apos;re not completely satisfied within 30 days, we&apos;ll refund your investment. No questions asked.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {guarantees.map((guarantee, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-sm text-white/80 bg-white/5 rounded-lg px-4 py-3"
                                    >
                                        <CheckCircle size={18} className="text-primary shrink-0" />
                                        <span>{guarantee}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
