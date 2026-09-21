import type { Metadata } from "next";
import Script from "next/script";
import { pageMetadata } from "@/lib/siteContent";

export const metadata: Metadata = {
    title: pageMetadata.services.title,
    description: pageMetadata.services.description,
    keywords: pageMetadata.services.keywords,
    openGraph: pageMetadata.services.openGraph,
    twitter: pageMetadata.services.twitter,
};

export default function ServicesLayout({
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
