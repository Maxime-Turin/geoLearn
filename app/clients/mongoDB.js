const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
client.connect();
const db = client.db('geoLearn');

module.exports = { db };
