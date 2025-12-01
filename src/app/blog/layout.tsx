import type { Metadata } from "next";
import { pageMetadata } from "@/lib/siteContent";

export const metadata: Metadata = {
    title: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    keywords: pageMetadata.blog.keywords,
    openGraph: pageMetadata.blog.openGraph,
    twitter: pageMetadata.blog.twitter,
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
