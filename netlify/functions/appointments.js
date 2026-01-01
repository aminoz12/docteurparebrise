const { google } = require('googleapis');

// Initialize Google Sheets API
async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Get or create the sheet tab name and return both name and sheetId
async function getSheetInfo(sheets, spreadsheetId) {
  const preferredSheetName = process.env.GOOGLE_SHEET_NAME || 'Rendez-vous';
  
  try {
    // Get spreadsheet metadata to list all sheets
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheetTabs = spreadsheet.data.sheets || [];
    
    // Check if preferred sheet name exists
    const existingSheet = sheetTabs.find((sheet) => 
      sheet.properties.title === preferredSheetName
    );
    
    if (existingSheet) {
      return {
        name: preferredSheetName,
        sheetId: existingSheet.properties.sheetId,
      };
    }
    
    // If not found, use the first sheet
    if (sheetTabs.length > 0) {
      const firstSheet = sheetTabs[0];
      const firstSheetName = firstSheet.properties.title;
      console.log(`Sheet "${preferredSheetName}" not found. Using "${firstSheetName}" instead.`);
      return {
        name: firstSheetName,
        sheetId: firstSheet.properties.sheetId,
      };
    }
    
    // If no sheets exist, create one
    const createResponse = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{
          addSheet: {
            properties: {
              title: preferredSheetName,
            },
          },
        }],
      },
    });
    
    const newSheetId = createResponse.data.replies && createResponse.data.replies[0] && createResponse.data.replies[0].addSheet && createResponse.data.replies[0].addSheet.properties && createResponse.data.replies[0].addSheet.properties.sheetId;
    
    return {
      name: preferredSheetName,
      sheetId: newSheetId,
    };
  } catch (error) {
    console.error('Error getting sheet name:', error);
    // Fallback to preferred name
    return {
      name: preferredSheetName,
      sheetId: undefined,
    };
  }
}

