import { Repository } from "typeorm"
import { ICreateRealState, IReturnRealState } from "../../interfaces/realState.interfaces"
import { Addresses, Categories, RealState } from "../../entities"
import { AppDataSource } from "../../data-source"
import { realStateSchema, returnRealStateSchema } from "../../schemas/realState.schemas"
import { AppError } from "../../errors"

const createRealStateService = async (dataRealState: ICreateRealState): Promise<IReturnRealState> => {

    const addressRepository: Repository<Addresses> = AppDataSource.getRepository(Addresses)
    const realStateRepository: Repository<RealState> = AppDataSource.getRepository(RealState)
    const categoriesRepository: Repository<Categories> = AppDataSource.getRepository(Categories)

    
    const newAddress: Addresses = addressRepository.create(dataRealState.address)
    await addressRepository.save(newAddress)
    
    const categoryFind = await categoriesRepository.findOneBy({id: dataRealState.categoryId})
    if(!categoryFind) {
        throw new AppError('Category not found.', 404)
    }

    console.log(categoryFind)

    const realState: RealState = realStateRepository.create({
        ...dataRealState,
        address: newAddress!,
        category: categoryFind!
    })

    await realStateRepository.save(realState)

    const newRealState = returnRealStateSchema.parse(realState)

    return newRealState
}

export {
    createRealStateService
}