import nodemailer from "nodemailer";

 export const sendOTP = async (email,otp)=>{
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });
    
        let info = await transporter.sendMail({
            from:`GAURANG AGRAWAL`,
            to:email,
            subject:"Your 4 digit One-Time-Password--->",
            html:`<h2>HELLO </h2> <p> Enter this OTP : ${otp}</p>`,
        })

    console.log("Message sent: %s", info.messageId);
    }catch(error){
        console.log(error);
    }
}

export const sendContactMail = async(email,username,message) =>{
    try{
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });
    
        let info = await transporter.sendMail({
            from:`CAP-COMMERCE`,
            to:email,
            subject:"CAP-COMMERCE CONTACT HELP CENTER",
            html:`<h2>Hello User</h2> <p> Your Query for the following message -> <strong>${message}</strong> <br/>  </p><p>is being processed and We'll notify you soon </p>`,
        })

    console.log("Message sent: %s", info.messageId);
    }catch(error){
        console.log(error);
    }
}