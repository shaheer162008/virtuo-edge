import type { Metadata } from "next";
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
    return <>{children}</>;
}
