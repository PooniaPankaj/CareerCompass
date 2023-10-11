import express from "express";
import { verifyAdmin } from "../Utils/verifyAdmin.js";
import { addCompany, deleteCompany, getCompany, updateCompany } from "../Controller/TopRecruiter.js";


const router = express.Router();

router.post("/addcompany",verifyAdmin,addCompany);
router.delete("/:id",verifyAdmin,deleteCompany);
router.put("/:id",verifyAdmin,updateCompany);
router.get("/getCompany",getCompany);
export default router;