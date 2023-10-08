import Company from "../Models/Company.js";
import User from "../Models/User.js";
import Jwt from "jsonwebtoken";
export const addCompany = async(req,res,next)=>{

    try {
        
        const newCompany = new Company({
            name:req.body.name,
            branch:req.body.branch,
            role:req.body.role,
            stipend:req.body.stipend,
            jobLocation:req.body.jobLocation,
            batch:req.body.batch,
            skills:req.body.skills,
            jobDescription:req.body.jobDescription,
            lastdatetoapply:req.body.lastdatetoapply,
            linkToApply:req.body.linkToApply,
            
        })
        await newCompany.save();

        res.status(201).send("Company has been added!");
    } catch (error) {
        next(error);
    }
}
export const removeCompany = async(req,res,next)=>{
    try{
        await Company.findByIdAndDelete(req.params.id ); // it basically get id from the request params and we use mongodb set method to update the data and used new : true to set the updated data into the variable
        res.status(200).json("Company has been removed ");
    }
    catch(err){
        next(err);
    }
}
export const updateCompany = async (req,res,next)=>{


    try{
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true}); // it basically get id from the request params and we use mongodb set method to update the data and used new : true to set the updated data into the variable
        res.status(200).json(updatedCompany);

    }
    catch(err){
        next(err);
    }
}

export const getCompany = async (req,res,next)=>{
    try {
        const token = req.cookies.access_token;
        Jwt.verify(token , process.env.JWT , (err,user)=>{
            if (err) return next(createError(403,"Token is not valid "));
            req.user = user;
        })

        const usr_ = await User.findById(req.user.id);

        const allcompany = await Company.find({batch:usr_.batch});
        res.status(200).json(allcompany);
        
    } catch (error) {
        next(error);
    }
}