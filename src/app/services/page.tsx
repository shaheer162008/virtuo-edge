"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Bot, Code, Database, Zap, Workflow, HeadphonesIcon, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// Metadata is set in layout.tsx for client components

const services = [
    {
        icon: Bot,
        title: "AI Automation",
        description: "Transform repetitive tasks into intelligent automated workflows.",
        features: [
            "Robotic Process Automation (RPA)",
            "Machine Learning Model Development",
            "AI Chatbots & Virtual Assistants",
            "Predictive Analytics",
            "Natural Language Processing",
        ],
    },
    {
        icon: Code,
        title: "Custom Software Development",
        description: "Tailored applications built with modern technologies.",
        features: [
            "Web Application Development",
            "Mobile App Development (iOS & Android)",
            "Desktop Applications",
            "Progressive Web Apps (PWA)",
            "SaaS Product Development",
        ],
    },
    {
        icon: Database,
        title: "Data Solutions",
        description: "Turn your data into actionable business intelligence.",
        features: [
            "Data Pipeline Development",
            "Business Intelligence Dashboards",
            "Data Warehousing",
            "ETL/ELT Solutions",
            "Advanced Analytics",
        ],
    },
    {
        icon: Workflow,
        title: "System Integration",
        description: "Connect your tools and streamline your operations.",
        features: [
            "API Development & Integration",
            "Third-Party Service Integration",
            "Legacy System Modernization",
            "Cloud Migration Services",
            "Microservices Architecture",
        ],
    },
    {
        icon: Zap,
        title: "AI Consulting",
        description: "Strategic guidance for your AI transformation journey.",
        features: [
            "AI Readiness Assessment",
            "Technology Strategy & Roadmap",
            "Proof of Concept Development",
            "AI Implementation Planning",
            "Training & Workshops",
        ],
    },
    {
        icon: HeadphonesIcon,
        title: "Support & Maintenance",
        description: "Ongoing support to keep your solutions running smoothly.",
        features: [
            "24/7 Technical Support",
            "Performance Monitoring",
            "Security Updates & Patches",
            "Feature Enhancements",
            "SLA-Based Support Plans",
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse pointer-events-none -z-10" style={{ animationDuration: '6s' }} />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Our </span>
                            <span className="text-gradient">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            Comprehensive AI automation and development solutions to accelerate your digital transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <service.icon size={32} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/60">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70">
                                            <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">Ready to Get </span>
                            <span className="text-gradient">Started?</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                            Let's discuss which solutions are right for your business.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                        >
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
