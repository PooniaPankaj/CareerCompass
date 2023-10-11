import TopRecruiter from "../Models/TopRecruiter.js";


export const getCompany = async(req,res,next)=>{
    try {
        const allcompany = await TopRecruiter.find();
        res.status(200).json(allcompany);
    } catch (error) {
        next(error);
    }
}
export const addCompany = async(req,res,next)=>{
    try {
        const newCompany = new TopRecruiter({
            title:req.body.title,
            src:req.body.src,
            details:req.body.details,
            src_link:req.body.src_link,
        })
        await newCompany.save();
        res.status(201).send("Company has been added!");
    } catch (error) {
        next(error);
    }
}

export const deleteCompany = async(req,res,next)=>{
    try {
        await TopRecruiter.findByIdAndDelete(req.params.id );
        res.status(201).send("Company has been removed !");
    } catch (error) {
        next(error);
    }
}
export const updateCompany = async(req,res,next)=>{
    try {
        const updatedCompany = await TopRecruiter.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true});
        res.status(201).send("Company has been updated!");
    } catch (error) {
        next(error);
    }
}
