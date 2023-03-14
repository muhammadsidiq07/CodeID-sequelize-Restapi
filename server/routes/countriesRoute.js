import { Router } from "express";
import storeController from "../controllers/indexcontrollers.js";

const router = Router();

router.get("/", storeController.countriesController.getCountries);
router.get("/:id", storeController.countriesController.getCountriesById);
router.post("/", storeController.countriesController.addCountries);
router.put("/:id", storeController.countriesController.updateCountries);
router.delete("/:id", storeController.countriesController.deleteCountries);
router.get("/query/:id", storeController.countriesController.getAllCountriesQuery);

export default router;