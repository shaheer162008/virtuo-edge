import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";

export const metadata = {
    title: "Pricing Plans - Nexiler | AI Automation & Development Solutions",
    description: "Choose the perfect plan for your business. Transparent pricing for AI automation, custom development, and digital transformation services.",
    keywords: "pricing, plans, ai automation cost, development pricing, nexiler pricing",
    openGraph: {
        title: "Pricing Plans - Nexiler",
        description: "Choose the perfect plan for your business transformation journey.",
        images: [{ url: "https://nexiler.com/og-pricing.jpg", width: 1200, height: 630, alt: "Nexiler Pricing" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Pricing Plans - Nexiler",
        description: "Choose the perfect plan for your business transformation journey.",
        images: ["https://nexiler.com/og-pricing.jpg"],
    },
};

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-pulse pointer-events-none -z-10" style={{ animationDuration: '6s' }} />
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-white">Simple, </span>
                        <span className="text-gradient">Transparent Pricing</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                        Choose the plan that fits your business needs. All plans include our core features and dedicated support.
                    </p>
                </div>
            </section>

            {/* Pricing Component */}
            <Pricing />

            {/* Newsletter */}
            <Newsletter />
            
            <Footer />
        </main>
    );
}
