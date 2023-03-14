import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.departmentsController.getDepartment);
router.get("/:id", storeController.departmentsController.getDepartmentById);
router.post("/", storeController.departmentsController.addDepartment);
router.put("/:id", storeController.departmentsController.updateDepartment);
router.delete("/:id", storeController.departmentsController.deleteDepartment);
router.get("/query/:id", storeController.departmentsController.getDepartmentQueryById);

export default router;