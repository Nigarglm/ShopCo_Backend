import express from 'express';
import { getTopSelling } from '../controllers/product.controller.js';

const router = express.Router();


router.get('/', getTopSelling)




 
export default router;
