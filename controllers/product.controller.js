import Product from '../models/product.model.js';

export const getProductById = async (request, response) => {
    try {
        const product = await Product.findById(request.params.id);
        if (!product) {
            return response.status(404).send({ message: 'Product not found' });
        }
        response.json(product);
    } catch (error) {
        response.status(500).send({ message: 'An error occurred while fetching the product', error: error.message });
    }
};

export const getProducts = async (request, response) => {
    try {
        
        const products = await Product.find({});
        console.log(products)
        response.json(products);
    } catch (error) {
        response.status(500).send({ message: 'An error occurred while fetching the products', error: error.message });
    }
};

export const createProduct = async (request, response) => {
    console.log(request.body)
    try {
        const product = new Product({
            title: request.body.title,
            price: request.body.price,
            category: request.body.category,
            image: request.body.image,
            size: request.body.size,
            color: request.body.color,
            description: request.body.description,
            quantity: request.body.quantity,
        });
        

        const savedProduct = await product.save();
        response.status(201).send(savedProduct);
    } catch (error) {
        response.status(400).send({ message: 'An error occurred while creating the product', error: error.message });
    }
};

export const updateProduct = async (request, response) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!updatedProduct) {
            return response.status(404).send({ message: 'Product not found' });
        }
        response.json(updatedProduct);
    } catch (error) {
        response.status(400).send({ message: 'An error occurred while updating the product', error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);
        if (!deletedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while deleting the product', error: error.message });
    }
};

export const searchProduct = async (req, res) => {
    try {
        const { title, category, color, size } = req.query;
        let query = {};

        if (title) query.title = new RegExp(title, 'i');
        if (category) query.category = category;
        if (color) query.color = color;
        if (size) query.size = size;

        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while searching for products', error: error.message });
    }
};
