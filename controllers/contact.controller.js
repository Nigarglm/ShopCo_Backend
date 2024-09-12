import Contact from '../models/contact.model.js'

export const createContact = async (req, res) => {
    try {
        const { phone, address } = req.body;

        const contact = new Contact({ phone, address });
        await contact.save();

        res.status(201).json(contact);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data', error: error.message });
    }
}

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching contacts', error: error.message });
    }
}

export const updateContacts = async (req, res) => {
    try {
        const contactId = req.params.id;
        const updatedContact = await Contact.findByIdAndUpdate(contactId, req.body, { new: true });

        if (!updatedContact) {
            return res.status(404).send({ message: 'Contact not found' });
        }

        res.json(updatedContact);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data', error: error.message });
    }
}

export const deleteContact = async (req, res) => {
    try {
        const contactId = req.params.id;
        const deletedContact = await Contact.findByIdAndDelete(contactId);

        if (!deletedContact) {
            return res.status(404).send({ message: 'Contact not found' });
        }

        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting contact', error: error.message });
    }
}
