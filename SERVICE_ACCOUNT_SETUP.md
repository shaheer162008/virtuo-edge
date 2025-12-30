# AI Chatbot Setup with Google Service Account

## What You Have

✅ Backend API route using Google Vertex AI with service account authentication
✅ Frontend chatbot UI component (fully functional, no external chat libraries)
✅ Integrated into your main layout (globally available)
✅ Real-time streaming responses
✅ Complete knowledge base with your company info

## Installation Steps

### Step 1: Install Required Packages (Already Done)

If you haven't already, run:
```bash
pnpm install @google-cloud/vertexai
```

Verify it's installed by checking your `package.json` - you should see:
```json
"@google-cloud/vertexai": "latest version"
```

### Step 2: Create Google Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing):
   - Click "Select a Project" → "New Project"
   - Name it "Nexiler Chatbot"
   - Click "Create"

3. Enable Vertex AI API:
   - Go to "APIs & Services" → "Library"
   - Search for "Vertex AI API"
   - Click it, then "Enable"

4. Create Service Account:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Fill in details:
     - Service account name: `nexiler-chatbot`
     - Service account ID: (auto-filled, keep default)
     - Click "Create and Continue"
   - Grant roles:
     - Click "Grant this service account access to project"
     - Select role: "Vertex AI User"
     - Click "Continue"
   - Skip "Grant users access" step
   - Click "Done"

5. Create and Download Key:
   - Click the service account you just created
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Select "JSON"
   - Click "Create"
   - A JSON file will download automatically
   - **Keep this file safe!**

### Step 3: Set Up Environment Variables

1. Open the JSON file you downloaded
2. Copy the entire content
3. Create/update `.env.local` in your project root:

```env
# Google Cloud Configuration
GOOGLE_CLOUD_PROJECT_ID=your_project_id_here

# Optional - defaults to us-central1
GOOGLE_CLOUD_REGION=us-central1

# Service Account Credentials (paste the entire JSON content)
GOOGLE_APPLICATION_CREDENTIALS={"type":"service_account","project_id":"your_project_id",...}
```

**Important**: The JSON file contains sensitive credentials. Never commit it to Git!

### Easier Way - Using JSON File:

1. Place your downloaded JSON file in your project:
   ```
   nexiler/
   ├── service-account-key.json  (place here)
   ├── .env.local
   └── ...
   ```

2. Update `.env.local`:
   ```env
   GOOGLE_CLOUD_PROJECT_ID=your_project_id
   GOOGLE_APPLICATION_CREDENTIALS=./service-account-key.json
   ```

3. Add to `.gitignore`:
   ```
   service-account-key.json
   ```

### Step 4: Verify Setup

Start your dev server:
```bash
pnpm dev
```

Open `http://localhost:3000` and:
1. Look for the blue/purple chat button in the bottom-right
2. Click it to open the chatbot
3. Type a test message like "What services do you offer?"
4. Wait for response

## Troubleshooting

### "GOOGLE_CLOUD_PROJECT_ID is required"
- Check `.env.local` has `GOOGLE_CLOUD_PROJECT_ID=your_actual_project_id`
- Restart dev server after adding env variables
- Get project ID from Google Cloud Console

### "Permission denied" or authentication errors
- Verify service account has "Vertex AI User" role
- Check that the JSON credentials are correct
- Make sure Vertex AI API is enabled in your project

### Chatbot button not appearing
- Make sure `ChatbotWrapper` is in your `layout.tsx`
- Check browser console (F12) for JavaScript errors
- Verify `AIChat.tsx` is in `src/components/`

### Chatbot opens but doesn't respond
- Check browser Network tab (F12) → Network
- Look for requests to `/api/chatbot`
- Check server console for error messages
- Verify API credentials in environment variables

### "Module not found" errors
- Run `pnpm install` again
- Delete `node_modules` and `.pnpm-lock.yaml`, then `pnpm install`

## How It Works

1. **User clicks** the chat button in the corner
2. **Frontend** opens the chat window (ChatbotWrapper + AIChat)
3. **User types** a message and sends it
4. **Frontend sends** message to `/api/chatbot` endpoint
5. **Backend** (route.ts):
   - Initializes Google Vertex AI with service account credentials
   - Loads system prompt with your company knowledge
   - Sends message to Gemini 2.0 Flash model
   - Returns streaming response
6. **Frontend** displays response in real-time (streaming)
7. **Cycle repeats** for each new message

## Files Structure

```
src/
├── app/
│   ├── layout.tsx                      # ✅ Has ChatbotWrapper
│   └── api/
│       └── chatbot/
│           └── route.ts                # ✅ Vertex AI integration
├── components/
│   ├── AIChat.tsx                      # ✅ Chat UI
│   └── ChatbotWrapper.tsx              # ✅ Chat manager
└── lib/
    └── chatbotKnowledge.ts             # ✅ Company knowledge
```

## Customization

### Update Company Knowledge

Edit `src/lib/chatbotKnowledge.ts`:
```typescript
export const siteContent = `
Your company info here...
`;

export const serviceDescriptions = `
Your services here...
`;
```

### Change Colors

Edit `src/components/ChatbotWrapper.tsx`:
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
// Change to your brand colors
```

### Change Chat Window Size

Edit `src/components/AIChat.tsx`:
```tsx
<div className="w-96 h-[500px]"> 
// w-96 = width, h-[500px] = height
```

## Deployment

### For Vercel:

1. Push code to GitHub (don't push JSON file!)
2. Create `.env.local` in Vercel project settings with:
   ```
   GOOGLE_CLOUD_PROJECT_ID=your_project_id
   GOOGLE_APPLICATION_CREDENTIALS={"type":"service_account",...}
   ```
3. Deploy normally

### For Other Hosting:

Set environment variables in your hosting provider's dashboard and deploy.

## Security Notes

⚠️ **IMPORTANT:**
- Never commit `service-account-key.json` to Git
- Never share your credentials publicly
- Keep your project ID private
- Use different service accounts for different environments (dev/prod)

## Next Steps

1. ✅ Install packages
2. ✅ Create Google Cloud project
3. ✅ Create service account
4. ✅ Download credentials JSON
5. ✅ Set environment variables
6. ✅ Test the chatbot
7. ✅ Customize knowledge base
8. ✅ Deploy to production

Your chatbot is now live and ready to help your customers!

## Support

- [Google Cloud Documentation](https://cloud.google.com/docs)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/docs)
- [Next.js Documentation](https://nextjs.org/docs)
