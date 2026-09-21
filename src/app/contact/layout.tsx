import type { Metadata } from "next";
import Script from "next/script";
import { pageMetadata } from "@/lib/siteContent";

export const metadata: Metadata = {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    keywords: pageMetadata.contact.keywords,
    openGraph: pageMetadata.contact.openGraph,
    twitter: pageMetadata.contact.twitter,
};

export default function ContactLayout({
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
