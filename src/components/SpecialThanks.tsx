"use client";
import { motion } from "framer-motion";

// This is a founder-led message to the team. Heart icon removed per request.

interface SpecialThanksProps {
    quote?: string;
    signature?: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function SpecialThanks({
    quote = "Thank you for trusting us with your ideas. We build, learn, and grow together, and that's our greatest reward.",
    signature = "Muhammad Shaheer, Founder & CEO",
    ctaText = "",
    ctaHref = "",
}: SpecialThanksProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center max-w-2xl mx-auto"
        >
            <div className="p-8 rounded-2xl glass border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-3">A Note From Our Founder</h3>
                <p className="text-white/60 mb-4">
                    To my co-founders and the whole Nexiler team, thank you for your hard work, creativity and persistence. You turned a small idea into a company that helps businesses grow and I am proud of what we achieve together.
                </p>

                <div className="bg-gradient-to-r from-primary/5 to-cyan-500/5 p-4 rounded-lg mb-4">
                    <p className="text-white/70 italic">"Every project is a partnership. Your dedication makes the difference."</p>
                </div>

                <div className="flex items-center justify-center gap-4">
                    <div className="text-base sm:text-lg text-white/60"><strong className="text-white">{signature}</strong></div>
                </div>
            </div>
        </motion.div>
    );
}
