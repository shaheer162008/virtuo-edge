# 🎨 NEXILER Website Theme & Icon Guide

## Your Website Color Theme

### Primary Colors
| Color | Hex Code | Use Case |
|-------|----------|----------|
| **Primary Cyan** | `#33BBCF` | Main brand color, buttons, accents |
| **Bright Neon Cyan** | `#00F6FF` | Highlights, badges, glow effects |
| **Dark Background** | `#00040F` | Main background, deep navy blue |
| **Dark Secondary** | `#010613` | Alternative backgrounds, text areas |

### Design System
- **Font Family:** Montserrat (Bold, Clean, Professional)
- **Design Style:** Modern Minimalist + Tech-Forward
- **Overall Aesthetic:** Dark mode with neon cyan accents
- **Vibe:** Professional, Trustworthy, Tech-Savvy, Innovation-Focused
- **Industry:** Tech/AI/Digital Services Agency

---

## 📋 Your 15 Services & Icon Names

Use these exact icon names in your code:

### Core Development Services
1. **Website Development** → `(globe-code)`
   - Description: High-performance web apps and websites
   
2. **Custom Software Solutions** → `(code-brackets)`
   - Description: Bespoke web apps and dashboards
   
3. **API Integration & Development** → `(plug-connect)`
   - Description: Custom APIs and system integrations

### AI & Automation Services
4. **AI Automation Setup** → `(robot-spark)`
   - Description: Intelligent workflows and process automation
   
5. **AI Chatbot Integration** → `(chat-ai-bubble)`
   - Description: 24/7 customer support and lead qualification
   
6. **Monthly AI Automation Maintenance** → `(wrench-gear)`
   - Description: Ongoing support and optimization

### Design & Creative Services
7. **Full Brand Creation** → `(palette-brush)`
   - Description: Complete brand identity and guidelines
   
8. **Graphic Design** → `(design-grid)`
   - Description: On-brand visuals and marketing graphics
   
9. **Motion Graphics** → `(animation-wave)`
   - Description: Animations and explainer videos

### Video Services
10. **Video Editing (Short Content)** → `(film-reel-short)`
    - Description: Reels, TikToks, and short-form content
    
11. **Video Editing (Long Content)** → `(film-reel-long)`
    - Description: YouTube, podcasts, and long-form videos
    
12. **3D Modeling & Visualization** → `(cube-3d)`
    - Description: Photorealistic 3D renders and AR/VR

### Growth & Marketing Services
13. **SEO Optimization & Strategy** → `(chart-uptrend)`
    - Description: Organic growth and Google ranking
    
14. **Social Media Ads Management** → `(target-ads)`
    - Description: Paid social campaigns and advertising
    
15. **Monthly Website Maintenance** → `(shield-check)`
    - Description: Security, speed, and 24/7 support

---

## 📝 How to Use Icon Names in Your Code

### Simple Usage Example:

```tsx
// In your component file:
import { GlobeCode, RobotSpark, ChatAiBubble } from '@/components/icons';

export function ServiceCard() {
  return (
    <div>
      <GlobeCode size={48} className="text-cyan-400" />
      <h3>Website Development</h3>
    </div>
  );
}
```

### In Data Structures:

```tsx
const services = [
  {
    id: 1,
    name: "Website Development",
    iconName: "globe-code",
    description: "High-performance websites"
  },
  {
    id: 2,
    name: "AI Automation Setup",
    iconName: "robot-spark",
    description: "Intelligent workflows"
  },
];
```

---

## 🎨 Icon Design Specifications

