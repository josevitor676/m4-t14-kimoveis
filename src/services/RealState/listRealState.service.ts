import { Repository } from "typeorm"
import { IReturnMultipleRealState } from "../../interfaces/realState.interfaces"
import { RealState } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnMultipleRealState } from "../../schemas/realState.schemas"

//: Promise<IReturnMultipleRealState>

const listRealStateService = async (): Promise<IReturnMultipleRealState> => {

    const realStateRepository: Repository<RealState> = AppDataSource.getRepository(RealState)

    const listRealState: RealState[] = await realStateRepository.find({
        relations: {
            address: true,
            category: true
        }
    })

    const allRealState = returnMultipleRealState.parse(listRealState)
    
    return allRealState
    
    // const realStateList = realStateRepository.createQueryBuilder('realState').
    // select(["realState", "categories", "addresses"]).
    // leftJoin('realState.category', 'categories').
    // leftJoin('realState.address', 'addresses').
    // where("realState.categoryId = categories.id", {idCategory: 'categories.id'}).
    // andWhere("realState.addressId = addresses.id", {idAddress: 'addresses.id'}).
    // getMany()
}

export default listRealStateService