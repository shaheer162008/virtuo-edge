# AI Chatbot Setup Guide for Nexiler

## Overview

The AI Chatbot is built using:
- **Google Vertex AI** - For intelligent conversation powered by Gemini 2.0 Flash
- **Google Service Account** - For secure authentication
- **Next.js API Routes** - For backend processing
- **React** - For frontend UI components

## Quick Start

If you're using **Google Service Account** (recommended for production):
→ See [SERVICE_ACCOUNT_SETUP.md](SERVICE_ACCOUNT_SETUP.md)

## Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- A Google Cloud account
- An existing Nexiler Next.js project

## Step 1: Install Required Packages

Run the following command to install all necessary dependencies:

```bash
pnpm install @google-cloud/vertexai
```

Or if using npm:

```bash
npm install @google-cloud/vertexai
```

If you're using yarn:

```bash
yarn add @google-cloud/vertexai
```

## Step 2: Set Up Google Service Account

Follow the detailed instructions in [SERVICE_ACCOUNT_SETUP.md](SERVICE_ACCOUNT_SETUP.md) to:
1. Create a Google Cloud project
2. Enable Vertex AI API
3. Create a service account
4. Generate credentials
5. Configure environment variables

## Step 3: File Structure Verification

The chatbot implementation includes the following files:

```
src/
├── app/
│   ├── layout.tsx                      # Has ChatbotWrapper integration
│   └── api/
│       └── chatbot/
│           └── route.ts                # Vertex AI API endpoint
├── components/
│   ├── AIChat.tsx                      # Chatbot UI component
│   └── ChatbotWrapper.tsx              # Manages chat state
└── lib/
    └── chatbotKnowledge.ts             # Knowledge base with company info
```

Ensure these files are in place.

## Step 4: Integration (Already Done)

The chatbot is already integrated into `src/app/layout.tsx` with `<ChatbotWrapper />`.
It will appear globally on all pages as a floating button in the bottom-right corner.

## Step 5: Test the Chatbot

1. Start your development server:
```bash
pnpm dev
```

2. Open your application in a browser
3. Click the chatbot button in the bottom-right corner
4. Try asking questions like:
   - "What services do you offer?"
   - "Tell me about your pricing"
   - "Show me examples of your work"
   - "How can you help my business?"

## Step 6: Deploy to Production

Follow the deployment instructions in [SERVICE_ACCOUNT_SETUP.md](SERVICE_ACCOUNT_SETUP.md#deployment)

## Troubleshooting

### "API Key not found" Error
- See [SERVICE_ACCOUNT_SETUP.md - Troubleshooting](SERVICE_ACCOUNT_SETUP.md#troubleshooting)

### "Generative Language API not enabled" Error
- Enable Vertex AI API in Google Cloud Console

### Chatbot Not Appearing
- Ensure `ChatbotWrapper` is imported and used in `layout.tsx`
- Check browser console for JavaScript errors
- Verify z-index values don't conflict with other elements

### Slow Responses
- This is normal for the first request (API warm-up)
- Subsequent requests should be faster
- Check your network connection
- Verify API credentials are valid

## API Rate Limits

Google Vertex AI has rate limits:
- **Free tier**: Varies by region
- **Paid tier**: Higher limits available

If you exceed limits, upgrade your Google Cloud plan or implement caching.

## Customization Options

### Change Chatbot Colors

In `src/components/ChatbotWrapper.tsx`, modify:
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

Change to your brand colors:
```tsx
className="bg-gradient-to-r from-[#your-color] to-[#your-color]"
```

### Adjust Chat Window Size

In `src/components/AIChat.tsx`, modify the `w-96 h-[500px]` classes:
```tsx
<div className="fixed bottom-6 right-6 w-96 h-[500px]">
  {/* w-96 = width, h-[500px] = height */}
```

### Update Knowledge Base

Edit `src/lib/chatbotKnowledge.ts` to update:
- `siteContent` - Company information
- `serviceDescriptions` - Your services
- `portfolioInfo` - Portfolio/projects
- `aboutUs` - Team information

## Best Practices

1. **Keep Knowledge Base Updated**: Regularly update company info
2. **Monitor API Usage**: Check Google Cloud Console
3. **Test Regularly**: Verify accuracy of responses
4. **Handle Edge Cases**: Add fallback messages if API fails
5. **Optimize Prompts**: Adjust system prompt for better responses

## Support & Monitoring

### Monitor API Performance
- Visit [Google Cloud Console](https://console.cloud.google.com/)
- Check APIs & Services > Quotas for Vertex AI

### Enable Logging
Add logging to `src/app/api/chatbot/route.ts`:
```typescript
console.log('Chat request received:', messages);
console.log('API response:', result);
```

## Next Steps

1. ✅ Install packages
2. ✅ Set up Google Service Account
3. ✅ Add environment variables
4. ✅ Chatbot already integrated into layout
5. ✅ Customize knowledge base as needed
6. ✅ Test functionality
7. ✅ Deploy to production

## Additional Resources

- [Google Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Next.js API Routes Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [SERVICE_ACCOUNT_SETUP.md](SERVICE_ACCOUNT_SETUP.md) - Detailed setup guide

---

**Your chatbot is now ready to engage your visitors and provide instant support!**
