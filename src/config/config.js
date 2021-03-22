require('dotenv/config');

const user = process.env.MONGO_USER;

const password = process.env.MONGO_PASS;

const databaseURL = `mongodb+srv://${user}:${password}@cluster0.nisac.mongodb.net/pyeDatabase?retryWrites=true&w=majority`;

module.exports = databaseURL;
