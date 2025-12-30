# Quick Integration Guide

## Step-by-Step Integration

### 1. Install Dependencies (REQUIRED)

```bash
pnpm install ai @ai-sdk/google
```

### 2. Add Environment Variable (REQUIRED)

Create/update `.env.local` in your project root:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

**How to get your API key:**
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Click "Get API Key"
3. Create a new API key
4. Copy and paste it in `.env.local`

### 3. Add Chatbot to Your Layout

**Option A: Global Layout (Recommended)**

Open `src/app/layout.tsx` and update the body:

```tsx
import ChatbotWrapper from "@/components/ChatbotWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        {/* your existing head content */}
      </head>
      <body>
        {children}
        <ChatbotWrapper /> {/* Add this line */}
      </body>
    </html>
  );
}
```

**Option B: Add to Specific Page**

```tsx
'use client';
import ChatbotWrapper from "@/components/ChatbotWrapper";

export default function YourPage() {
  return (
    <>
      {/* your page content */}
      <ChatbotWrapper />
    </>
  );
}
```

### 4. Test It!

```bash
pnpm dev
```

Look for the blue/purple chat button in the bottom-right corner of your page. Click it to open the chatbot!

---

## Files Created

- ✅ `src/app/api/chatbot/route.ts` - Backend API endpoint
- ✅ `src/components/AIChat.tsx` - Chat UI component
- ✅ `src/components/ChatbotWrapper.tsx` - Chat manager component
- ✅ `src/lib/chatbotKnowledge.ts` - Knowledge base
- ✅ `AI_CHATBOT_SETUP.md` - Full setup documentation

## Troubleshooting

**"Cannot find module 'ai'"**
→ Run `pnpm install ai @ai-sdk/google`

**"API Key error"**
→ Check `.env.local` has `GOOGLE_GENERATIVE_AI_API_KEY=your_key`
→ Restart dev server after adding environment variable

**Chatbot button not visible**
→ Make sure `ChatbotWrapper` is added to your layout or page
→ Check if z-index conflicts with other elements

**Chatbot not responding**
→ Check browser console for errors
→ Verify API key is correct
→ Check Google Cloud account has Gemini API enabled

---

## Customization

### Change Button Color

Edit `src/components/ChatbotWrapper.tsx`:

```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600" // Change these colors
```

### Change Chat Window Size

Edit `src/components/AIChat.tsx`, find `w-96 h-[500px]` and modify:

```tsx
<div className="fixed bottom-6 right-6 w-96 h-[500px]"> // Adjust width and height
```

### Update Knowledge Base

Edit `src/lib/chatbotKnowledge.ts`:

```typescript
export const siteContent = `
// Update your company info here
`;
```

---

## That's It! 🎉

Your AI chatbot is now live. Users can:
- Ask about your services
- Get information about your projects
- Learn about your company
- Get redirected for more details

For advanced configuration, see `AI_CHATBOT_SETUP.md`.
