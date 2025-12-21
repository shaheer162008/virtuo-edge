# NEXILER - Icon Generation Detailed Prompt Guide

## 🎨 Website Theme & Color Palette

### Primary Colors
- **Main Primary:** `#33BBCF` (Vibrant Cyan/Turquoise)
- **Primary Light:** `#00F6FF` (Bright Neon Cyan)
- **Dark Background:** `#00040F` (Deep Navy Blue)
- **Dark Secondary:** `#010613` (Almost Black)

### Theme Style
- **Design Approach:** Modern Minimalist + Tech-Forward
- **Overall Feel:** Clean, Professional, Trustworthy, Tech-Savvy
- **Visual Style:** Flat Design with Gradient Accents
- **Font:** Montserrat (Bold, Clean, Professional)
- **Aesthetic:** Dark mode with cyan/turquoise neon accents

---

## 📋 Services List & Icon Names

### All 15 Nexiler Services with Icon Names:

| # | Service | Icon Name | Description |
|---|---------|-----------|-------------|
| 1 | **Website Development** | `globe-code` | Website development and web applications |
| 2 | **AI Automation Setup** | `robot-spark` | AI automation and workflow automation |
| 3 | **AI Chatbot Integration** | `chat-ai-bubble` | AI chatbot and customer support |
| 4 | **Full Brand Creation** | `palette-brush` | Brand identity and design |
| 5 | **Motion Graphics** | `animation-wave` | Motion graphics and animations |
| 6 | **Video Editing (Short Content)** | `film-reel-short` | Short-form video content (Reels/TikTok) |
| 7 | **Video Editing (Long Content)** | `film-reel-long` | Long-form video (YouTube/Podcasts) |
| 8 | **Monthly AI Automation Maintenance** | `wrench-gear` | Maintenance and support services |
| 9 | **SEO Optimization & Strategy** | `chart-uptrend` | SEO and organic growth |
| 10 | **Social Media Ads Management** | `target-ads` | Paid social media advertising |
| 11 | **Graphic Design** | `design-grid` | Graphic design and visual content |
| 12 | **Monthly Website Maintenance** | `shield-check` | Website security and maintenance |
| 13 | **3D Modeling & Visualization** | `cube-3d` | 3D modeling and AR/VR |
| 14 | **API Integration & Development** | `plug-connect` | API development and integrations |
| 15 | **Custom Software Solutions** | `code-brackets` | Custom software development |

---

## 🎯 Master Icon Generation Prompt

**Use this prompt when generating icons (supports all 13 services above):**

```
Create professional service icons for a tech/digital agency called Nexiler.

Theme Details:
- Style: Modern Minimalist, Flat Design with subtle gradients
- Primary Color: #33BBCF (Vibrant Cyan/Turquoise)
- Accent Color: #00F6FF (Bright Neon Cyan)
- Background: #00040F (Deep Navy Blue)
- Use minimalist line work with occasional solid shapes
- Icons should be modern, clean, and professional
- Include subtle gradient overlays using cyan colors
- Perfect for tech/AI/digital service company

Icon Specifications:
- Format: PNG with transparent background
- Size: 512x512 pixels (scalable)
- Stroke Weight: 2-3px for consistency
- Style: Outlined with optional gradient fill

Generate these icons with the exact names shown:

1. globe-code: A globe icon combined with code brackets/XML symbols - represents website development
2. robot-spark: Geometric robot head with a spark/lightning bolt - represents AI and automation
3. chat-ai-bubble: Chat bubble with AI circuit patterns inside - represents chatbot
4. palette-brush: Artist palette merged with a paint brush - represents brand creation and design
5. animation-wave: Sound/wave pattern with motion lines - represents motion graphics
6. film-reel-short: Film reel with motion arrows - represents short video editing
7. film-reel-long: Film strip/timeline icon - represents long-form video editing
8. wrench-gear: Wrench crossed with a gear - represents maintenance and support
9. chart-uptrend: Arrow pointing up integrated with a bar chart - represents growth and SEO
10. target-ads: Target/bullseye with ad representation - represents advertising
11. design-grid: Grid pattern with design elements - represents graphic design
12. shield-check: Shield icon with a checkmark - represents security and protection
13. cube-3d: 3D cube with perspective - represents 3D modeling
14. plug-connect: Power plug merging with connection nodes - represents API integration
15. code-brackets: Angle brackets with code representation - represents custom development

Color Usage:
- Primary structure: Use #33BBCF or #00F6FF
- Add subtle gradients from cyan to darker cyan
- Add soft glow effects around icons
- Ensure icons work on both dark and light backgrounds

Style Guidelines:
- Maintain consistent stroke weight across all icons
- All icons should feel cohesive as a family
- Use negative space effectively
- Modern, not dated or trendy
- Professional and trustworthy appearance
```

---

## 💡 Usage in Your Code

When you create an icon, just reference it by name in parentheses:

```tsx
// Example usage in your components:
import { (globe-code), (robot-spark), (chat-ai-bubble) } from '@/components/icons';

// Or in data structures:
const services = [
  {
    icon: (globe-code),
    title: "Website Development",
  },
  {
    icon: (robot-spark),
    title: "AI Automation Setup",
  },
];
```

---

## 📐 Technical Implementation Notes

### Once icons are created:

1. **Save as:** `/src/components/icons/[icon-name].tsx`
2. **Export from:** `/src/components/icons/index.ts`
3. **Use in components:** Simply import the icon name

### Example Icon Component Structure:
```tsx
export const (IconName) = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    className={`text-cyan-400 ${className}`}
  >
    {/* SVG path content */}
  </svg>
);
```

---

## 🎨 Design Consistency Checklist

- [ ] All icons use same stroke weight
- [ ] Color palette: #33BBCF, #00F6FF, and gradients between them
- [ ] Icons work on dark backgrounds (#00040F)
- [ ] Icons have professional, modern feel
- [ ] Glow/gradient effects are subtle, not overwhelming
- [ ] Icons are scalable (created as vectors)
- [ ] All 15 icons created and match descriptions

---

## 📌 Quick Reference

**Primary Cyan:** `#33BBCF` | **Bright Cyan:** `#00F6FF` | **Dark Background:** `#00040F`

**Style:** Modern Minimalist | **Feel:** Professional, Trustworthy, Tech-Forward | **Format:** PNG/SVG 512x512px
