# Service Account Quick Reference

## What You Need to Do (In Order)

### 1. Google Cloud Setup (5 minutes)

```bash
# Open this link and follow steps:
https://console.cloud.google.com/

1. Create new project
2. Enable "Vertex AI API"
3. Create Service Account:
   - APIs & Services > Credentials > Create Credentials > Service Account
   - Name: "nexiler-chatbot-sa"
   - Grant role: "Vertex AI User"
4. Create JSON Key:
   - Click service account > Keys > Add Key > Create new key > JSON
   - Download and save securely
```

### 2. Copy Your Project ID and Credentials

From the JSON file you downloaded, find:
- `"project_id": "your-project-id-here"`
- `"private_key": "-----BEGIN PRIVATE KEY-----\n..."`

### 3. Install Packages

```bash
pnpm install @google-cloud/vertexai google-auth-library
```

### 4. Set Environment Variables

Create/update `.env.local`:

```env
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_REGION=us-central1
```

**Option A: Using JSON File**
```env
GOOGLE_APPLICATION_CREDENTIALS=./service-account-key.json
```
Then place your JSON file in project root.

**Option B: Using Environment Variables (Production)**
Copy all contents from your JSON file:
```env
GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"...","...":"..."}
```

### 5. Add to Your Layout

`src/app/layout.tsx`:
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

### 6. Test It!

```bash
pnpm dev
# Look for chat button in bottom-right corner
```

### 7. Deploy

Push to GitHub → Deploy on Vercel:
1. Add environment variables in Vercel Settings
2. Deploy

---

## Environment Variable Cheatsheet

| Variable | Value | Required |
|----------|-------|----------|
| `GOOGLE_CLOUD_PROJECT_ID` | `your-project-id` | ✅ Yes |
| `GOOGLE_CLOUD_REGION` | `us-central1` | ❌ No (default) |
| `GOOGLE_APPLICATION_CREDENTIALS` | `./path-to-key.json` | ✅ Yes (if not using key env var) |
| `GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY` | Full JSON contents | ✅ Yes (if not using file) |

---

## Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `GOOGLE_CLOUD_PROJECT_ID is required` | Add to `.env.local` and restart server |
| `Permission denied` | Service account needs "Vertex AI User" role |
| `API not enabled` | Enable Vertex AI API in Google Cloud Console |
| `Cannot find service account file` | Verify path in `GOOGLE_APPLICATION_CREDENTIALS` |

---

## Files Created/Modified

```
src/
├── app/api/chatbot/route.ts          ✅ Updated for service account
├── components/AIChat.tsx             ✅ Updated (removed ai/react)
└── components/ChatbotWrapper.tsx     ✅ Ready to use

.env.local                            ➕ Create this
service-account-key.json              ➕ Add your JSON (or use env variables)
```

---

## Quick Test Commands

```bash
# Install packages
pnpm install @google-cloud/vertexai google-auth-library

# Start dev server
pnpm dev

# Test in browser
# http://localhost:3000
# Click chat button → ask a question
```

---

## Need Help?

See detailed docs:
- **Full Setup**: `AI_CHATBOT_SERVICE_ACCOUNT_SETUP.md`
- **API Errors**: Check browser console (F12)
- **Environment Issues**: Verify `.env.local` exists and has correct values
