import { Repository } from "typeorm"
import { Users } from "../../entities"
import { AppDataSource } from "../../data-source"

const deleteUserService = async (userId: number): Promise<void> => {

    const usersRepository: Repository<Users> = AppDataSource.getRepository(Users)

    const userFind: Users | null = await usersRepository.findOneBy({id: userId})

    await usersRepository.softRemove(userFind!)
} 

export default deleteUserService