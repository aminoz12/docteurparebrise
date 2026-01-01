# Google Sheets Setup Guide

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or use existing)
3. Enable **Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

## Step 2: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Give it a name (e.g., "Appointments Service")
4. Click "Create and Continue"
5. Skip role assignment (optional)
6. Click "Done"

## Step 3: Create Service Account Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON"
5. Download the JSON file

## Step 4: Share Google Sheet with Service Account

1. Create a new Google Sheet (or use existing)
2. Name it "Rendez-vous" (or any name)
3. Create headers in row 1:
   - Column A: Horodatage
   - Column B: Service
   - Column C: Date
   - Column D: Heure
   - Column E: Lieu
   - Column F: Nom du client
   - Column G: Téléphone du client
   - Column H: Notes
4. Click "Share" button
5. Copy the **email address** from the JSON file (it looks like: `your-service@project.iam.gserviceaccount.com`)
6. Paste it in the share dialog
7. Give it "Editor" permission
8. Click "Send"

## Step 5: Get Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the `SHEET_ID_HERE` part

## Step 6: Add Environment Variables

Create or update your `.env.local` file:

```env
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

**Important:** 
- Copy the entire private key from the JSON file (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)
- Keep the quotes and `\n` characters

## Step 7: Install Dependencies

```bash
npm install googleapis
```

## Step 8: Test

1. Submit a test appointment from the form
2. Check your Google Sheet - it should appear automatically!
3. Visit `/admin` to see the dashboard

## Troubleshooting

- **"Sheet not found"**: Make sure you shared the sheet with the service account email
- **"Permission denied"**: Check that the service account has "Editor" access
- **"Invalid credentials"**: Double-check your environment variables, especially the private key format

