"use client";
import { motion } from "framer-motion";

const clients = [
    "airbnb",
    "binance",
    "coinbase",
    "dropbox",
];

export const Clients = () => {
    return (
        <section className="py-20 border-y border-white/5 bg-dark-secondary/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-4xl font-bold text-white/60 hover:text-white transition-colors"
                        >
                            {client}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
