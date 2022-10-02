const express = require('express');
const db = require('./db');
const Stock = require('./models/stocks');
const server = express();
const cors = require('cors');

server.use(cors());

server.get('/', async (request, response) => {
    const data = await Stock.find();
    response.status(200).send(data);
});

server.listen(3030, () => {
    console.log('Server is started on port: 3030');
});
