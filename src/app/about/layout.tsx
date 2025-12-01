import type { Metadata } from "next";
import { pageMetadata } from "@/lib/siteContent";

export const metadata: Metadata = {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
    keywords: pageMetadata.about.keywords,
    openGraph: pageMetadata.about.openGraph,
    twitter: pageMetadata.about.twitter,
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
