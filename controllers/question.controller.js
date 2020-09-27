let googleSheet = require('../spreadsheet');

const getQuestions = async (req, res) => {
    
    const registers = await googleSheet.getAllQuestions();

    let list = []

    const columns = registers[0]._sheet.headerValues;
    for (let i = 0; i < registers.length; i++) {
        let dataItem = registers[i]._rawData;
        let str = `{"${columns[0]}" :"${dataItem[0]}" , "${columns[1]}":"${dataItem[1]}"}`;
        formatedObject = JSON.parse(str);
        let answers = dataItem.slice(2, dataItem.length);
        let headersSliced = columns.slice(2, columns.length);
        let answersList = [];

        for (let j = 0; j < answers.length; j++) {
            if (answers[j].trim() !== "") {
                let objectAnswer = {};
                let tempField = headersSliced[j];
                objectAnswer.field = tempField[0].toUpperCase() + tempField.slice(1);
                objectAnswer.answer = parseInt(answers[j]) || 0;
                answersList.push(objectAnswer);
            }
        }

        formatedObject.answers = answersList;
        list.push(formatedObject);
    }
    res.send(list); 
}

module.exports = {
    getQuestions: getQuestions
}