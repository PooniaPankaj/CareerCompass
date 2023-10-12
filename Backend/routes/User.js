import express from 'express';
import { verifyAdmin, verifyUser } from '../Utils/verifyAdmin.js';
import { getAllUser, getUser, updateUser, verifyEmail } from '../Controller/User.js';
const router = express.Router();

router.get("/getalluser",verifyAdmin,getAllUser);
router.get("/:id",verifyAdmin,getUser);
router.get("/profile/:id",verifyUser,getUser);
router.put("/:id",verifyAdmin,updateUser);
router.get("/:id/verify/:token",verifyEmail);
export default router;