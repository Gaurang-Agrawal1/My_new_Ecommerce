import { sendContactMail } from "../helpers/sendMail.js";

export const ContactFormHandler = (req,res)=>{
    try{
        const {email,username,message} = req.body;
        sendContactMail(email,username,message);
        res.status(200).json({message:"Email sent successfully"});

    }catch(error){
        console.log(error.message);
    }
}