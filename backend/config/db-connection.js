const dotenv = require('dotenv');
dotenv.config();

const dbConnection = {
    url: process.env.LAZER_DB_URI,
}

module.exports = dbConnection;