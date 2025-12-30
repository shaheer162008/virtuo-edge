# AI Chatbot with Google Service Account - Setup Guide

This guide covers setting up the AI Chatbot using **Google Cloud Service Account credentials** for production use.

## Overview

The chatbot uses:
- **Google Cloud Vertex AI** - For Gemini API via service accounts
- **Service Account Authentication** - Secure server-to-server authentication
- **Next.js API Routes** - For backend processing
- **React** - For frontend UI components

## Prerequisites

- Google Cloud Project with billing enabled
- Service account JSON key file
- Node.js 18+

---

## Step 1: Set Up Google Cloud Project

### 1.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click the project dropdown at the top
3. Click **New Project**
4. Enter a name (e.g., "Nexiler Chatbot")
5. Click **Create**

### 1.2 Enable Vertex AI API

1. In the Console, go to **APIs & Services** > **Library**
2. Search for **"Vertex AI API"**
3. Click on it and press **Enable**

### 1.3 Enable Generative Language API (Optional, for additional features)

1. In **APIs & Services** > **Library**
2. Search for **"Generative Language API"**
3. Click and enable it

---

## Step 2: Create Service Account

### 2.1 Create the Service Account

1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Fill in:
   - **Service account name**: `nexiler-chatbot-sa`
   - **Service account ID**: Auto-populated (leave as is)
   - **Description**: `Service account for Nexiler AI Chatbot`
4. Click **Create and Continue**

### 2.2 Grant Required Permissions

On the next screen (Grant this service account access to project):

1. Click the **Select a role** dropdown
2. Search for **"Vertex AI"**
3. Select **"Vertex AI Administrator"** or **"Vertex AI User"**
4. Click **Continue**
5. Click **Done**

### 2.3 Create JSON Key File

1. In the service account list, click on the service account you just created
2. Go to the **Keys** tab
3. Click **Add Key** > **Create new key**
4. Select **JSON**
5. Click **Create**
6. A JSON file will download - **Keep this file safe!**

---

## Step 3: Install Required Packages

Run this command in your project:

```bash
pnpm install @google-cloud/vertexai google-auth-library
```

Already installed from chatbot setup:
- `ai` - Vercel AI SDK (for streaming)

---

## Step 4: Set Up Environment Variables

### Method 1: Using Service Account JSON File (Recommended for Development)

1. Place the downloaded JSON key file in your project root or secure location
2. Update your `.env.local`:

```env
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_REGION=us-central1
GOOGLE_APPLICATION_CREDENTIALS=./path-to-your-service-account-key.json
```

### Method 2: Using Environment Variables (Recommended for Production)

1. Open the JSON key file with a text editor
2. Copy the entire JSON content
3. In your `.env.local` or production environment, add:

```env
GOOGLE_CLOUD_PROJECT_ID=your-project-id-from-json
GOOGLE_CLOUD_REGION=us-central1
GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...","private_key_id":"...","private_key":"..."}
```

Or set each required field separately:

```env
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n
GOOGLE_CLOUD_SERVICE_ACCOUNT_EMAIL=service-account-email@project.iam.gserviceaccount.com
```

### How to Find Your Project ID

1. In Google Cloud Console, look at the top of the page
2. The project ID is displayed next to the project name
3. Or go to **Settings** to see the full project details

---

## Step 5: Verify Your Setup

The chatbot API route (`src/app/api/chatbot/route.ts`) automatically initializes with your credentials.

Test the connection:

```bash
pnpm dev
```

Open your browser console and check for any authentication errors.

---

## Step 6: Update Knowledge Base (Optional)

Customize what the chatbot knows by editing `src/lib/chatbotKnowledge.ts`:

```typescript
export const siteContent = `Your company information...`;
export const serviceDescriptions = `Your services...`;
export const portfolioInfo = `Your projects...`;
export const aboutUs = `Your team information...`;
```

---

## Step 7: Integrate into Your Application

### Add to Global Layout

Update `src/app/layout.tsx`:

```tsx
import ChatbotWrapper from "@/components/ChatbotWrapper";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ChatbotWrapper />
      </body>
    </html>
  );
}
```

### Or Add to Specific Pages

```tsx
'use client';
import { useState } from 'react';
import ChatbotWrapper from "@/components/ChatbotWrapper";

export default function YourPage() {
  return (
    <>
      {/* Your page content */}
      <ChatbotWrapper />
    </>
  );
}
```

