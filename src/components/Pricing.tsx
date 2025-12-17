"use client";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Starter",
        price: "$1,500",
        priceEnd: "$3,000",
        period: "",
        description: "Perfect for startups and small businesses getting started with digital presence",
        features: [
            "Custom Website Development (5-8 pages)",
            "Responsive Mobile & Tablet Design",
            "Basic AI Chatbot Integration",
            "SEO Foundation & Optimization",
            "Contact Forms & Email Setup",
            "Google Analytics Integration",
            "1 Simple Workflow Automation",
            "Social Media Graphics (15 designs)",
            "30 Days Post-Launch Support",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "$4,000",
        priceEnd: "$8,000",
        period: "",
        description: "Comprehensive solution for growing businesses ready to scale",
        features: [
            "Advanced Web Application with CMS",
            "AI Workflow Automation (3-5 processes)",
            "Intelligent AI Chatbot (Lead Gen + Support)",
            "Complete Brand Identity Design",
            "Advanced SEO & Content Strategy",
            "API Integrations (CRM, Marketing Tools)",
            "Custom Graphic Design (25+ assets)",
            "Video Editing & Motion Graphics",
            "Social Media Management Setup",
            "60 Days Priority Support & Training",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        priceEnd: "",
        period: "Pricing",
        description: "Full-scale digital transformation for established businesses",
        features: [
            "Custom SaaS/Web Application Development",
            "Advanced AI Automation (10+ workflows)",
            "Multi-Channel AI Assistant (Web, WhatsApp, Slack)",
            "Complete Branding & Design System",
            "Complex API & System Integrations",
            "Data Analytics & Reporting Dashboard",
            "Professional Video Production & 3D Graphics",
            "Process Optimization Consulting",
            "Dedicated Development Team",
            "90 Days Premium Support & Maintenance",
        ],
        popular: false,
    },
];

export const Pricing = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
            {/* Simplified Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 opacity-50" />
            
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                            <Sparkles size={16} className="text-primary" />
                            <span className="text-xs sm:text-sm text-primary font-semibold">Transparent Pricing</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            <span className="text-white">Choose Your </span>
                            <span className="text-gradient">Growth Plan</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/70 px-4">
                            Start with a free consultation to discuss your needs and find the perfect solution
                        </p>
                    </motion.div>
                </div>

                {/* Pricing Cards - Mobile First Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-6 max-w-6xl mx-auto items-stretch">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative mt-4 rounded-2xl p-5 sm:p-6 lg:p-7 backdrop-blur-sm transition-all duration-300 h-full flex flex-col ${
                                plan.popular
                                    ? "bg-gradient-to-b from-primary/20 via-primary/10 to-transparent border-2 border-primary/50 shadow-xl shadow-primary/20 lg:scale-[1.03] z-10"
                                    : "bg-white/5 border border-white/10 hover:border-primary/30"
                            }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-4 sm:px-5 py-1 sm:py-1.5 bg-[#00F6FF] rounded-full text-black text-dark font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-lg">
                                    <Sparkles size={14} />
                                    Most Popular
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-5 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-3 sm:mb-4 flex-wrap">
                                    <span className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gradient">
                                        {plan.price}
                                    </span>
                                    {plan.priceEnd && (
                                        <>
                                            <span className="text-xl sm:text-2xl lg:text-2xl font-bold text-white/50 mx-1">–</span>
                                            <span className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gradient">
                                                {plan.priceEnd}
                                            </span>
                                        </>
                                    )}
                                    {plan.period && (
                                        <span className="text-lg sm:text-xl font-medium text-white/50 ml-1">{plan.period}</span>
                                    )}
                                </div>
                                <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                                            plan.popular ? "bg-primary/20" : "bg-white/10"
                                        }`}>
                                            <Check size={14} className={plan.popular ? "text-primary" : "text-white"} />
                                        </div>
                                        <span className="text-sm sm:text-base text-white/80 leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href="/consultation"
                                className={`block w-full text-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                                    plan.popular
                                        ? "bg-primary text-dark border-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                                        : "bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50"
                                }`}
                            >
                                Choose Plan
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-10 sm:mt-12 md:mt-16"
                >
                    <p className="text-sm sm:text-base text-white/60 mb-4">
                        Not sure which plan is right for you?
                    </p>
                    <Link
                        href="/consultation"
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/10 text-white border-2 border-white/30 font-bold text-sm sm:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                    >
                        Schedule Free Consultation
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
