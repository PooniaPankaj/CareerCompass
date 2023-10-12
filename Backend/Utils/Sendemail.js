import nodemailer from "nodemailer";

export const sendEmail = async(email,subject,text)=>{
    // console.log(email,subject,text);
    let testAccount = await nodemailer.createTestAccount();

    try {
        const transporter = nodemailer.createTransport({
            // host:process.env.HOST,
            // port:Number(process.env.EMAIL_PORT),
            // secure:Boolean(process.env.SECURE),
            // auth:{
            //     user:process.env.USER,
            //     pass:process.env.PASS,
            // },
            // host: 'smtp.ethereal.email',
            service:'gmail',
            // port: 587,
            auth: {
                user:process.env.USER,
                pass:process.env.PASS,
            }
            
        })
        await transporter.sendMail({
            from: process.env.USER,
            to:email,
            subject:subject,
            text:text
        })
        console.log("Email sent Successfully");
    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
}
