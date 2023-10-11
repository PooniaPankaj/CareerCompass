import mongoose from "mongoose";

const topRecruiterSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    src:{
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