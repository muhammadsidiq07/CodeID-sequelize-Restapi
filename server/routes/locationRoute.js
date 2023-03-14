import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.locationsController.getLocations);
router.get("/:id", storeController.locationsController.getRegLocationsById);
router.post("/", storeController.locationsController.addLocations);
router.put("/:id", storeController.locationsController.updateLocations);
router.delete("/:id", storeController.locationsController.deleteLocations);
router.get("/query/:id", storeController.locationsController.getAllLocationsQuery);

export default router;