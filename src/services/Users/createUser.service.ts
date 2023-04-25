import { Repository } from "typeorm"
import { ICreateUser, IReturnUser} from "../../interfaces/users.interfaces"
import { Users } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnUserSchema } from "../../schemas/users.schemas"


const createUserService = async (dataUser: ICreateUser): Promise<IReturnUser> => {

    const userRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const user: Users = userRepository.create(dataUser)
    await userRepository.save(user)

    const newUser: IReturnUser = returnUserSchema.parse(user)

    return newUser

}

export default createUserService