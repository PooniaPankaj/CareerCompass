import User from '../Models/User.js';
import bcrypt from "bcryptjs";
import { createError } from '../Utils/error.js';
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
        const token = jwt.sign({id:newUser._id ,admin:newUser.admin},process.env.JWT);
        const {password , admin , ...otherDetails} = newUser._doc;
        // console.log(token);
        res.cookie("access_token",token,{
            httpOnly:true, // doesn't allow any client secret to reach this cookie
        }).status(201).json("user has been created !");

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
        // console.log(token);
        res.cookie("access_token",token,{
            httpOnly:true, // doesn't allow any client secret to reach this cookie
        }).status(201).json({...otherDetails});

    } catch (error) {
        next(error);
    }
}

export const getAllUser = async(req,res,next)=>{
    try {

        const alluser = await User.find();
        res.status(200).json(alluser);
        
    } catch (error) {
        next(error);
    }
}

export const getUser = async(req,res,next)=>{
    try {
        const usr_ = await User.findById(req.params.id);
        res.status(200).json(usr_);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async(req,res,next)=>{
    try {
        const usr_ = await User.findById(req.params.id);
        if (usr_.admin){
            return next(createError(404,"Not allowed"));
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true}); // it basically get id from the request params and we use mongodb set method to update the data and used new : true to set the updated data into the variable
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}