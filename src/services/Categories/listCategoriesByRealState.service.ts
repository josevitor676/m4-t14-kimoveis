import { Repository } from "typeorm"
import { Categories } from "../../entities"
import { AppDataSource } from "../../data-source"

const listCategoriesByRealStateService = async (idCategory: number) => {

    const categoriesRepository: Repository<Categories> = AppDataSource.getRepository(Categories)

    const categoryByRealState =  categoriesRepository.createQueryBuilder('categories').
    select(["categories", "realState"]).
    innerJoin('categories.realState', 'realState').
    where('categories.id = :idCategory', {idCategory: idCategory}).
    getOne()

    return categoryByRealState
}

export default listCategoriesByRealStateService