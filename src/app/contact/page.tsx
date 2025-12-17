"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// Metadata is set in layout.tsx for client components

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // In a real app, send data to backend
        alert("Thank you! We'll get back to you soon.");
    };

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[180px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse pointer-events-none -z-10" style={{ animationDuration: '5s' }} />
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">Let's Build </span>
                            <span className="text-gradient">Together</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            Ready to transform your business? Get in touch and let's create something amazing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                            <p className="text-white/70 mb-8 leading-relaxed">
                                Have a project in mind? Whether you need AI automation, custom development, or consulting services, we're here to help. Reach out and let's start a conversation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">Email</div>
                                        <a href="mailto:contact@nexiler.tech" className="text-white/70 hover:text-primary transition-colors">
                                            contact@nexiler.tech
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Phone size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">WhatsApp</div>
                                        <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-colors">
                                            Chat with us on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <MapPin size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">Location</div>
                                        <p className="text-white/70">
                                            Remote Team<br />
                                            Serving clients worldwide
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-white font-medium mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
