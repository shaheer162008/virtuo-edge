"use client";
import { motion } from "framer-motion";
import { ClipboardCheck, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
    {
        icon: Lightbulb,
        title: "Discover & Consult",
        description: "We analyze your needs and craft a custom strategy tailored to your business goals.",
    },
    {
        icon: ClipboardCheck,
        title: "Plan & Design",
        description: "Our team creates detailed blueprints and prototypes for your solution.",
    },
    {
        icon: Code2,
        title: "Develop & Test",
        description: "We build your solution with cutting-edge tech and rigorous quality assurance.",
    },
    {
        icon: Rocket,
        title: "Deploy & Scale",
        description: "Launch your solution and continuously optimize for maximum performance.",
    },
];

export const HowItWorks = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-white">How We </span>
                            <span className="text-gradient">Work</span>
                        </h2>
                        <p className="text-lg text-white/60">
                            Our proven 4-step process ensures seamless delivery from concept to deployment.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-cyan-gradient flex items-center justify-center text-dark font-bold text-sm z-10">
                                    {index + 1}
                                </div>

                                {/* Card */}
                                <div className="pt-10 pb-6 px-6 rounded-xl glass border border-white/10 hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                                    <div className="flex flex-col items-center text-center flex-1 justify-between">
                                        <div>
                                            <div className="p-3 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 transition-transform inline-flex">
                                                <step.icon size={28} className="text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-white/60 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
