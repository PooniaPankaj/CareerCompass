import express from "express"; // just specify type = "module" in json file to avoid the error  ES6
import dotenv from "dotenv";
import authRoute from './routes/auth.js';
import mongoose from 'mongoose';



const app = express();
dotenv.config();
// app.use(cookieParser())

const connect = async ()=>{

    try{
 
        await mongoose.connect(process.env.MONGO);
        
        // await  mongoose.connect("mongodb+srv://HotelHub:HotelHub@hotelbooking.xssrise.mongodb.net/?retryWrites=true&w=majority");
        
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



app.use(express.json());

app.use("/api/auth",authRoute);
app.use("api/auth",authRoute);


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