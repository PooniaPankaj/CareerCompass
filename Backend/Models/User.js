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
    phoneNumber:{
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
            // default:"None"
        },
        
    ],
    branch:{
        type:String,
        required:true,
    },
    companySelected:[
        {
            jobid:String,
            role:String,
            // default:"None"
        },
    ],
    admin:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        default:false,
    },
    image:{
        type:String,
        default:"https://image.emojisky.com/862/5891862-middle.png",
    },
    collegeName:{
        type:String,
        default:"IIT Mandi"
    },
    gender:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})
export default mongoose.model("User",UserSchema);