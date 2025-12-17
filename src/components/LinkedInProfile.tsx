"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, ExternalLink } from "lucide-react";
import { MAX_HEADLINE_CHARS } from "@/lib/team";

interface LinkedInProfileProps {
    /** LinkedIn profile URL e.g. https://www.linkedin.com/in/muhammad-shaheer-yousuf/ */
    profileUrl: string;
    /** Display name (required since LinkedIn doesn't allow public API access) */
    name: string;
    /** Role/headline */
    headline?: string;
    /** Profile image URL (optional - shows LinkedIn icon if not provided) */
    imageUrl?: string;
    /** Show as founder badge */
    isFounder?: boolean;
    /** Card size variant */
    size?: "sm" | "md" | "lg";
}

/**
 * LinkedIn Profile Card Component
 * 
 * Displays a beautiful LinkedIn profile card with hover effects.
 * Since LinkedIn's API requires OAuth for profile data, this component
 * uses provided props for display with a link to the actual profile.
 * 
 * Usage:
 * ```tsx
 * <LinkedInProfile
 *     profileUrl="https://www.linkedin.com/in/muhammad-shaheer-yousuf/"
 *     name="Muhammad Shaheer"
 *     headline="Founder & CEO at Nexiler"
 *     isFounder={true}
 * />
 * ```
 */
export const LinkedInProfile = ({
    profileUrl,
    name,
    headline,
    imageUrl,
    isFounder = false,
    size = "md",
}: LinkedInProfileProps) => {
    const sizeClasses = {
        sm: {
            wrapper: "max-w-[360px]",
            card: "p-4",
            avatar: "w-12 h-12",
            avatarIcon: 24,
            name: "text-base",
            headline: "text-xs",
        },
        md: {
            // Increased width for md so longer headlines fit on one line
            wrapper: "max-w-[520px]",
            card: "p-6",
            avatar: "w-16 h-16",
            avatarIcon: 32,
            name: "text-xl",
            headline: "text-sm",
        },
        lg: {
            // Larger max width for large cards
            wrapper: "max-w-[640px]",
            card: "p-8",
            avatar: "w-20 h-20",
            avatarIcon: 40,
            name: "text-2xl",
            headline: "text-base",
        },
    };

    const s = sizeClasses[size];

    // Truncate headline on the JS side to avoid unexpected wrapping/overlap
    const displayedHeadline = headline
        ? headline.length > MAX_HEADLINE_CHARS
            ? headline.slice(0, MAX_HEADLINE_CHARS - 1) + "…"
            : headline
        : undefined;

    return (
        <motion.a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group block ${s.card} rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#0A66C2]/50 transition-all duration-300 cursor-pointer relative overflow-hidden w-full ${s.wrapper} mx-auto`}
        >
            {/* LinkedIn brand gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A66C2]/0 to-[#0A66C2]/0 group-hover:from-[#0A66C2]/5 group-hover:to-[#0A66C2]/10 transition-all duration-500" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-4">
                    {/* Avatar */}
                    {imageUrl ? (
                        <div className={`${s.avatar} rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#0A66C2]/50 transition-all shrink-0`}>
                            <img
                                src={imageUrl}
                                alt={name}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    ) : (
                        <div className={`${s.avatar} rounded-full bg-[#0A66C2] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-[#0A66C2]/50 shrink-0`}>
                            <Linkedin size={s.avatarIcon} className="text-white" />
                        </div>
                    )}

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className={`${s.name} font-semibold text-white group-hover:text-[#0A66C2] transition-colors truncate`}>
                                {name}
                            </h3>
                            {/* Founder badge removed to keep cards clean and uniform */}
                        </div>
                        {displayedHeadline && (
                            <p className={`${s.headline} text-white/60 mt-1 whitespace-nowrap truncate`} title={headline}>
                                {displayedHeadline}
                            </p>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-sm text-white/50 group-hover:text-[#0A66C2] transition-colors">
                        <Linkedin size={16} />
                        <span>View Profile</span>
                    </div>
                    <ExternalLink size={16} className="text-white/30 group-hover:text-[#0A66C2] transition-colors" />
                </div>
            </div>
        </motion.a>
    );
};

/**
 * LinkedIn Official Badge Embed
 * 
 * Uses LinkedIn's official badge script to embed a profile.
 * This fetches real data from LinkedIn but has limited styling options.
 * 
 * Usage:
 * ```tsx
 * <LinkedInBadge
 *     profileUrl="https://www.linkedin.com/in/muhammad-shaheer-yousuf/"
 *     size="medium"
 * />
 * ```
 */
interface LinkedInBadgeProps {
    profileUrl: string;
    size?: "small" | "medium" | "large";
    theme?: "light" | "dark";
}

export const LinkedInBadge = ({
    profileUrl,
    size = "medium",
    theme = "dark",
}: LinkedInBadgeProps) => {
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Load LinkedIn badge script
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            const existingScript = document.querySelector(
                'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
            );
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, []);

    // Extract profile ID from URL
    const profileId = profileUrl.split("/in/")[1]?.replace(/\/$/, "") || "";

    return (
        <div ref={badgeRef} className="linkedin-badge-wrapper">
            <div
                className="badge-base LI-profile-badge"
                data-locale="en_US"
                data-size={size}
                data-theme={theme}
                data-type="VERTICAL"
                data-vanity={profileId}
                data-version="v1"
            >
                <a
                    className="badge-base__link LI-simple-link"
                    href={profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on LinkedIn
                </a>
            </div>
        </div>
    );
};

/**
 * LinkedIn Profile Card Grid
 * 
 * Displays multiple LinkedIn profiles in a responsive grid.
 * 
 * Usage:
 * ```tsx
 * <LinkedInGrid
 *     profiles={[
 *         { profileUrl: "...", name: "John", headline: "Developer" },
 *         { profileUrl: "...", name: "Jane", headline: "Designer" },
 *     ]}
 * />
 * ```
 */
interface LinkedInGridProps {
    profiles: Array<{
        profileUrl: string;
        name: string;
        headline?: string;
        imageUrl?: string;
        isFounder?: boolean;
    }>;
    columns?: 1 | 2 | 3 | 4;
}

export const LinkedInGrid = ({ profiles, columns = 3 }: LinkedInGridProps) => {
    const colClasses = {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    };

    return (
        <div className={`grid ${colClasses[columns]} gap-6`}>
            {profiles.map((profile, index) => (
                <motion.div
                    key={profile.profileUrl}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <LinkedInProfile {...profile} />
                </motion.div>
            ))}
        </div>
    );
};

export default LinkedInProfile;
