import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
    },
    skills:{
        type:String,
        required:true,
    },
    stipend:{
        type:String,
        required:true,
    },
    jobDescription:{
        type:String,
        required:true,
    },
    jobLocation:{
        type:String,
        required:true,
    },
    linkToApply:{
        type:String,
        required:true,
    },
    batch:{
        type:Number,
        required:true,
    },
    branch:{
        type:[String],
        required:true,
    },
    lastdatetoapply:{
        type:String,
        required:true,
    }
})
export default mongoose.model("Company",CompanySchema);