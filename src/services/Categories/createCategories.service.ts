import { Repository } from "typeorm"
import { ICategories, ICreateCategories } from "../../interfaces/categories.interfaces"
import { Categories } from "../../entities"
import { AppDataSource } from "../../data-source"
import { returnCategoriesSchema } from "../../schemas/categories.schemas"
import { AppError } from "../../errors"

const createCategoriesService = async (dataCategory: ICreateCategories): Promise<ICategories> => {

    const categoriesRepository: Repository<Categories> = AppDataSource.getRepository(Categories)

    const nameCategories: Categories | null = await categoriesRepository.findOne({
        where: {
            name: dataCategory.name
        }
    })

    if(nameCategories) {
        throw new AppError('Categories Exists', 401)
    }


    const category = categoriesRepository.create(dataCategory)
    await categoriesRepository.save(category)

    const newCategory: ICategories = returnCategoriesSchema.parse(category)

    return newCategory
}

export default createCategoriesService