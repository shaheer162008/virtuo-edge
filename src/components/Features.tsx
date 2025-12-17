"use client";
import { motion } from "framer-motion";
import { Brain, Code, Sparkles, Command, Zap, Share2 } from "lucide-react";

const features = [
    {
        title: "AI-Powered Analytics",
        description: "Get deep insights into your business performance with our advanced machine learning algorithms.",
        icon: Brain,
    },
    {
        title: "Code Generation",
        description: "Automate repetitive coding tasks and speed up development with intelligent code suggestions.",
        icon: Code,
    },
    {
        title: "Smart Automation",
        description: "Streamline your workflows by letting AI handle the routine tasks while you focus on strategy.",
        icon: Sparkles,
    },
    {
        title: "Command Line Interface",
        description: "Control everything from your terminal with our powerful and intuitive CLI tool.",
        icon: Command,
    },
    {
        title: "Real-time Processing",
        description: "Process data in real-time with ultra-low latency and high throughput capabilities.",
        icon: Zap,
    },
    {
        title: "Seamless Integration",
        description: "Connect with your favorite tools and services effortlessly using our robust API.",
        icon: Share2,
    },
];

export const Features = () => {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Manual Spotlight */}
            <div className="absolute top-1/2 left-1/4 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] lg:w-[600px] lg:h-[600px] bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />
            
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">
                        Unleash the power of AI
                    </h2>
                    <p className="text-lg text-white/60">
                        Our platform provides a comprehensive suite of tools designed to help you build, deploy, and scale AI applications with ease.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 group relative"
                        >
                            {/* Inner Spotlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10">
                                <div className="size-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="size-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed">{feature.description}</p>
                            </div>
                            
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
