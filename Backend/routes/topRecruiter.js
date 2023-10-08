import express from "express";
import { verifyAdmin } from "../Utils/verifyAdmin";
import { addCompany, deleteCompany, updateCompany } from "../Controller/TopRecruiter";

const router = express.Router();

router.post("/addcompany",verifyAdmin,addCompany);
router.delete("/:id",verifyAdmin,deleteCompany);
router.put("/:id",verifyAdmin,updateCompany);

export default router;