const HelperQA = require('../pageobjects/HelperQa.page')
const axios = require('axios');
require('dotenv').config();

describe('api request from wdio ', () => {
    xit('check Email', async () => {


        const message = await HelperQA.checkMesages("snus@mailsac.com")
    });
    xit('Me', async () => {


        const me = await HelperQA.me()
    });
    it('Validate up to 50 email addresses', async () => {


        const reserved = await HelperQA.ReserveEmail()
        allureReporter.addFeature('Feature')
    });

    xit('Delete all messages', async () => {


        const snus = await HelperQA.DeleteMess("snus.msdc.co")
    });
    
});