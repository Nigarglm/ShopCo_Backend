import mongoose from "mongoose";

const ProductSchema  = mongoose.Schema({
    name: {
       type: String,
       required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    color: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
   
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;