import type { Metadata } from "next";
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
    return <>{children}</>;
}
