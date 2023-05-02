import { Request, Response } from "express"
import { ICreateSchedules } from "../interfaces/schedules.interfaces"
import createSchedulesService from "../services/Schedules/createSchedules.service"
import listSchedulesByRealStateService from "../services/Schedules/listSchedulesByRealState.service.service"

const createScheduleController = async (req:Request, res: Response): Promise<Response> => {

    const idUser = req.user.id
    const dataSchedules: ICreateSchedules = req.body

    const schedule = await createSchedulesService(idUser, dataSchedules)

    return res.status(201).json(schedule)
}

const listSchedulesByRealState = async (req: Request, res:Response): Promise<Response>=> {
    
    const idRealState: number = parseInt(req.params.id)

    const ScheduleByRealState = await listSchedulesByRealStateService(idRealState)

    return res.json(ScheduleByRealState)
}

export {
    createScheduleController,
    listSchedulesByRealState
}