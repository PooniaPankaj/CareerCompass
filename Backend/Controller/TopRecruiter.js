import TopRecruiter from "../Models/TopRecruiter";

export const addCompany = async(req,res,next)=>{
    try {
        const newCompany = new TopRecruiter({
            name:req.body.name,
            photo:req.body.photo,
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
