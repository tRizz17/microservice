import express from 'express';
import cors from 'cors';
import compareRoutes from './routes/compareRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', compareRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Comparer microservice listening on port ${port}`);
});


