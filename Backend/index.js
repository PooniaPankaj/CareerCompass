import express from "express"; // just specify type = "module" in json file to avoid the error  ES6
import dotenv from "dotenv";
import authRoute from './routes/auth.js';
import companyRoute from './routes/company.js';
import userRoute from './routes/User.js';
import notificationRoute from './routes/notification.js';
import topRecruiter from './routes/topRecruiter.js';
import Alumni from './routes/alumni.js';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();
// app.use(cookieParser())

const connect = async ()=>{

    try{
 
        await mongoose.connect(process.env.MONGO);
        

        console.log("Connected to mongoDB!")
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Mongo Db disconnected");
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
})


app.use(cookieParser())
app.use(express.json());

import cors from 'cors';
app.use(cors({origin:"*"}))

app.use("/api/auth",authRoute);
app.use("/api/company",companyRoute);
app.use("/api/user",userRoute);
app.use("/api/Notification",notificationRoute);
app.use("/api/topRecruiter",topRecruiter);
app.use("/api/alumni",Alumni);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMsg = err.message || "Something went wrong! ";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMsg,
        stack:err.stack
    })

})




app.listen(8800,()=>{
    connect()
    console.log("connected to backend at port 8800! ")
}
);