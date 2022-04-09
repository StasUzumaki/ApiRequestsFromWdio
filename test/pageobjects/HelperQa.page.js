const axios = require('axios').default;
class HelperQa {

    async configAxios() {
        return axios.create({
            baseURL: "https://mailsac.com/api/",
            headers:
            {
                "Host": "mailsac.com",
                "Mailsac-Key": `${process.env.API_KEY}`,
            },
        });
    }
    catchErrors(error) {
        console.dir(error);
        if (typeof error.response !== 'undefined') {
            console.log("---------------API REQUEST ERROR------------------")
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log("---------------API REQUEST ERROR------------------")
        }
        throw error;
    }
    async me(){
        const client = await this.configAxios(); //calls your config with headers
        return client.get( // sets request method
            `/me`, //endpoint
        ).then(response => {
            console.log(response.data)
            return response.data;

        }).catch(this.apiFailureCallback)
    }
    async checkMesages(email) { // your get request
        const client = await this.configAxios(); //calls your config with headers
        return client.get( // sets request method
            `addresses/${email}/messages/`, //endpoint
        ).then(response => {
            const formattedCheliks = response.data.map((item) => {
                return {
                    _id: item._id,
                    from: item.from[0].address,
                    to: item.to[0].address,
                    received: item.received,
                    subject: item.subject,
                    ip: item.ip,
                    via: item.via

                }
            })
            // console.log(response.data[0].from);
            console.log(formattedCheliks)
            // return response.data[0].from;

        }).catch(this.apiFailureCallback); //calls preconfigured catch error method
    }
    async ReserveEmail() {
        const client = await this.configAxios();
        return client.post(
            `validations/addresses`, {
                    emails: ['billy.wilson@mailsac.com', 'billysnus@mailsac.com', 
                    'barabish@mailsac.com', 'fortnitiden@mailsac.com', 'snus@mailsac.com']
        }
        ).then(response => {
            console.log(response.data)

        }).catch(this.apiFailureCallback)
    }
    async DeleteMess(domain) {
        const client = await this.configAxios();
        return client.post(
            `domains/${domain}/delete-all-domain-mail`, {

        }
        ).then(response => {
            console.log(response.data)
            return response.data

        }).catch(this.apiFailureCallback)
    }

}

module.exports = new HelperQa()