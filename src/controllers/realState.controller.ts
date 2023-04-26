import { Request, Response } from "express"
import { ICreateRealState } from "../interfaces/realState.interfaces"
import { createRealStateService } from "../services/RealState/createRealState.service"

const createRealStateController = async (req: Request, res: Response): Promise<Response> => {

    const dataRealState: ICreateRealState = req.body

    const realState = await createRealStateService(dataRealState)

    return res.status(201).json(realState)
}

export {
    createRealStateController
}