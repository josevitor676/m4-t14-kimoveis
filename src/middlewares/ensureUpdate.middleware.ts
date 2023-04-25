import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Users } from "../entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors"

const ensureUpdateMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const infoUser = req.user
    const usersRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const userFind = await usersRepository.findOneBy({id: parseInt(req.params.id)})

    if(infoUser.admin === true) {
        return next()
    }

    if(infoUser.admin === false &&  userFind!.id !== infoUser.id) {
        throw new AppError(`You don't have permission for this feature` , 401)
    }

    return next()
}

export default ensureUpdateMiddleware