import mongoose from "mongoose";


const Notes = new mongoose.Schema({
    createDate: {type: String, required: true},
    date: {type: String, required: true},
    name: {type: String, required: true},
    select: {type: String, required: true},
    selectImage: {type: String, required: true},
    text: {type: String, required: true},
    active: {type: Boolean, required: true}
})

export default mongoose.model('Notes', Notes)