### Visual Style
- **Approach:** Modern Minimalist, Flat Design
- **Complexity:** Simple, clean, not overly detailed
- **Stroke Style:** Outlined with optional gradient fills
- **Colors:** Cyan gradients (#33BBCF → #00F6FF)
- **Effects:** Subtle glows, no harsh shadows

### Technical Specs
- **Format:** SVG (recommended) or PNG
- **Size:** 512×512 pixels base (scalable)
- **Stroke Weight:** 2-3px for consistency
- **Background:** Transparent
- **Style:** Line-based with optional solid shapes

### Icon Family Consistency
- All icons should feel like they belong together
- Consistent line weights across the set
- Similar corner radii on shapes (rounded, modern look)
- Cohesive use of negative space
- Professional, trustworthy appearance

---

## 🎯 Master Prompt for Icon Generation

**Use this when creating your icons:**

```
Create 15 professional service icons for a modern tech agency called Nexiler.

Theme: Modern Minimalist tech aesthetic
Primary Colors: #33BBCF (Cyan) and #00F6FF (Bright Cyan)
Background: #00040F (Deep Navy Blue)
Style: Flat design with subtle gradient accents
Look & Feel: Professional, clean, minimalist, trustworthy

Icons to create (with exact names and descriptions):

1. globe-code - Globe merged with code brackets/XML symbols
2. robot-spark - Robot head with spark/lightning bolt accent
3. chat-ai-bubble - Chat bubble with AI circuit patterns
4. palette-brush - Artist palette combined with paint brush
5. animation-wave - Sound wave/motion lines animation symbol
6. film-reel-short - Film reel with quick motion arrows
7. film-reel-long - Film strip timeline icon
8. wrench-gear - Wrench crossed with gear cog
9. chart-uptrend - Arrow pointing up with bar chart
10. target-ads - Target/bullseye with ad elements
11. design-grid - Grid pattern with design elements
12. shield-check - Shield with checkmark inside
13. cube-3d - 3D perspective cube
14. plug-connect - Power plug with connection nodes
15. code-brackets - Angle brackets with code lines

Specifications:
- 512x512px SVG format
- Stroke weight: 2-3px consistent
- Use cyan gradients from #33BBCF to #00F6FF
- Works on dark backgrounds (#00040F)
- Professional, not trendy
- Cohesive icon family feel
- All icons should have similar visual weight
```

---

## 💾 File Structure

Once icons are created, organize them like this:

```
src/
└── components/
    └── icons/
        ├── index.ts (exports all icons)
        ├── globe-code.tsx
        ├── robot-spark.tsx
        ├── chat-ai-bubble.tsx
        ├── palette-brush.tsx
        ├── animation-wave.tsx
        ├── film-reel-short.tsx
        ├── film-reel-long.tsx
        ├── wrench-gear.tsx
        ├── chart-uptrend.tsx
        ├── target-ads.tsx
        ├── design-grid.tsx
        ├── shield-check.tsx
        ├── cube-3d.tsx
        ├── plug-connect.tsx
        └── code-brackets.tsx
```

---

## ✅ Icon Creation Checklist

- [ ] All 15 icons created
- [ ] Icons follow modern minimalist style
- [ ] Consistent stroke weight (2-3px)
- [ ] Colors use cyan gradients (#33BBCF → #00F6FF)
- [ ] Icons work on dark backgrounds
- [ ] Professional, clean appearance
- [ ] SVG format, 512×512px base
- [ ] No fill colors except gradients
- [ ] Glow effects are subtle
- [ ] Icons feel cohesive as a family
- [ ] Exported to correct folder structure
- [ ] index.ts properly exports all icons

---

## 🚀 Quick Start

1. **Read the detailed prompt:** [ICON_GENERATION_PROMPT.md](./ICON_GENERATION_PROMPT.md)
2. **Use the master prompt** to generate icons with an AI image generator
3. **Convert to SVG/React components** using the template provided
4. **Place in:** `src/components/icons/`
5. **Export from:** `src/components/icons/index.ts`
6. **Use in code:** Just reference the icon name!

---

## 🎨 Color Palette Quick Reference

```
Primary:        #33BBCF (Vibrant Cyan)
Accent:         #00F6FF (Bright Neon Cyan)
Dark BG:        #00040F (Deep Navy)
Dark Secondary: #010613 (Almost Black)

Font: Montserrat (Bold & Clean)
```

That's it! You now have everything you need to generate beautiful, cohesive icons for your Nexiler website. 🚀
