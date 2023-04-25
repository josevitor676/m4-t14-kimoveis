import { Repository } from "typeorm"
import { IReturnUser, IUpdateUser } from "../../interfaces/users.interfaces"
import { Users } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnUserSchema } from "../../schemas/users.schemas"

const updateUserService = async (userId: number, dataUser: IUpdateUser): Promise<IReturnUser> => {

    const usersRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const userFind = await usersRepository.findOne({
        where: {
            id: userId
        }
    })

    const updateUser = usersRepository.create({
        ...userFind!,
        ...dataUser
    })

    await usersRepository.save(updateUser)

    const userUpdate = returnUserSchema.parse(updateUser)

    return userUpdate
}

export default updateUserService