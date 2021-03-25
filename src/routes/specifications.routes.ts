import { Router } from "express";

import { ensureAuth } from "../middlewares/ensureAuth";
import CreateSpecificationController from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuth);
specificationsRoutes.post("/", createSpecificationController.handle);

export default specificationsRoutes;
