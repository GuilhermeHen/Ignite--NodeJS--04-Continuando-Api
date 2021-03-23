import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory/index";
import importCategoryController from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("/", (request, response) => {
  console.log("entrou na rota");
  return createCategoryController().handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  "/imports",
  upload.single("file"),
  (request, response) => {
    return importCategoryController.handle(request, response);
  }
);

export default categoriesRoutes;
