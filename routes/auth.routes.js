import express from 'express'

import { createUser, getUsers, getSingleUser, editUser, deleteUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getSingleUser)
router.patch('/:id', editUser)
router.delete('/:id', deleteUser)

export default router;