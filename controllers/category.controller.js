import Category from '../models/category.model.js'

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while fetching categories', error: error.message });
    }
}

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send({ message: 'Category not found' });
        }
        res.json(category);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while fetching the category', error: error.message });
    }
}

export const createCategory = async (req, res) => {
    console.log(req.body,"create")
    try {
        const category = new Category(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).send({ message: 'An error occurred while creating the category', error: error.message });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).send({ message: 'Category not found' });
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).send({ message: 'An error occurred while updating the category', error: error.message });
    }
}


export const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) {
            return res.status(404).send({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while deleting the category', error: error.message });
    }
}
























