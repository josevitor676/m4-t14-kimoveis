import { Router } from "express";
import { createScheduleController, listSchedulesByRealState } from "../controllers/schedules.controller";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const scheduleRoutes: Router = Router()

scheduleRoutes.post('', ensureTokenIsValidMiddleware ,createScheduleController);
scheduleRoutes.get('/realState/:id', ensureTokenIsValidMiddleware ,listSchedulesByRealState);
export default scheduleRoutes