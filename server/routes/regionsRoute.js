import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.regionsController.getRegions);
router.get("/:id", storeController.regionsController.getRegionById);
router.post("/", storeController.regionsController.addRegion);
router.put("/:id", storeController.regionsController.updateRegion);
router.delete("/:id", storeController.regionsController.deleteRegion);
router.get("/query/:id", storeController.regionsController.getAllRegionQuery);

export default router;