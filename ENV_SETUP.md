# Environment Variables Setup

## Add to `.env.local`

Create or update `.env.local` in your project root with your service account credentials:

```env
# Google Cloud Project ID
GOOGLE_CLOUD_PROJECT_ID=your_project_id_here

# Service Account Private Key (from your JSON credentials file)
# Important: Keep the \n characters as-is or paste the full key with line breaks
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYourPrivateKeyHere\n-----END PRIVATE KEY-----

# Service Account Client Email
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com

# Optional: Google Cloud Region (defaults to us-central1)
GOOGLE_CLOUD_REGION=us-central1
```

## How to Get Your Credentials

Your service account JSON file from Google Cloud looks like this:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBA...\n-----END PRIVATE KEY-----\n",
  "client_email": "service-account@project.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "..."
}
```

Extract these three values:
1. **project_id** → `GOOGLE_CLOUD_PROJECT_ID`
2. **private_key** → `GOOGLE_PRIVATE_KEY` (include the entire string with BEGIN/END lines)
3. **client_email** → `GOOGLE_CLIENT_EMAIL`

## Pasting the Private Key

The private key contains newline characters. When copying to `.env.local`:

**Option 1: Keep as escaped newlines**
```env
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvQIBA...\n-----END PRIVATE KEY-----\n
```

**Option 2: Use actual line breaks**
```env
GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
MIIEvQIBA...
-----END PRIVATE KEY-----
```

Both will work. The code handles both formats with `.replace(/\\n/g, '\n')`.

## Important Security Notes

⚠️ **NEVER commit `.env.local` to Git!**

Add to `.gitignore`:
```
.env.local
.env.*.local
```

Your `.env.local` contains sensitive credentials. Keep it private!

## Restart Dev Server

After adding/updating `.env.local`, restart your dev server:
```bash
pnpm dev
```

Environment variables are only read when the server starts.

## Verification

To verify your setup works, check:
1. No errors in terminal when starting `pnpm dev`
2. Chat button appears in bottom-right corner
3. Clicking button opens chat window
4. Sending a message returns a response

If you get "credentials" errors, make sure all three env variables are set correctly.
