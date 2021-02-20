const express = require('express');
const bodyParser = require('body-parser');
var auth = require('./auth');
const passport = require('passport');

const app = express();



// app.get('/auth', passport.authenticate('oauth2'),(req,res) => {
//     console.log('working!');
// });

// app.get('/auth/callback',
//   passport.authenticate('oauth2', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

// app.get('/', (req,res) => {
//     console.log('working!');
// });

// app.post('/meeting-created', auth.isAuthorized , (req, res) => {

//     let event;

//     try {
//         event = JSON.parse(req.body);
//     } catch (err) {
//         res.status(400).send(`Webhook Error: ${err.message}`);
//     }

//     console.log(event)
//     if (req.headers.authorization === config.ZOOM_WEBHOOK_VERIFICATION_TOKEN) {
//         res.status(200);

//         console.log("Webinar Ended Webhook Recieved.") 

//         res.send();
//         var uuid = event.payload.object.uuid;
//         //Double encode the uuid for validation incase it contains slashes
//         var euuid = encodeURIComponent(encodeURIComponent(uuid));

//         var options = {
//             uri: "https://api.zoom.us/v2/users/" + euuid + "/meetings",
//             auth: {
//                 'bearer': token
//             },
//             headers: {
//                 'User-Agent': 'Zoom-api-Jwt-Request',
//                 'content-type': 'application/json'
//             },
//             json: true
//         };

//         rp(options)
//             .then(function (response) {

//                 var myregistrantobj= response.created_at;
//                 console.log(myregistrantobj);

//             })
            
//             .catch(function (err) {
//                 // API call failed...
//                 console.log('API call failed, reason ', err);
//             });


//     } else {
//         res.status(403).end('Access forbidden');
//         console.log("Invalid Post Request.")
//     }
// });
