import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
phone:{
    type: String,
    required: true,
},
address:{
    type: String,
    required: true,
}
})

const ContactModel =  mongoose.model("Contact", contactSchema);

export default ContactModel


