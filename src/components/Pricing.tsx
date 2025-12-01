"use client";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Starter",
        price: "$999",
        period: "/project",
        description: "Perfect for small businesses starting their digital transformation journey",
        features: [
            "1 Custom Automation Workflow",
            "Basic AI Integration",
            "Up to 3 Revisions",
            "30 Days Support",
            "Documentation Included",
            "Email Support",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$2,999",
        period: "/month",
        description: "Ideal for growing businesses ready to scale with AI automation",
        features: [
            "5 Custom Automation Workflows",
            "Advanced AI Integration",
            "Unlimited Revisions",
            "90 Days Priority Support",
            "Full Documentation & Training",
            "Dedicated Account Manager",
            "Custom API Integration",
            "Performance Analytics",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Complete solutions for large organizations with complex needs",
        features: [
            "Unlimited Automation Workflows",
            "Enterprise AI Solutions",
            "White-Glove Service",
            "Lifetime Support & Updates",
            "On-Site Training Available",
            "24/7 Priority Support",
            "Custom Integrations",
            "Dedicated Development Team",
            "SLA Guarantee",
        ],
        popular: false,
    },
];

export const Pricing = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Sparkles size={18} className="text-primary" />
                            <span className="text-sm text-primary font-semibold">Transparent Pricing</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-white">Choose Your </span>
                            <span className="text-gradient">Growth Plan</span>
                        </h2>
                        <p className="text-lg text-white/70">
                            Start with a free consultation to discuss your needs and find the perfect solution
                        </p>
                    </motion.div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 h-full flex flex-col ${
                                plan.popular
                                    ? "bg-gradient-to-b from-primary/20 via-primary/10 to-transparent border-2 border-primary/50 shadow-xl shadow-primary/20 scale-105"
                                    : "bg-white/5 border border-white/10 hover:border-primary/30"
                            }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-cyan-bright text-dark text-sm font-bold flex items-center gap-1 shadow-lg">
                                        <Zap size={14} />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="flex-1">
                                {/* Plan Name */}
                                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                
                                {/* Price */}
                                <div className="mb-4">
                                    <span className="text-5xl font-bold text-gradient">{plan.price}</span>
                                    {plan.period && <span className="text-white/50 text-lg ml-2">{plan.period}</span>}
                                </div>

                                {/* Description */}
                                <p className="text-white/60 mb-6 leading-relaxed">{plan.description}</p>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                                                plan.popular ? "bg-primary/20" : "bg-white/10"
                                            }`}>
                                                <Check size={14} className="text-primary" />
                                            </div>
                                            <span className="text-white/80 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <Link
                                href="/contact"
                                className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                                    plan.popular
                                        ? "bg-gradient-to-r from-primary to-cyan-bright text-dark hover:opacity-90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105"
                                        : "bg-white/10 text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105"
                                }`}
                            >
                                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Free Consultation CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-white/70 mb-6">
                        Not sure which plan is right for you?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-cyan-bright rounded-xl font-bold text-dark hover:opacity-90 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <Sparkles size={20} />
                        Get Free Consultation
                    </Link>
                    <p className="text-sm text-white/50 mt-4">
                        💡 Free 30-minute consultation to help grow your business
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
