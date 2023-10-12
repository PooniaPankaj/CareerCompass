import User from '../Models/User.js';
import bcrypt from "bcryptjs";
import { createError } from '../Utils/error.js';
import jwt from "jsonwebtoken"
import Token from "../Models/Token.js";
import {sendEmail} from "../Utils/Sendemail.js";
import crypto from "crypto";

export const register = async(req,res,next)=>{
    console.log(req.body);
    try{

        let user = await User.findOne({email:req.body.email});
        if (user){
            return res.status(409).send({message : "user with given mail already exist"});
        }

        console.log(req.body);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const Admin = (req.body.token === process.env.AdminToken ? 1 :0);

        const newUser = new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            phoneNumber:req.body.phoneNumber,
            email:req.body.email,
            batch:req.body.batch,
            branch:req.body.branch,
            password:hash,
            admin:Admin,
            
        })

        user = await newUser.save();


        const token1 = await new Token({
            userId:user._id,
            token:crypto.randomBytes(32).toString("hex"),
        }).save();
        console.log("hello");
        const url = `${process.env.BASE_URL}users/${user._id}/verify/${token1.token}`
        console.log(url);
        await sendEmail(user.email,"Verify Email",url);
        res.status(201).json("An email sent to your account please verify !");

    }
    catch(error){
        next(error);
    }
}
export const login = async(req,res,next)=>{
    try {
        const user =await User.findOne({email:req.body.email});
        if (!user) return next(createError(400,"Wrong Password or username"));
        const isPasswordCorrect = await bcrypt.compareSync(req.body.password  , user.password);
        if (!isPasswordCorrect)return next(createError(400,"Wrong Password or username"));


        if (!user.verified){
            let token1 = await Token.findOne({userId:user._id});
            if (!token1){

                token1 = await new Token({
                    userId:user._id,
                    token:crypto.randomBytes(32).toString("hex"),
                }).save();
        
                const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`
                await sendEmail(user.email,"Verify Email",url);

            }
            return res.status(400).send({message:"An email has been sent please verify your account"});
        }

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
        if (usr_.admin === 0){
            return next(createError(404,"Not allowed"));
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true}); // it basically get id from the request params and we use mongodb set method to update the data and used new : true to set the updated data into the variable
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}

export const verifyEmail = async(req,res,next)=>{
    try {
        const user = await User.findOne({_id:req.params.id});
        if (!user){
            return res.status(404).send({message:"Invalid Link"})
        }

        const token = await Token.findOne({
            userId:user._id,
            token:req.params.token
        });
        if (!token){
            return res.status(404).send({message:"Invalid Link"})
        }

        await User.updateOne({_id:user.id,verified:true});
        await token.remove()

        res.status(200).send("Email has been verified successfully!")
        
    } catch (error) {
        next(error);
    }
}