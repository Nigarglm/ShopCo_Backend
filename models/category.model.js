import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    color:{
        type: String,
        required: true,
    },
    size:{
        type: Array,
        required: true,
    },
    

    
})

export default  mongoose.model("Category", categorySchema);