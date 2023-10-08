import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phoneNumer:{
        type:String,
        required:true,
        uique:true,
    }
    ,
    batch:{
        type:Number,
        required:true,
    },
    companyApplied:[
        {
            jobid : String,
            role : String,
        }
    ],
    branch:{
        type:String,
        required:true,
    },
    companySelected:[
        {
            jobid:String,
            role:String,
        }
    ],
    admin:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
    },


},{
    timestamps:true
})
export default mongoose.model("User",UserSchema);