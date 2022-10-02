const mongoose = require('mongoose');
const username = 'bhavinchauhan98';
const password = 'mLVWdAv4ueHsPUkq';
const custername = 'cluster0';
const databaseName = 'fitpage';
const url = `mongodb+srv://${username}:${password}@${custername}.zokdbhv.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

module.exports = db;
