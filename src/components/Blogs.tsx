import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BlogPost } from "../../types/pages";


export default function BlogPostPage({
  foundBlog,
}: {
  foundBlog: BlogPost | {};
}) {

  const foundBlogWithType = foundBlog as BlogPost;
  // Check if blog data exists
  if (!foundBlogWithType) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog Not Found</h1>
            <p className="text-white/60 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary font-medium transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Blogs
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-primary hover:text-cyan-bright transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 text-base sm:text-lg text-white/60 mb-4">
              <span className="text-primary">{foundBlogWithType.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {new Date(foundBlogWithType.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {foundBlogWithType.time}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {foundBlogWithType.title}
            </h1>
          </div>

          {/* Featured Image */}
          {foundBlogWithType.featuredImage ? (
            <img
              src={foundBlogWithType.featuredImage}
              alt={foundBlogWithType.title}
              className="aspect-video rounded-2xl object-cover mb-12 w-full"
            />
          ) : (
            <div className="aspect-video rounded-2xl bg-linear-to-br from-primary/20 to-purple-500/20 mb-12" />
          )}

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-lg leading-relaxed text-white/80">
              {formatBlogContent(foundBlogWithType.content).map((node, index) => (
                <React.Fragment key={index}>{node}</React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

// Format blog content with markdown-like syntax and line breaks
const formatBlogContent = (content: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];

  // First, split by [BR] to handle line breaks
  const paragraphs = content.split("[BR]");

  paragraphs.forEach((paragraph, paragraphIndex) => {
    const paragraphParts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Pattern to match all formatting markers
    const regex = /#([^#]+)#|\*([^*]+)\*|_([^_]+)_|`([^`]+)`|~([^~]+)~/g;

    let match;

    while ((match = regex.exec(paragraph)) !== null) {
      // Add text before this match
      if (match.index > lastIndex) {
        const textBefore = paragraph.substring(lastIndex, match.index);
        if (textBefore.trim()) {
          paragraphParts.push(
            <React.Fragment key={`text-${paragraphIndex}-${lastIndex}`}>
              {textBefore}
            </React.Fragment>
          );
        }
      }

      // Add the formatted text
      if (match[1]) {
        // Bold
        paragraphParts.push(
          <strong key={`bold-${paragraphIndex}-${match.index}`} className="font-bold text-white">
            {match[1]}
          </strong>
        );
      } else if (match[2]) {
        // Italic
        paragraphParts.push(
          <em key={`italic-${paragraphIndex}-${match.index}`} className="italic text-cyan-bright">
            {match[2]}
          </em>
        );
      } else if (match[3]) {
        // Underline
        paragraphParts.push(
          <u key={`underline-${paragraphIndex}-${match.index}`} className="underline text-white decoration-cyan-bright decoration-2">
            {match[3]}
          </u>
        );
      } else if (match[4]) {
        // Code
        paragraphParts.push(
          <code
            key={`code-${paragraphIndex}-${match.index}`}
            className="bg-white/10 text-cyan-bright px-2 py-1 rounded font-mono text-base border border-cyan-bright/30"
          >
            {match[4]}
          </code>
        );
      } else if (match[5]) {
        // Highlight
        paragraphParts.push(
          <mark
            key={`highlight-${paragraphIndex}-${match.index}`}
            className="bg-yellow-500/20 text-yellow-300 px-1 rounded border border-yellow-500/30"
          >
            {match[5]}
          </mark>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text in paragraph
    if (lastIndex < paragraph.length) {
      const textAfter = paragraph.substring(lastIndex);
      if (textAfter.trim()) {
        paragraphParts.push(
          <React.Fragment key={`text-${paragraphIndex}-${lastIndex}`}>
            {textAfter}
          </React.Fragment>
        );
      }
    }

    // Add paragraph to parts
    if (paragraphParts.length > 0) {
      parts.push(
        <p key={`paragraph-${paragraphIndex}`} className="mb-6">
          {paragraphParts}
        </p>
      );
    }

    // Add line break between paragraphs (except after the last one)
    if (paragraphIndex < paragraphs.length - 1) {
      parts.push(
        <React.Fragment key={`br-${paragraphIndex}`}>
          {/* Line break spacing handled by margin */}
        </React.Fragment>
      );
    }
  });

  return parts.length > 0 ? parts : [content];
};
