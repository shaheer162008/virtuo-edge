// Team data file - manage all team members here

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    headline?: string; // LinkedIn headline
    linkedinUrl: string;
    imageUrl?: string; // Profile picture URL (optional)
    isFounder?: boolean;
    founderBadgeText?: string; // Custom founder badge text (e.g., "Founder" or "Co-founder")
}

// Maximum allowed characters for a team member's `headline` (tagline).
// Keep `headline` values under this limit to avoid visual overlap in profile cards.
// We recommend keeping taglines concise so they appear on a single line
// across most viewports. Headlines longer than this will be truncated
// with an ellipsis in the UI.
export const MAX_HEADLINE_CHARS = 60;

export const teamMembers: TeamMember[] = [
    {
        id: "muhammad-shaheer",
        name: "Muhammad Shaheer",
        role: "Founder & CEO",
        headline: "Founder & CEO",
        linkedinUrl: "https://www.linkedin.com/in/muhammad-shaheer-yousuf/",
        isFounder: true,
        founderBadgeText: "Founder",
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHg7tPWQ9kmRA/profile-displayphoto-crop_800_800/B4DZre6pmSGsAI-/0/1764676509286?e=1767830400&v=beta&t=XWuBzzj3YST0X03ZE2vdQTA_wdNfkUsSyGyJ6yiGbvQ",
    },
    {
        id: "rabbiya-sohail",
        name: "Rabbiya Sohail",
        role: "Co-founder, Social Media Manager and Graphic Designer",
        headline: "Co-founder, Social Media & Design",
        linkedinUrl: "https://www.linkedin.com/in/rabbiya-sohail",
        isFounder: true,
        founderBadgeText: "Co-Founder",
    },
    {
        id: "saim-khalid",
        name: "Saim Khalid",
        role: "Co-founder and Full Stack Developer AI Engineer",
        headline: "Co-founder and Full Stack Dev",
        linkedinUrl: "https://www.linkedin.com/in/saim-khalid-dev",
        isFounder: true,
        founderBadgeText: "Co-Founder",
    },
    {
        id: "amir-hamja",
        name: "Amir Hamja",
        role: "Digital Marketing & Outreach",
        headline: "Digital Marketing Specialist",
        linkedinUrl: "https://www.linkedin.com/in/amir-hamja-7898bb388",
        imageUrl: "https://media.licdn.com/dms/image/v2/D5635AQHe3w2uV3KWGg/profile-framedphoto-shrink_800_800/B56ZndbfJXJwAg-/0/1760356594600?e=1766613600&v=beta&t=8Xi7pCW4uJLCMoMUcPTRERHlDYLVJr7-DpK1TgoQByw",
    },
];

// Headline character summary (keep <= MAX_HEADLINE_CHARS):
// - Muhammad Shaheer: "Founder & CEO" (18 chars)
// - Saim Khalid: "Full Stack Developer, Next.js" (29 chars)
// - Amir Hamja: "Digital Marketing Specialist" (28 chars)

// Team expertise areas (matches your services)
export const teamExpertise = [
    "Full Stack Web Development",
    "AI & Automation",
    "Graphic Design & Branding",
    "Video Production & Motion Graphics",
    "3D Modeling & Visualization",
    "SEO & Digital Marketing",
];
