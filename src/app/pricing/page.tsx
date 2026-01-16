import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Newsletter } from "@/components/Newsletter";
import { Pricing } from "@/components/Pricing";

export const metadata = {
    title: "Virtuo Edge Pricing - AI Automation & Development Plans",
    description: "Transparent, honest pricing from Virtuo Edge. Choose a plan for AI automation, custom web development, workflow optimization, or brand strategy. No hidden fees.",
    keywords: "virtuo edge pricing, ai automation cost, web development pricing, workflow automation pricing, virtuo edge plans",
    openGraph: {
        title: "Virtuo Edge Pricing Plans",
        description: "Choose the right plan for your business. Transparent pricing from Virtuo Edge.",
        images: [{ url: "https://virtuoedge.tech/og-pricing.jpg", width: 1200, height: 630, alt: "Virtuo Edge Pricing" }],
    },
    twitter: {
        card: "summary_large_image" as const,
        title: "Virtuo Edge Pricing Plans",
        description: "Choose the right plan for your business with Virtuo Edge.",
        images: ["https://virtuoedge.tech/og-pricing.jpg"],
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
                        <span className="text-white">Virtuo Edge Pricing. </span>
                        <span className="text-gradient">Transparent & Honest.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                        No hidden fees. No surprises. Choose from flexible Virtuo Edge packages designed for businesses of all sizes. Scale up as you grow.
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
