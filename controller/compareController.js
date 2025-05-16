import { streamingServices } from '../data.js';

export const priceComparer = (req, res) => {
    const { service1, service2 } = req.body;
    const price1 = streamingServices[service1];
    const price2 = streamingServices[service2];

    if (price1 === undefined || price2 === undefined) {
        return res.status(400).json({ error: 'Invalid streaming service name(s)' });
    }

    const cheaper = price1 < price2 ? price1 : price2;
    res.json({ cheaperPrice: cheaper });
};
