import express from 'express';
import cors from 'cors';
import { streamingServices } from './data.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/compareTwo', (req, res) => {
    const service1 = req.query.service1;
    const service2 = req.query.service2;

    const price1 = streamingServices[service1];
    const price2 = streamingServices[service2];

    if (price1 === undefined || price2 === undefined) {
        return res.status(400).json({ error: 'Invalid streaming service name(s)' });
    }

    const cheaper = price1 < price2 ? service1 : service2;
    res.json({ cheaper_service: cheaper, price: streamingServices[cheaper] });
});


// Start server
// Change port # here if you want to use a different one
const port = 3000;
app.listen(port, () => {
    console.log(`Comparer microservice listening on port ${port}`);
});
