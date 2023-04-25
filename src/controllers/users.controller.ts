import { Request, Response } from "express"
import { ICreateUser, IUpdateUser } from "../interfaces/users.interfaces"
import createUserService from "../services/Users/createUser.service"
import listUsersService from "../services/Users/listUsers.service"
import updateUserService from "../services/Users/updateUser.service"
import deleteUserService from "../services/Users/deleteUser.service"

const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const dataUser: ICreateUser = req.body

    const user = await createUserService(dataUser)

    return res.status(201).json(user)

}

const listUsersController = async (req:Request, res: Response): Promise<Response> => {

    const users = await listUsersService()

    return res.json(users)
} 

const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(req.params.id)
    const dataUser: IUpdateUser = req.body

    const updateUser = await updateUserService(userId, dataUser)

    return res.status(203).json(updateUser)
}

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}

export {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController
}