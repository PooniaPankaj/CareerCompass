import nodemailer from "nodemailer";

export const sendEmail = async(email,subject,text)=>{
    // console.log(email,subject,text);
    // let testAccount = await nodemailer.createTestAccount();

    try {
        const transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            // secure:Boolean(process.env.SECURE),
            secure:true,
            auth:{
                user:'pankajpoonia0703@gmail.com',
                pass:'bjhrlzirdvbdyrwb',
            },
            // host: 'smtp.ethereal.email',
            // service:'gmail',
            // port: 587,
            // auth: {
            //     user:process.env.USER,
            //     pass:process.env.PASS,
            // }

        })
        await transporter.sendMail({
            from: '"Pankaj " <pankajpoonia0703@gmail.com>',
            // to:email,
            to:"pankaj0703poonia@gmail.com",
            subject:subject,
            text:text
        })
        console.log("Email sent Successfully");
    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
}


// import nodemailer from "nodemailer";
// // const Mailgen = require('mailgen');
// import { EMAIL, PASSWORD } from "./env.js"

// let config = {
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     logger:true,
//     debug:true,
//     secureConnection:false,
//     auth: {
//         user: EMAIL,
//         pass: PASSWORD
//     },
//     tls :{
//         rejectUnAuthorized:true,
//     }
// }
// let transporter = nodemailer.createTransport(config);
// const sendSGMail = async ({
//     to,
//     sender,
//     subject,


//     text,
// }) => {
//     try {
//         const from = EMAIL;

//         const msg = {
//             to: "pankajpoonia0703@gmail.com", // Change to your recipient
//             from: from, // Change to your verified sender
//             subject: "hello",

//             text: "hello",
//         };
//         // console.log("hello");
//         return await transporter.sendMail(msg);
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const sendEmail = async (email, subject, text) => {
//     const args = {
//         email,
//         EMAIL,
//         subject,
//         text
//     }
//     //   if (!process.env.NODE_ENV === "development") {
//     //     return Promise.resolve();
//     //   } else {
//     return sendSGMail(args);
//     //   }
// };