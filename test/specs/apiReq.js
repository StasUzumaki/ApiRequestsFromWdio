const HelperQA = require('../pageobjects/HelperQa.page')
const axios = require('axios');

describe('api request from wdio ', () => {
    it('check Email', async () => {


        const message = await HelperQA.checkMesages("snus@mailsac.com")
    });
    it('Me', async () => {


        const me = await HelperQA.me()
    });
    it('Validate up to 50 email addresses', async () => {


        const reserved = await HelperQA.ReserveEmail()
    });

    it('Delete all messages', async () => {


        const snus = await HelperQA.DeleteMess("snus.msdc.co")
    });
    
});