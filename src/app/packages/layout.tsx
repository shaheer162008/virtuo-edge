import { Metadata } from "next";
import Script from "next/script";

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
    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8289236021486555"
                crossOrigin="anonymous"
                strategy="afterInteractive"
            />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-YDWF5X1WZQ"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-YDWF5X1WZQ');
                `}
            </Script>
            {children}
        </>
    );
}
