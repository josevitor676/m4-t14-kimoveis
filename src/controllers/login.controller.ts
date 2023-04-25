import { Request, Response } from "express"
import { ILogin } from "../interfaces/login.interfaces"
import loginService from "../services/Login/login.service"

const loginController = async (req: Request, res: Response): Promise<Response> => {
    
    const loginData: ILogin = req.body

    const token = await loginService(loginData)
    
    return res.status(200).json({
        token: token
    })
}

export {
    loginController
}