---

## Step 8: Test Locally

```bash
pnpm dev
```

1. Open http://localhost:3000
2. Click the chat button (bottom-right)
3. Ask questions about your services:
   - "What services do you offer?"
   - "Tell me about your pricing"
   - "Show me examples of your work"

---

## Step 9: Deploy to Production

### For Vercel Deployment

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Go to **Settings** > **Environment Variables**
4. Add your environment variables:
   - `GOOGLE_CLOUD_PROJECT_ID`
   - `GOOGLE_CLOUD_REGION` (optional, defaults to us-central1)
   - If using file: Upload the JSON key and set path
   - If using variables: Add `GOOGLE_CLOUD_PRIVATE_KEY`, `GOOGLE_CLOUD_SERVICE_ACCOUNT_EMAIL`

5. Deploy

### For Other Hosting (AWS, Railway, etc.)

1. Set environment variables in your hosting provider's dashboard
2. Build: `pnpm build`
3. Start: `pnpm start`

**Important**: Never commit your service account JSON file to version control. Add to `.gitignore`:

```
service-account-key.json
service-account-*.json
```

---

## Troubleshooting

### Error: "GOOGLE_CLOUD_PROJECT_ID is required"
- Add `GOOGLE_CLOUD_PROJECT_ID` to `.env.local`
- Restart your dev server after adding the environment variable

### Error: "Permission denied" or "Unauthorized"
- Verify the service account has **Vertex AI User** role
- Check that **Vertex AI API** is enabled in your project
- Confirm the correct project ID is being used

### Error: "API not enabled"
- Go to Google Cloud Console
- Navigate to **APIs & Services** > **Library**
- Search and enable **Vertex AI API**

### Chatbot Returns Errors
- Check browser console (F12) for JavaScript errors
- Check server logs: `pnpm dev` terminal output
- Verify all environment variables are set correctly
- Ensure your Google Cloud project has billing enabled

### Rate Limiting or Quota Exceeded
- Check **APIs & Services** > **Quotas** in Google Cloud Console
- Vertex AI has rate limits; upgrade your project plan if needed
- Implement caching to reduce API calls

---

## Security Best Practices

1. **Never commit secrets**: Keep `.env.local` in `.gitignore`
2. **Use minimal permissions**: Grant only necessary roles to service account
3. **Rotate keys regularly**: Create new keys periodically and delete old ones
4. **Monitor usage**: Check Google Cloud Console for unexpected API calls
5. **Use firewall rules**: Restrict API access to your domain

---

## Google Cloud Regions

Available regions for Vertex AI (use in `GOOGLE_CLOUD_REGION`):

- `us-central1` (recommended, lowest latency from US)
- `us-east4`
- `us-west1`
- `europe-west1`
- `asia-northeast1`

Choose the region closest to your users for better performance.

---

## Available Models

The chatbot uses `gemini-2.0-flash-exp` by default. To change, edit `src/app/api/chatbot/route.ts`:

```typescript
const model = vertexAI.getGenerativeModel({
  model: 'gemini-1.5-pro', // Change model here
});
```

Available models:
- `gemini-2.0-flash-exp` - Latest, fastest, recommended
- `gemini-1.5-pro` - More powerful, slower
- `gemini-1.5-flash` - Faster, good for quick responses

---

## Cost Estimation

Google Vertex AI pricing (as of 2024):
- **Gemini 2.0 Flash**: ~$0.075 per 1M input tokens, ~$0.30 per 1M output tokens
- **Free tier**: Limited usage available

Monitor costs in **Billing** > **Reports** in Google Cloud Console.

---

## Next Steps

1. ✅ Create Google Cloud project
2. ✅ Enable Vertex AI API
3. ✅ Create service account and download key
4. ✅ Install packages
5. ✅ Set environment variables
6. ✅ Integrate ChatbotWrapper
7. ✅ Test locally
8. ✅ Deploy to production

---

## Resources

- [Google Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
- [Google Cloud Authentication](https://cloud.google.com/docs/authentication/application-default-credentials)
- [Service Account Documentation](https://cloud.google.com/iam/docs/service-accounts)
- [Generative AI Documentation](https://ai.google.dev/docs)

---

**Your AI Chatbot is now ready to serve your customers with production-grade security!**
