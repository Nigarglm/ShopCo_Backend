import express from 'express';
import { getProductById, getProducts, createProduct, updateProduct, deleteProduct, searchProduct } from '../controllers/product.controller.js'; 

const router = express.Router();

router.get("/:id", getProductById )

router.get("/", getProducts )

router.post("/", createProduct )

router.patch("/:id", updateProduct )

router.delete("/:id", deleteProduct )

router.get("/", searchProduct )


export default router;





