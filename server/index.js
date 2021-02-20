require('dotenv/config')
const request = require('request')
const express = require('express')
const app = express()


app.get('/', (req, res) => {
    if (req.query.code) {
        let url = 'https://zoom.us/oauth/token?grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + "http://bd526e407e1b.ngrok.io";
        request.post(url, (error, response, body) => {
            body = JSON.parse(body);
            console.log(`access_token: ${body.access_token}`);
            console.log(`refresh_token: ${body.refresh_token}`);
            if (body.access_token) {
                request.get('https://api.zoom.us/v2/users/me', (error, response, body) => {
                    if (error) {
                        console.log('API Response Error: ', error)
                    } else {
                        body = JSON.parse(body);
                        console.log('API call ', body.id);
                    }
                }).auth(null, null, true, body.access_token);

            } else {
                console.log('api retrieval error');
            }

        }).auth("zYtoCnOkTfGWJvqs4rpVvQ", "MgnGKHUUq1LNP1g6P69ja81z3YkXLf5d");

        return;

    }
    res.redirect('https://zoom.us/oauth/authorize?response_type=code&client_id=' + "zYtoCnOkTfGWJvqs4rpVvQ" + '&redirect_uri=' + "http://bd526e407e1b.ngrok.io")
})

app.listen(5000, () => console.log(`ZOMO listening at PORT: 5000`))




