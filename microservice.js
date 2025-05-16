
const express = require('express');
const app = express();
const port = 3000;
const streamingServices = require('./data');

app.use(express.json());

app.get('/compare', (req, res) => {
    const {name} = req.body;
    res.json() = 
});

app.listen(port, () => {
    console.log(`Comparer microservice listening on port ${port}`);
});