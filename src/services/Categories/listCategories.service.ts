import { Repository } from "typeorm"
import { IMultipleCategories } from "../../interfaces/categories.interfaces"
import { Categories } from "../../entities"
import { AppDataSource } from "../../data-source"

const listCategoriesService = async (): Promise<IMultipleCategories> => {

    const categoriesRepository: Repository<Categories> = AppDataSource.getRepository(Categories)

    const allCategories: Categories[] = await categoriesRepository.find()

    return allCategories

}

export default listCategoriesService