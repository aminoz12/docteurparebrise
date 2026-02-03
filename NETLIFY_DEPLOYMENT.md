# Netlify Deployment Guide

## Prerequisites

1. GitHub repository connected to Netlify
2. Google Sheets API credentials set up (see GOOGLE_SHEETS_SETUP.md)
3. Netlify account

## Step 1: Connect Repository to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub and select your repository
4. Netlify will auto-detect Next.js settings

## Step 2: Configure Build Settings

Netlify should auto-detect these settings from `netlify.toml`, but verify:

1. Go to **Site settings** > **Build & deploy** > **Build settings**
2. Verify or set:
   - **Build command**: `npm run build`
   - **Publish directory**: **LEAVE EMPTY** (the @netlify/plugin-nextjs plugin handles this automatically)
   - **Base directory**: Leave as root `/` or empty
3. **IMPORTANT**: If you see a publish directory set in the UI, **remove it** or set it to empty. The plugin will handle it automatically.
4. **Node version**: 18 (set in `netlify.toml` or in **Environment variables**)

## Step 3: Add Environment Variables

1. In Netlify Dashboard, go to your site
2. Navigate to **Site settings** > **Environment variables**
3. Click **Add variable** and add these three variables:

### Required Environment Variables:

```
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- Copy the **exact same values** from your local `.env` file
- For `GOOGLE_PRIVATE_KEY`, copy the entire key including:
  - `-----BEGIN PRIVATE KEY-----`
  - All the key content
  - `-----END PRIVATE KEY-----`
- Keep the quotes and `\n` characters in the private key
- The private key should be on a single line with `\n` for newlines

### Optional Environment Variable:

```
GOOGLE_SHEET_NAME=Rendez-vous
```

(Only if you want to use a specific sheet tab name other than the default)

## Step 4: Deploy

1. After adding environment variables, Netlify will automatically trigger a new deployment
2. Or manually trigger a deploy from the **Deploys** tab
3. Wait for the build to complete

## Step 5: Verify Deployment

1. Visit your Netlify site URL
2. Test the appointment form at `/rendez-vous`
3. Submit a test appointment
4. Check your Google Sheet to verify the data was saved
5. Verify the redirect to `/contact` after 5 seconds

## Troubleshooting

### Build Fails

- **Memory errors**: The build script already includes `--max-old-space-size=4096`
- **Missing dependencies**: Ensure `package.json` has all dependencies
- **Type errors**: Run `npm run build` locally first to catch errors

### API Errors After Deployment

- **"Google Sheet ID not configured"**: Check that `GOOGLE_SHEET_ID` is set in Netlify
- **"Google Service Account not configured"**: Verify `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` are set
- **"Invalid credentials"**: Double-check the private key format (keep quotes and `\n`)
- **"Sheet not found"**: Ensure the sheet is shared with the service account email

### Environment Variables Not Working

- Make sure variables are set in **Site settings** > **Environment variables** (not in `netlify.toml`)
- Redeploy after adding/changing environment variables
- Check variable names match exactly (case-sensitive)

## Updating the Site

1. Push changes to GitHub
2. Netlify will automatically deploy
3. Or trigger a manual deploy from Netlify Dashboard

## Custom Domain

1. Go to **Site settings** > **Domain management**
2. Add your custom domain
3. Follow Netlify's DNS configuration instructions

