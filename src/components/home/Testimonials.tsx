"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "Virtuo Edge built our Laurus Foods website from scratch. The design is clean, the user experience is smooth, and it's helped us showcase our catering products and packaging beautifully. Our online orders increased by 40% after launch.",
        author: "Laurus Foods Team",
        role: "Business Owner, Laurus Foods",
        rating: 5,
    },
    {
        quote: "For Sayyid & Shaykh, Virtuo Edge created an AI-powered chatbot that handles legal inquiries 24/7. Clients now get instant responses, our consultants focus on complex cases, and we've cut response time from hours to minutes. Professional, reliable, and exactly what we needed.",
        author: "Sayyid & Shaykh",
        role: "Advocate and Legal Consultant",
        rating: 5,
    },
    {
        quote: "Virtuo Edge transformed YAARHAULAGE Limited's online presence with a simple yet highly effective website. The site perfectly showcases our services, makes client contact seamless, and has significantly improved our online visibility. Their team understood our needs and delivered exactly what we needed for our business.",
        author: "YAARHAULAGE Limited",
        role: "Haulage Services Director",
        rating: 5,
    },
];

export const Testimonials = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
                            <span className="text-white">How Virtuo Edge </span>
                            <span className="text-gradient">Delivers Results</span>
                        </h2>
                        <p className="text-lg text-white/60">
                            Real stories from real clients. Virtuo Edge helps businesses save time, reduce costs, and grow faster.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            whileHover={{ y: -10, scale: 1.03 }}
                            className="p-5 sm:p-6 rounded-2xl glass border border-white/10 hover:border-primary/30 transition-all duration-500 group relative"
                        >
                            {/* Inner Spotlight */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="fill-white text-white" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-cyan-gradient flex items-center justify-center font-bold text-dark group-hover:scale-110 transition-transform duration-300">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-base">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm sm:text-base text-white/60">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Glow Effect */}
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
