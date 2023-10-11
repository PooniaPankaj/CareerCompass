import Alumni from "../Models/Alumni.js";

export const addAlumni = async(req,res,next)=>{
    try {
        const newAlumni = new Alumni({
            name:req.body.name,
            image:req.body.image,
            title:req.body.title,
            quote:req.body.quote
        })
        await newAlumni.save();
        res.status(201).send("Alumni added");
    } catch (error) {
        next(error);
    }
}
export const removeAlumni = async(req,res,next)=>{
    try {
        await Alumni.findByIdAndDelete(req.params.id);
        res.status(201).send("Alumni has been removed successfully");
        
    } catch (error) {
        next(error);
    }
}
export const getAlumni = async (req,res,next)=>{
    try {
        const allAlumni = await Alumni.find();
        res.status(201).json(allAlumni);
    } catch (error) {
        next(error);
    }
}
export const updateAlumni = async(req,res,next)=>{
    try {
        const updateAlumni = await Alumni.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(updateAlumni);
    } catch (error) {
        next(error);
    }
}