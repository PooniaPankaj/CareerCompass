import User from '../Models/User.js';
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken"

export const register = async(req,res,next)=>{

    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const Admin = (req.body.token == process.env.AdminToken ? 1 :0);

        const newUser = new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            batch:req.body.batch,
            branch:req.body.branch,
            password:hash,
            admin:Admin,
            
        })

        await newUser.save();
        res.status(201).send("user has been created !");
    }
    catch(error){
        next(error);
    }
}
export const login = async(req,res,next)=>{
    try {
        const user =await User.findOne({email:req.body.email});
        if (!user) return next(createError(404,"User Not Found"));
        const isPasswordCorrect = await bcrypt.compareSync(req.body.password  , user.password);
        if (!isPasswordCorrect)return next(createError(400,"Wrong Password or username"));
        const token = jwt.sign({id:user._id ,admin:user.admin},process.env.JWT)
        const {password , admin , ...otherDetails} = user._doc;

        res.cookie("access_token",token,{
            httpOnly:true, // doesn't allow any client secret to reach this cookie
        }).status(201).json({...otherDetails});

    } catch (error) {
        next(error);
    }
}