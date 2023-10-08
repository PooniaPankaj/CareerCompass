import mongoose from "mongoose";

const topRecruiterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    },
    details:{
        type:String,
        required:true,
    },
    src_link:{
        type:String,
        required:true
    }
})

export default  mongoose.model("TopRecruiter",topRecruiterSchema);