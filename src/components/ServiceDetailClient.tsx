"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Bot, Code, Box, Video, Palette, Search, Share2, Wrench, Globe, Zap, Settings, Film, Plug, Layers, ArrowRight, CheckCircle2, TrendingUp, Sparkles, DollarSign } from "lucide-react";
import Link from "next/link";

interface ServiceData {
    title: string;
    slug: string;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
    pricing?: string;
    pricingRange?: string;
    pricingDetails?: string;
}

const serviceIcons: Record<string, React.ElementType> = {
    "website-development": Globe,
    "ai-automation-setup": Bot,
    "ai-chatbot-integration": Zap,
    "full-brand-creation": Settings,
    "motion-graphics": Video,
    "video-editing-short": Film,
    "video-editing-long": Film,
    "ai-automation-maintenance": Wrench,
    "seo-optimization": Search,
    "social-media-ads": Share2,
    "graphic-design": Palette,
    "website-maintenance": Wrench,
    "3d-modeling": Box,
    "api-integration": Plug,
    "custom-software": Layers,
};

const gradients: Record<string, string> = {
    "website-development": "from-blue-500 to-cyan-500",
    "ai-automation-setup": "from-purple-500 to-pink-500",
    "ai-chatbot-integration": "from-cyan-500 to-blue-500",
    "full-brand-creation": "from-orange-500 to-red-500",
    "motion-graphics": "from-green-500 to-teal-500",
    "video-editing-short": "from-pink-500 to-purple-500",
    "video-editing-long": "from-pink-500 to-purple-500",
    "ai-automation-maintenance": "from-green-500 to-cyan-500",
    "seo-optimization": "from-teal-500 to-green-500",
    "social-media-ads": "from-indigo-500 to-purple-500",
    "graphic-design": "from-red-500 to-pink-500",
    "website-maintenance": "from-yellow-500 to-orange-500",
    "3d-modeling": "from-blue-500 to-indigo-500",
    "api-integration": "from-emerald-500 to-teal-500",
    "custom-software": "from-violet-500 to-purple-500",
};

