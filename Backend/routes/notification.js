import express from "express";
import { verifyAdmin } from "../Utils/verifyAdmin.js";
import { addNotification, deleteNotification, getNotification } from "../Controller/Notification.js";
const router = express.Router();

router.post("/addNotification",verifyAdmin,addNotification);

router.get("/getNotification",getNotification)

router.delete("/deleteNotification/:id",deleteNotification);


export default router;