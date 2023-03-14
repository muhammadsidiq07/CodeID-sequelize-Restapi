import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.jobsController.getJobs);
router.get("/:id", storeController.jobsController.getRegJobsById);
router.post("/", storeController.jobsController.addJobs);
router.put("/:id", storeController.jobsController.updateJobs);
router.delete("/:id", storeController.jobsController.deleteJobs);
router.get("/query/:id", storeController.jobsController.getAllJobsQuery);

export default router;