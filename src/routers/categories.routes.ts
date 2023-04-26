import { Router } from "express";
import { createCategorieController, listCategoriesByRealStateController, listCategoriesController } from "../controllers/categories.controller";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValidMiddleware";
import { createCategoriesSchema } from "../schemas/categories.schemas";

const categoryRoutes: Router = Router();

categoryRoutes.post('', ensureTokenIsValidMiddleware,ensureIsAdminMiddleware, ensureDataIsValidMiddleware(createCategoriesSchema) ,createCategorieController)
categoryRoutes.get('', listCategoriesController);
categoryRoutes.get('/:id/realState', listCategoriesByRealStateController)

export default categoryRoutes