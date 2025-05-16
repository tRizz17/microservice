import express from 'express';
import { priceComparer } from '../controller/compareController.js';

const router = express.Router();

router.post('/compare', priceComparer);

export default router;
