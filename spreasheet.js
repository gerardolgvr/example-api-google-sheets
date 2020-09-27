const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('./json/client_secret.json');

async function getAllQuestions(){
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_KEY);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];    
    
    const rows = await sheet.getRows();
    return rows;
  
}

module.exports = {
    accessGoogleSheet: accessSpreadsheet,
    getAllQuestions: getAllQuestions
}