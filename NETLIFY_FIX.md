# Fixing Netlify Publish Directory Error

If you're getting the error: "Your publish directory cannot be the same as the base directory"

## Solution Steps:

1. **In Netlify Dashboard:**
   - Go to **Site settings** > **Build & deploy** > **Build settings**
   - **IMPORTANT**: Make sure **Publish directory** is **completely empty** (not set to `.`, `/`, `.next`, or anything else)
   - **Base directory** should also be **empty** or set to `/`
   - Click **Save**

2. **Clear Build Cache:**
   - Go to **Deploys** tab
   - Click **Trigger deploy** > **Clear cache and deploy site**

3. **Verify netlify.toml:**
   - Make sure `netlify.toml` does NOT have a `publish` field in the `[build]` section
   - The `@netlify/plugin-nextjs` plugin handles the publish directory automatically

4. **If still not working:**
   - Try removing the plugin temporarily and see if the build works
   - Or check if there are any environment variables set in Netlify that might be conflicting

## Why this happens:

The `@netlify/plugin-nextjs` plugin automatically sets the publish directory to `.next` for Next.js apps. If you manually set a publish directory in the Netlify UI that conflicts with this, you'll get this error.

The plugin needs to control the publish directory, so it must be empty in the UI settings.

