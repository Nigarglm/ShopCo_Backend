import mongoose from "mongoose";

const ProductSchema  = mongoose.Schema({
    title: {
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
        type: Array,
        required: true,
    },
    color: { 
        type: Array,
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