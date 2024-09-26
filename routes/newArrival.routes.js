import express from 'express';
import { getNewArrival } from '../controllers/product.controller.js';

const router = express.Router();


router.get('/', getNewArrival)




 
export default router;