export function ServiceDetailClient({ service }: { service: ServiceData }) {
    const Icon = serviceIcons[service.slug] || Code;
    const gradient = gradients[service.slug] || "from-primary to-cyan-500";

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
                
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-5xl mx-auto"
                    >

                        <div className="flex justify-center mb-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className={`p-4 sm:p-6 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg w-fit`}
                            >
                                <Icon size={56} className="text-white" />
                            </motion.div>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            <span className="text-white">{service.title}</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed mb-8">
                            {service.longDescription}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href="/consultation"
                                className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-base sm:text-lg"
                            >
                                <span>Book Your Free Consultation</span>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold transition-all duration-300 hover:bg-white/20 hover:border-white/50 text-base sm:text-lg"
                            >
                                <span>Get in Touch</span>
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose This Service */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                                <span className="text-white">Why Choose </span>
                                <span className="text-gradient">Our {service.title}</span>
                            </h2>
                            
                            <p className="text-center text-white/70 text-base sm:text-lg md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
                                We are not just a service provider. We are your strategic partner committed to understanding your business deeply and delivering solutions that create lasting value and real competitive advantage. Our approach focuses on quality over quantity, ensuring every engagement is meaningful and results-driven.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
                                            <TrendingUp size={24} className="text-white" />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">Proven Results</h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                                        Every project is backed by measurable outcomes and verifiable case studies. We track KPIs, analyze performance metrics, and continuously optimize to ensure your investment delivers maximum ROI. Our proven track record speaks for itself with countless successful implementations across industries.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <Sparkles size={18} className="text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">Expert Team</h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                                        Our specialists have years of hands on experience and genuine passion. They stay at the forefront of innovation and bring strategic insight to every challenge for exceptional results.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <Code size={18} className="text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">Tailored Solutions</h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                                        Every business is unique. We thoroughly understand your requirements and design solutions built specifically for your success with no template compromises.
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-6 sm:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <CheckCircle2 size={18} className="text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-white">Ongoing Partnership</h3>
                                    </div>
                                    <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                                        We are not a one time vendor. We become your long term partner providing continuous support, strategic guidance, and optimizations to ensure your success.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What You Get - Content Based */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                                <span className="text-white">What You </span>
                                <span className="text-gradient">Get</span>
                            </h2>

                            <p className="text-center text-white/70 text-base sm:text-lg md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
                                We deliver comprehensive solutions tailored to your business needs, with expert guidance at every step.
                            </p>

                            <div className="space-y-6 sm:space-y-8">
                                {/* Core Deliverables */}
                                <motion.section
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <CheckCircle2 size={18} className="text-white" />
                                        </div>
                                        <span>Core Deliverables</span>
                                    </h3>
                                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                        Your project includes everything needed for success. We handle the complete implementation with attention to quality and detail. Each deliverable is tested, optimized, and ready to perform. Our team ensures that every element meets industry standards and serves your business goals effectively.
                                    </p>
                                    <div className="mt-4 ml-11 space-y-2">
                                        {service.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-primary font-bold mt-0.5">•</span>
                                                <span className="text-white/75 text-base">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>

                                {/* Business Benefits */}
                                <motion.section
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <TrendingUp size={18} className="text-white" />
                                        </div>
                                        <span>Business Benefits</span>
                                    </h3>
                                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                        Beyond the project itself, you gain tangible business advantages that drive growth and efficiency. These benefits compound over time as your solution scales with your business. We focus on outcomes that matter to your bottom line and competitive position in the market.
                                    </p>
                                    <div className="mt-4 ml-11 space-y-2">
                                        {service.benefits.map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="text-primary font-bold mt-0.5">•</span>
                                                <span className="text-white/75 text-base">{benefit}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.section>

                                {/* Ongoing Support */}
                                <motion.section
                                    whileInView={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                                >
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                                            <Sparkles size={18} className="text-white" />
                                        </div>
                                        <span>Ongoing Support & Optimization</span>
                                    </h3>
                                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                                        Your success doesn't end at launch. We provide continuous monitoring, updates, and optimization to ensure your solution stays effective and performant. Our team is available to help you scale, troubleshoot issues, and adapt to market changes. Your long-term partnership with us means we're invested in your sustained success and growth.
                                    </p>
                                </motion.section>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing & Investment Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                                <span className="text-white">Flexible </span>
                                <span className="text-gradient">Investment Options</span>
                            </h2>

                            <p className="text-center text-white/70 text-base sm:text-lg md:text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
                                We work with businesses of all sizes and complexity levels. Whether you need a straightforward solution or a complex enterprise system, we build scalable solutions that fit your budget and grow with your business. Pricing varies based on scope, complexity, timeline, and specific requirements unique to your project.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/20 hover:border-primary/40 transition-all duration-500"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
                                            <CheckCircle2 size={24} className="text-white" />
                                        </div>
                                        What We Offer
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Complete end-to-end solution delivery from concept to launch</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Expert consultation and strategic planning to ensure success</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Customized solutions tailored to your exact business needs</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Ongoing support, optimization, and maintenance included</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Transparent communication with regular progress updates</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Training and knowledge transfer so you are self-sufficient</span>
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -4 }}
                                    className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/20 hover:border-primary/40 transition-all duration-500"
                                >
                                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient}`}>
                                            <TrendingUp size={24} className="text-white" />
                                        </div>
                                        Our Approach
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <TrendingUp size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Work with startup level budgets to enterprise level complexity</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <TrendingUp size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Flexible payment terms and scalable engagement models</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <TrendingUp size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">No hidden costs or surprise fees, pricing is transparent upfront</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <TrendingUp size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Fixed scope projects or time and materials engagement options</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <TrendingUp size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Fast turnaround for simple solutions or extended timelines for complex work</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <TrendingUp size={18} className="text-primary mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-base">Quality-focused approach attracting serious, committed clients</span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/[0.02] border-2 border-primary/40 rounded-2xl p-8 sm:p-12 text-center hover:border-primary/60 transition-all duration-500"
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                    Ready to Get Started?
                                </h3>
                                <p className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                                    Pricing depends on your specific needs, project scope, timeline, and complexity. Let us understand your requirements and provide you with an accurate quote and detailed project roadmap.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link
                                        href="/consultation"
                                        className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold transition-all duration-500 hover:bg-white/20 hover:border-white/50 text-base group"
                                    >
                                        <span>Get Free Consultation</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-semibold transition-all duration-500 hover:bg-white/20 hover:border-white/50 text-base group"
                                    >
                                        <span>Contact for Quote</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                                <p className="text-white/60 text-base sm:text-lg mt-6">
                                    During your free consultation, we'll discuss timeline, budget, and deliverables for maximum clarity and precision.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Newsletter & Footer */}
            <Newsletter />
            <Footer />
        </main>
    );
}
