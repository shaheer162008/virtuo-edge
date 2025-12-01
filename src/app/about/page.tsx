"use client";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Target, Users, Zap, Award } from "lucide-react";

// Metadata is set in layout.tsx for client components

const values = [
    {
        icon: Target,
        title: "Mission-Driven",
        description: "We're committed to delivering transformative solutions that drive real business value.",
    },
    {
        icon: Users,
        title: "Client-Centric",
        description: "Your success is our success. We build lasting partnerships based on trust and results.",
    },
    {
        icon: Zap,
        title: "Innovation First",
        description: "We stay ahead of the curve, leveraging the latest technologies to give you a competitive edge.",
    },
    {
        icon: Award,
        title: "Excellence Always",
        description: "Quality is non-negotiable. We deliver world-class solutions every single time.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">About </span>
                            <span className="text-gradient">Nexiler</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            We're a team of AI experts, developers, and strategists dedicated to transforming businesses through cutting-edge automation and custom solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white/[0.02]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                                <span className="text-gradient">Our Story</span>
                            </h2>
                            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                                <p>
                                    Founded in 2020, Nexiler emerged from a simple vision: to make advanced AI and automation accessible to businesses of all sizes. What started as a small team of passionate technologists has grown into a full-service AI automation agency.
                                </p>
                                <p>
                                    Today, we've helped over 200 companies transform their operations, saved millions of hours in manual work, and deployed AI solutions that continue to drive measurable business growth.
                                </p>
                                <p>
                                    Our approach combines deep technical expertise with a genuine understanding of business challenges. We don't just build software—we engineer solutions that solve real problems and create lasting value.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="text-white">Our </span>
                                <span className="text-gradient">Values</span>
                            </h2>
                            <p className="text-lg text-white/60">
                                The principles that guide everything we do
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all text-center"
                            >
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                                    <value.icon size={28} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-white/60 text-sm">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
