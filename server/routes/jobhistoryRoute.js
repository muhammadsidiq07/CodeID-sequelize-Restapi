import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.jobhistoryController.getJobHistory);
router.get("/:id", storeController.jobhistoryController.getRegJobHistoryById);
router.post("/", storeController.jobhistoryController.addJobHistory);
router.put("/:id", storeController.jobhistoryController.updateJobHistory);
router.delete("/:id", storeController.jobhistoryController.deleteJobHistory);
router.get("/query/:id", storeController.jobhistoryController.getAllJobHistoryQuery);

export default router;