import express from "express";
import { ContactFormHandler } from "../controllers/contactController.js";


const router = express.Router();

router.post("/contactMail", ContactFormHandler);


export default router;