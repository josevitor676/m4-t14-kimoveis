import { Request, Response } from "express"
import { ICreateRealState } from "../interfaces/realState.interfaces"
import { createRealStateService } from "../services/RealState/createRealState.service"
import listRealStateService from "../services/RealState/listRealState.service"

const createRealStateController = async (req: Request, res: Response): Promise<Response> => {

    const dataRealState: ICreateRealState = req.body

    const realState = await createRealStateService(dataRealState)

    return res.status(201).json(realState)
}

const listRealStateController = async (req: Request, res: Response): Promise<Response> => {

    const listRealState = await listRealStateService()

    return res.json(listRealState)
}

export {
    createRealStateController,
    listRealStateController
}