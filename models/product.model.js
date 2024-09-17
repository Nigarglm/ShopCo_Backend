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
    newArrival: {
        type: Boolean,
        required: true,
        default: false,
    },
    topSelling: {
        type: Boolean,
        required: true,
        default: false,
    },
    // rating:{
    //     type: Number,
    //     required: true,
    //     default: 0,
    // }

   
})

const Product = mongoose.model("Product", ProductSchema);

export default Product;