// Ensure headers exist in the sheet
async function ensureHeaders(sheets, spreadsheetId, sheetName) {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:F1`,
    });

    // If no headers exist, create them
    if (!response.data.values || response.data.values.length === 0) {
      const headers = [
        [
          'Nom du client',
          'Numero du Telephone',
          'Service',
          'Date',
          'Lieu',
          'Notes',
        ],
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:F1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: headers,
        },
      });
    }
  } catch (error) {
    // If headers don't exist, try to create them
    try {
      const headers = [
        [
          'Nom du client',
          'Numero du Telephone',
          'Service',
          'Date',
          'Lieu',
          'Notes',
        ],
      ];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:F1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: headers,
        },
      });
    } catch (createError) {
      console.error('Error creating headers:', createError);
    }
  }
}

exports.handler = async function(event, context) {
  console.log('Function invoked with method:', event.httpMethod);
  console.log('Environment check - GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? 'exists' : 'missing');
  console.log('Environment check - GOOGLE_SERVICE_ACCOUNT_EMAIL:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ? 'exists' : 'missing');
  console.log('Environment check - GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'exists' : 'missing');
  
  const { httpMethod } = event;

  if (httpMethod === 'POST') {
    console.log('Processing POST request');
    try {
      const data = JSON.parse(event.body);
      console.log('Received data:', data);

      // Validate required fields
      if (!data.service || !data.date || !data.time) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing required fields' })
        };
      }

      // Check environment variables
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY;

      if (!spreadsheetId) {
        console.error('Missing GOOGLE_SHEET_ID environment variable');
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Google Sheet ID not configured. Please set GOOGLE_SHEET_ID in environment variables.' })
        };
      }

      if (!serviceAccountEmail || !privateKey) {
        console.error('Missing Google Service Account credentials');
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Google Service Account not configured. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in environment variables.' })
        };
      }

      const sheets = await getSheetsClient();

      // Get or create the sheet name and sheetId (saves one API call)
      const { name: sheetName, sheetId } = await getSheetInfo(sheets, spreadsheetId);

      // Ensure headers exist
      await ensureHeaders(sheets, spreadsheetId, sheetName);

      // Format date with time: "YYYY-MM-DD HH:MM"
      const dateTime = `${data.date} ${data.time}`;

      // Prepare row data in the correct order: Nom du client, Numero du Telephone, Service, Date, Lieu, Notes
      const row = [
        data.customerName || '',
        data.customerPhone || '',
        data.service,
        dateTime,
        data.location === 'atelier' ? 'Atelier' : 'À domicile',
        data.notes || '',
      ];

      // Find the next empty row by checking ONLY column A
      let nextRow = 2; // Start after header row (row 1)
      try {
        const existingData = await sheets.spreadsheets.values.get({
          spreadsheetId,
          range: `${sheetName}!A:A`, // Check ONLY column A to find last row
        });
        
        if (existingData.data.values && existingData.data.values.length > 0) {
          // Find the last row with data in column A
          // Start from the end and work backwards
          for (let i = existingData.data.values.length - 1; i >= 0; i--) {
            const cellValue = existingData.data.values[i]?.[0];
            if (cellValue !== undefined && cellValue !== null && String(cellValue).trim() !== '') {
              nextRow = i + 2; // +2 because array is 0-indexed and we need next row after last data row
              break;
            }
          }
        }
      } catch (error) {
        console.log('Could not determine next row, using row 2');
      }

      // Expand the sheet if needed to accommodate the new row
      if (sheetId !== undefined) {
        try {
          // Get sheet properties to check current row count
          const sheetProps = await sheets.spreadsheets.get({
            spreadsheetId,
            ranges: [`${sheetName}!A1`],
            fields: 'sheets.properties.gridProperties',
          });
          
          const currentRowCount = sheetProps.data.sheets?.[0]?.properties?.gridProperties?.rowCount || 1000;
          
          // If we need more rows, expand the sheet
          if (nextRow > currentRowCount) {
            await sheets.spreadsheets.batchUpdate({
              spreadsheetId,
              requestBody: {
                requests: [{
                  appendDimension: {
                    sheetId: sheetId,
                    dimension: 'ROWS',
                    length: nextRow - currentRowCount + 10, // Add extra rows for future use
                  },
                }],
              },
            });
          }
        } catch (expandError) {
          console.log('Could not expand sheet, will try to write anyway');
        }
      }

      // Use update to write directly to the row starting from column A
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A${nextRow}`, // Start from column A only
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [row], // This will fill columns A, B, C, D, E, F starting from A
        },
      });

      // Format the inserted row with 14px font size and bold
      if (sheetId !== undefined) {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [{
              repeatCell: {
                range: {
                  sheetId: sheetId,
                  startRowIndex: nextRow - 1, // 0-indexed
                  endRowIndex: nextRow,
                  startColumnIndex: 0, // Column A
                  endColumnIndex: 6, // Column F (exclusive)
                },
                cell: {
                  userEnteredFormat: {
                    textFormat: {
                      fontSize: 14,
                      bold: true,
                    },
                  },
                },
                fields: 'userEnteredFormat.textFormat.fontSize,userEnteredFormat.textFormat.bold',
              },
            }],
          },
        });
      }

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true })
      };
    } catch (error) {
      console.error('Error saving appointment:', error);
      const errorMessage = error && error.message ? error.message : 'Failed to save appointment';
      return {
        statusCode: 500,
        body: JSON.stringify({ error: errorMessage })
      };
    }
  }

  if (httpMethod === 'GET') {
    try {
      const sheets = await getSheetsClient();
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;

      if (!spreadsheetId) {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Google Sheet ID not configured' })
        };
      }

      // Get the sheet name
      const { name: sheetName } = await getSheetInfo(sheets, spreadsheetId);

      // Get all appointments
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${sheetName}!A:F`,
      });

      const rows = response.data.values || [];
      
      // Skip header row
      // Column order: Nom du client, Numero du Telephone, Service, Date, Lieu, Notes
      const appointments = rows.slice(1).map((row) => {
        const dateTime = row[3] || '';
        const [date, time] = dateTime.split(' ') || [dateTime, ''];
        
        return {
          customerName: row[0] || '',
          customerPhone: row[1] || '',
          service: row[2] || '',
          date: date,
          time: time,
          location: row[4] || '',
          notes: row[5] || '',
        };
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ appointments })
      };
    } catch (error) {
      console.error('Error fetching appointments:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch appointments' })
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' })
  };
};
