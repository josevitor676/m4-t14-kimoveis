import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValidMiddleware";
import { createUserSchema, updateUserSchema } from "../schemas/users.schemas";
import ensureEmailExistsMiddleware from "../middlewares/ensureEmailExists.middleware";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureIsAdminMiddleware from "../middlewares/ensureIsAdmin.middleware";
import ensureUpdateMiddleware from "../middlewares/ensureUpdate.middleware";

const usersRoutes: Router = Router()

usersRoutes.post('', ensureDataIsValidMiddleware(createUserSchema), ensureEmailExistsMiddleware,createUserController);
usersRoutes.get('', ensureTokenIsValidMiddleware, ensureIsAdminMiddleware ,listUsersController);
usersRoutes.patch('/:id', ensureTokenIsValidMiddleware, ensureUpdateMiddleware ,ensureDataIsValidMiddleware(updateUserSchema), updateUserController);
usersRoutes.delete('/:id', ensureTokenIsValidMiddleware ,deleteUserController);


export default usersRoutes