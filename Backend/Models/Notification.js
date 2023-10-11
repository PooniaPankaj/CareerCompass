import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    batch:{
        type:Number,
        required:true,
    },
    msg:{
        type:String,
        required:true,
    }
});
export default mongoose.model("Notification",NotificationSchema);
