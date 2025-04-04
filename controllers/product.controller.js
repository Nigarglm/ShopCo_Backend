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
        console.log(products);
        response.json(products);
    } catch (error) {
        response.status(500).send({ message: 'An error occurred while fetching the products', error: error.message });
    }
};

export const createProduct = async (request, response) => {
    try {
        const { raiting, ...otherData } = request.body;
        if (raiting && (raiting < 0 || raiting > 5)) {
            return response.status(400).send({ message: 'Raiting must be between 0 and 5' });
        }
        const product = new Product({ raiting: raiting || 0, ...otherData });  // Default rating is 0 if not provided
        
        const savedProduct = await product.save();
        response.status(201).send(savedProduct);
    } catch (error) {
        response.status(400).send({ message: 'An error occurred while creating the product', error: error.message });
    }
};

export const updateProduct = async (request, response) => {
    try {
        const { raiting, ...otherData } = request.body;

        if (raiting && (raiting < 0 || raiting > 5)) {
            return response.status(400).send({ message: 'Raiting must be between 0 and 5' });
        }

        const updatedProduct = await Product.findByIdAndUpdate(
            request.params.id, 
            { raiting, ...otherData }, 
            { new: true }
        );

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
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
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
        const { title, category, color, size, raiting } = req.query;
        let query = {};

        if (title) query.title = new RegExp(title, 'i');
        if (category) query.category = category;
        if (color) query.color = color;
        if (size) query.size = size;
        if (raiting) query.raiting = { $gte: raiting };  // Raiting eşit veya büyük olmalı

        const products = await Product.find(query);
        res.json(products);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while searching for products', error: error.message });
    }
};

export const getNewArrival = async (req, res) => {
    try {
        const products = await Product.find({ newArrival: true });

        if (!products || products.length === 0) {
            return res.status(404).send({ message: 'No new arrivals found' });
        }

        res.json(products);
    } catch (error) {
        res.status(500).send({ 
            message: 'An error occurred while fetching new arrivals', 
            error: error.message 
        });
    }
};


export const getTopSelling = async (req, res) => {
    console.log(req)
    try {
        const products = await Product.find({ topSelling: true });
        res.json(products);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while fetching top selling products', error: error.message });
    }
};
