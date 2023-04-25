import 'dotenv/config'
import { Repository } from "typeorm"
import { ILogin } from "../../interfaces/login.interfaces"
import { Users } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import jwt from 'jsonwebtoken'

const loginService = async (loginData: ILogin): Promise<string> => {

    const usersRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const user: Users | null = await usersRepository.findOneBy({email: loginData.email})

    if(!user) {
        throw new AppError('Email or Password is wrong', 404)
    }

    const passwordMatch = await compare(loginData.password, user.password)

    if(!passwordMatch) {
        throw new AppError('Email or Password is wrong', 404)
    }

    const token = jwt.sign(
        {
            admin: user.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: String(user.id)
        }
    )


    return token
}

export default loginService