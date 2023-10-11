import express from "express";
import { verifyAdmin } from "../Utils/verifyAdmin.js";
import { addNotification, getNotification } from "../Controller/Notification.js";
const router = express.Router();

router.post("/addNotification",verifyAdmin,addNotification);

router.get("/getNotification",getNotification)

export default router;