import { Router } from "express";
import { createRealStateController, listRealStateController } from "../controllers/realState.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValidMiddleware";
import { createRealStateSchema } from "../schemas/realState.schemas";

const realStateRoutes: Router = Router();

realStateRoutes.post('', ensureDataIsValidMiddleware(createRealStateSchema) ,createRealStateController);
realStateRoutes.get('', listRealStateController);

export default realStateRoutes