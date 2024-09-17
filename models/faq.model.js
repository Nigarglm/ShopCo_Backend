import mongoose from "mongoose";
 
const FaqSchema = new mongoose.Schema({
    title:{
        type:Array
    },
    description:{
        type: Array
    }
})

const FaqModel =  mongoose.model("Faq", FaqSchema);

export default FaqModel