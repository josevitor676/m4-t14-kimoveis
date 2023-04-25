import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValidMiddleware";
import { loginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router();

loginRoutes.post('', ensureDataIsValidMiddleware(loginSchema),loginController);

export default loginRoutes