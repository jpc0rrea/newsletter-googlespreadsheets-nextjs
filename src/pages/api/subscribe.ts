import { NowRequest, NowResponse } from '@vercel/node';
import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet
} from 'google-spreadsheet';

interface EmptyCell {
  row: number;
  column: number;
}

let cachedSheet: GoogleSpreadsheetWorksheet = null;

async function connectToWorksheet(sheetName: string) {
  if (cachedSheet) {
    return cachedSheet;
  }

  // A chave da planilha é a string longa da url (depois do /d/)
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

  // usar as credenciais da minha conta de serviço (que vem no arquivo JSON)
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY
  });

  await doc.loadInfo(); // carrega as propriedades do documento e das abas

  const sheet = doc.sheetsByTitle[sheetName];

  cachedSheet = sheet;

  return sheet;
}

function getFirstEmptyCell(
  sheet: GoogleSpreadsheetWorksheet,
  initalRow = 1,
  initialColumn = 1,
  direction = 'column'
) {
  let actualRow = initalRow;
  let actualColumn = initialColumn;
  if (direction === 'column') {
    while (sheet.getCell(actualRow, actualColumn).value !== null) {
      actualRow += 1;
    }
  } else if (direction === 'row') {
    while (sheet.getCell(actualRow, actualColumn).value !== null) {
      actualColumn += 1;
    }
  }
  const emptyCell = {
    row: actualRow,
    column: actualColumn
  };
  return emptyCell;
}

function writeNewEmailInSheet(
  sheet: GoogleSpreadsheetWorksheet,
  email: string,
  emptyCell: EmptyCell
) {
  const emailCell = sheet.getCell(emptyCell.row, 0);
  const dateCell = sheet.getCell(emptyCell.row, 1);
  emailCell.value = email;
  dateCell.value = `${new Date().toISOString()}`;
}

export default async (req: NowRequest, res: NowResponse) => {
  const { email } = req.body;
  const { worksheet } = req.body;

  const sheet = await connectToWorksheet(worksheet);

  await sheet.loadCells('A:B');

  const emptyCell = getFirstEmptyCell(sheet);

  writeNewEmailInSheet(sheet, email, emptyCell);

  await sheet.saveUpdatedCells();

  return res.json({
    message: 'Ok'
  });
};
