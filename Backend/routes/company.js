import express  from "express";
import { addCompany, getCompany, removeCompany, updateCompany } from "../Controller/Company.js";
import { verifyAdmin, verifyToken } from "../Utils/verifyAdmin.js";
const router = express.Router();

router.post("/addcompany",verifyAdmin,addCompany);
router.put("/:id",verifyAdmin,updateCompany)
router.delete("/:id",verifyAdmin,removeCompany);
router.get("/getcompany",verifyToken,getCompany);
export default router;