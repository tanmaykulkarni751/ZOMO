const dotenv = require('dotenv');

dotenv.config();

const config = {
    FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
    FIREBASE_DOMAIN: process.env.FIREBASE_DOMAIN,
    FIREBASE_ID: process.env.FIREBASE_ID,
    ZOOM_CLIENT_ID: process.env.ZOOM_CLIENT_ID,
    ZOOM_CLIENT_SECRET: process.env.ZOOM_CLIENT_SECRET,
    ZOOM_WEBHOOK_VERIFICATION_TOKEN: process.env.ZOOM_WEBHOOK_VERIFICATION_TOKEN,
    PORT: process.env.PORT,
    ZOOM_REDIRECT_URI: process.env.ZOOM_REDIRECT_URI,
}
console.log(config.ZOOM_CLIENT_ID);

module.exports = config;