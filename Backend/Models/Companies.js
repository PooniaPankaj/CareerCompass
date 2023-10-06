import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
    company:{
        type:[String]
    }
})