import mongoose from "mongoose";

const CommonSchema = new mongoose.Schema({
    title: {
        type: Array
    },
    description: {
        type: Array
    },
    content: {
        type: String
    },
    code:{
        type: String,
        required: true,
    }

})

const CommonModel = mongoose.model("Common", CommonSchema);

export default CommonModel