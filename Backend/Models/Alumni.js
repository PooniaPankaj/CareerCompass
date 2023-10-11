import mongoose from "mongoose";

const AlumniSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    quote:{
        type:String,
        required:true,
    }
})

export default mongoose.model("Alumni",AlumniSchema);
