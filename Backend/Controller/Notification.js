import Notification from "../Models/Notification.js";
import User from "../Models/User.js";
import Jwt from "jsonwebtoken";
export const addNotification = async(req,res,next)=>{
    try {
        const newNotification = new Notification({
            batch:req.body.batch,
            msg:req.body.msg
        })
        await newNotification.save();
        res.status(201).send("New notification message added!");
    } catch (error) {
        next(error);
    }
}

export const getNotification = async(req,res,next)=>{
    try {
        const token = req.cookies.access_token;
        Jwt.verify(token , process.env.JWT , (err,user)=>{
            if (err){console.log("error"); return next(createError(403,"Token is not valid "));}
            req.user = user;
        })

        const usr_ = await User.findById(req.user.id);

        const allnotification = await Notification.find({batch:usr_.batch});
        res.status(200).json(allnotification);
        
    } catch (error) {
        next(error);
    }
}