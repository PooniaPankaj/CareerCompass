import  Jwt  from "jsonwebtoken";
import {createError}  from "./error.js";

export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;

    if (!token){
        return next(createError(401,"You are not authenticated !"));
    }
     
    Jwt.verify(token , process.env.JWT , (err,user)=>{
        if (err) return next(createError(403,"Token is not valid "));
        req.user = user;
        console.log("user",user);
        next();
    })
}

// if we want to delete a account than we have to check whether the user that is requesting for deleting the account is same as that of the one in cookie

export const verifyUser = (req,res,next)=>{
    const token = req.cookies.access_token;

    if (!token){
        return next(createError(401,"You are not authenticated !"));
    }
     
    Jwt.verify(token , process.env.JWT , (err,user)=>{
        if (err) return next(createError(403,"Token is not valid "));
        req.user = user;
        console.log("user",user);
        if (req.user.id === req.params.id || req.user.admin){
            next()
        }
        else{
            return next(createError(403,"You are not authorized !"));

        }
    })
    
}
// checking if the user logged is admin or not

export const verifyAdmin = (req,res,next)=>{
    const token = req.cookies.access_token;

    if (!token){
        return next(createError(401,"You are not authenticated !"));
    }
     
    Jwt.verify(token , process.env.JWT , (err,user)=>{
        if (err) return next(createError(403,"Token is not valid "));
        req.user = user;
        console.log("user",user);
        if (req.user.admin){
            next()
        }
        else{
            return next(createError(403,"You are not authorized !"));
    
        }

    })
    
}