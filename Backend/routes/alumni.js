import express from "express";
import { verifyAdmin } from "../Utils/verifyAdmin.js";
import { addAlumni, getAlumni, removeAlumni, updateAlumni } from "../Controller/Alumni.js";
const router = express.Router();

router.post("/addAlumni",verifyAdmin,addAlumni);
router.get("/getAlumni",getAlumni);
router.delete("/:id",removeAlumni);
router.put("/:id",updateAlumni);
export default router;
