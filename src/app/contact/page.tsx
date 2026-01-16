"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Mail, MapPin, Send } from "lucide-react";

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
                            <span className="text-white">Let's Talk About Your </span>
                            <span className="text-gradient">Project</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/70">
                            Virtuo Edge is ready to help. Whether you need a website, automation system, or brand strategy, reach out and we'll figure out what's next.
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
                            className="flex flex-col justify-start"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reach Virtuo Edge</h2>
                            <p className="text-white/70 mb-8 leading-relaxed text-base md:text-lg">
                                Have a project in mind? Whether you need AI automation, custom website development, or consulting, Virtuo Edge is ready to help. Get in touch and let's start.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <Mail size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">Email</div>
                                        <a href="mailto:info@virtuoedge.tech" className="text-white/70 hover:text-primary transition-colors text-base sm:text-lg">
                                            info@virtuoedge.tech
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1600" width="24" height="24" fill="#FFFFFF" style={{opacity: 1}}>
                                            <path d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5m-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104m0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">WhatsApp</div>
                                        <a href="https://wa.me/923390046730" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-accent transition-colors text-base sm:text-lg">
                                            +92 339 0046730
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <MapPin size={24} className="text-primary" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white mb-1">Location</div>
                                        <p className="text-white/70 text-base sm:text-lg">
                                            Remote Team<br />
                                            Serving clients worldwide
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className="font-semibold text-white mb-4">Quick Contact</div>
                                    <div className="flex gap-4 flex-wrap">
                                        <a href="https://wa.me/923390046730" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-accent text-white hover:shadow-lg hover:shadow-accent/50 transition-all duration-300" title="Chat on WhatsApp">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1664 1600" width="20" height="20" fill="#FFFFFF" style={{opacity: 1}}>
                                                <path d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5m-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104m0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26" />
                                            </svg>
                                            Chat Now
                                        </a>
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
                                    <label htmlFor="name" className="block text-white font-medium mb-2 text-base sm:text-lg">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors text-base"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2 text-base sm:text-lg">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors text-base"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-white font-medium mb-2 text-base sm:text-lg">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors text-base"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white font-medium mb-2 text-base sm:text-lg">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary/50 bg-transparent text-white placeholder-white/40 focus:outline-none transition-colors resize-none text-base"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-2 text-base sm:text-lg"
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
