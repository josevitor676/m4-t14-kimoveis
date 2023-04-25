import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Users } from "../entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors"

const ensureEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const userRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const emailExist = await userRepository.findOne({
        where: {
            email: req.body.email
        }
    })

    if(emailExist) {
        throw new AppError('Email already exists', 401)
    }

    return next()

}

export default ensureEmailExistsMiddleware