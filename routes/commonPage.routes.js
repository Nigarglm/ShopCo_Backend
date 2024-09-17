import express from 'express';
 import {createCommon, getAllCommons, getCommonById, updateCommon, deleteCommon } from '../controllers/commonPage.controller.js'

 const router = express.Router();
 
 router.post('/', createCommon)

 router.get('/', getAllCommons)

 router.get('/:id', getCommonById)

 router.patch('/:id', updateCommon)

 router.delete('/:id', deleteCommon)

 export default router