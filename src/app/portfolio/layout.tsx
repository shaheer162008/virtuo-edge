import type { Metadata } from "next";
import { pageMetadata } from "@/lib/siteContent";

export const metadata: Metadata = {
    title: pageMetadata.portfolio.title,
    description: pageMetadata.portfolio.description,
    keywords: pageMetadata.portfolio.keywords,
    openGraph: pageMetadata.portfolio.openGraph,
    twitter: pageMetadata.portfolio.twitter,
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
