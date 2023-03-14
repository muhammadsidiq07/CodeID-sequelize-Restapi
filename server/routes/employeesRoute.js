import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.employeesController.getEmployees);
router.get("/:id", storeController.employeesController.getRegEmployeesById);
router.post("/", storeController.employeesController.addEmployees);
router.put("/:id", storeController.employeesController.updateEmployees);
router.delete("/:id", storeController.employeesController.deleteEmployees);
router.get("/query/:id", storeController.employeesController.getAllEmployeesQuery);

export default router;