import Faq from '../models/faq.model.js'

export const createFaq = async (req, res) =>{
    try {
        const { title, description } = req.body;

        const newFaq = new Faq({ title, description });
        await newFaq.save();

        res.status(201).json(newFaq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getFaq = async (req, res) =>{
    try {
        const faqs = await Faq.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faqs', error });
    }
}

export const updateFaq = async (req, res) =>{
    try {
        const faqId = req.params.id;
        const updates = req.body;

        const faq = await Faq.findByIdAndUpdate(faqId, updates, { new: true, runValidators: true });

        if (!faq) {
            return res.status(404).send({ message: 'Faq not found' });
        }

        res.json(faq);
    } catch (error) {
        res.status(400).send({ message: 'Invalid data', error: error.message });
    }
}

export const deleteFaq = async (req, res) =>{
    try {
        const faqId = req.params.id;
        const faq = await Faq.findByIdAndDelete(faqId);

        if (!faq) {
            return res.status(404).send({ message: 'Faq not found' });
        }

        res.json({ message: 'Faq deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting faq', error: error.message });
    }
}
