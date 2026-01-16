import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Packages - One-Time & Monthly Plans | Virtuo Edge",
    description: "Transparent pricing for all Virtuo Edge services. Choose from one-time project packages or monthly retainers for AI automation, web development, SEO, video editing, and more.",
    keywords: ["pricing packages", "one-time project", "monthly retainer", "AI automation packages", "digital marketing pricing", "web development cost", "business growth packages"],
    openGraph: {
        title: "Pricing Packages - One-Time & Monthly Plans | Virtuo Edge",
        description: "Choose from project-based or monthly packages. AI automation, web development, SEO, video editing, and more bundled for maximum ROI.",
        type: "website",
    },
};

export default function PackagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
