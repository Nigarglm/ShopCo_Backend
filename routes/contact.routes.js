import express from 'express';
import { createContact, getContacts, updateContacts, deleteContact } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/', createContact); 

router.get('/', getContacts);

router.delete('/:id', deleteContact); 

router.patch('/:id', updateContacts); 

export default router;
