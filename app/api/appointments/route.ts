import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

type AppointmentData = {
  service: string;
  date: string;
  time: string;
  location: string;
  customerName?: string;
  customerPhone?: string;
  notes?: string;
};

// Initialize Google Sheets API
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Ensure headers exist in the sheet
async function ensureHeaders(sheets: any, spreadsheetId: string) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Rendez-vous!A1:H1',
    });

    // If no headers exist, create them
    if (!response.data.values || response.data.values.length === 0) {
      const headers = [
        [
          'Horodatage',
          'Service',
          'Date',
          'Heure',
          'Lieu',
          'Nom du client',
          'Téléphone du client',
          'Notes',
        ],
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Rendez-vous!A1:H1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: headers,
        },
      });
    }
  } catch (error) {
    // If sheet doesn't exist or range is empty, try to create headers
    console.log('Creating headers...');
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: AppointmentData = await request.json();

    // Validate required fields
    if (!data.service || !data.date || !data.time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheet ID not configured' },
        { status: 500 }
      );
    }

    // Ensure headers exist
    await ensureHeaders(sheets, spreadsheetId);

    // Prepare row data
    const row = [
      new Date().toISOString(), // Timestamp
      data.service,
      data.date,
      data.time,
      data.location === 'atelier' ? 'Atelier' : 'À domicile',
      data.customerName || '',
      data.customerPhone || '',
      data.notes || '',
    ];

    // Append to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Rendez-vous!A:H', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving appointment:', error);
    return NextResponse.json(
      { error: 'Failed to save appointment' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      return NextResponse.json(
        { error: 'Google Sheet ID not configured' },
        { status: 500 }
      );
    }

    // Get all appointments
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Rendez-vous!A:H',
    });

    const rows = response.data.values || [];
    
    // Skip header row
    const appointments = rows.slice(1).map((row) => ({
      timestamp: row[0] || '',
      service: row[1] || '',
      date: row[2] || '',
      time: row[3] || '',
      location: row[4] || '',
      customerName: row[5] || '',
      customerPhone: row[6] || '',
      notes: row[7] || '',
    }));

    return NextResponse.json({ appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

