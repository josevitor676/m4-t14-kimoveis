import { Repository } from "typeorm"
import { IReturnUsers } from "../../interfaces/users.interfaces"
import { Users } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnUsers } from "../../schemas/users.schemas"

const listUsersService = async (): Promise<IReturnUsers> => {

    const usersRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const users: Array<Users> = await usersRepository.find()

    const listUser = returnUsers.parse(users)

    return listUser

}

export default listUsersService