const express = require('express');
const config = require('../../config');
const request = require('request');
const passport = require('passport');
const OAuth2Strategy = require('passport-oauth2');

// module.exports.isAuthorized = (req, res, next) => {
//     if (req.query.code) {

//         let url = 'https://zoom.us/oauth/token?grant_type=authorization_code&code=' + req.query.code + '&redirect_uri=' + process.env.redirectURL;

//         request.post(url, (error, response, body) => {

//             // Parse response to JSON
//             body = JSON.parse(body);

//             // Logs your access and refresh tokens in the browser
//             console.log(`access_token: ${body.access_token}`);
//             console.log(`refresh_token: ${body.refresh_token}`);

//             if (body.access_token) {

//                 request.get('https://api.zoom.us/v2/users/me', (error, response, body) => {
//                     if (error) {
//                         console.log('API Response Error: ', error)
//                     } else {
//                         body = JSON.parse(body);
//                         // Display response in console
//                         console.log('API call ', body);
//                         // Display response in browser
//                         var JSONResponse = '<pre><code>' + JSON.stringify(body, null, 2) + '</code></pre>'
//                         console.log(JSONResponse);
//                     }
//                 }).auth(null, null, true, body.access_token);
//                 next();
//             } else {
//                 console.log('Error: can\'t post request');
//             }

//         }).auth(config.ZOOM_CLIENT_ID, config.ZOOM_CLIENT_SECRET);
//     } else {
//         res.redirect('https://zoom.us/oauth/authorize?response_type=code&client_id=' + config.ZOOM_CLIENT_ID + '&redirect_uri=' + config.ZOOM_REDIRECT_URI)
//     }
//     // next();
// };

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://zoom.us/oauth/authorize',
    tokenURL: 'https://zoom.us/oauth/token',
    clientID: "zYtoCnOkTfGWJvqs4rpVvQ",
    clientSecret: "MgnGKHUUq1LNP1g6P69ja81z3YkXLf5d",
    callbackURL: "http://localhost:5000/auth/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
        console.log(accessToken);
        console.log(profile);
        User.findOrCreate({ exampleId: profile.id }, function (err, user) {
            return cb(err, user);
        });
  }
));
