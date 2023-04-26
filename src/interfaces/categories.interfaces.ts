import { z } from 'zod'
import { createCategoriesSchema, multipleCategories, returnCategoriesSchema } from '../schemas/categories.schemas'


type ICategories = z.infer<typeof returnCategoriesSchema>
type ICreateCategories = z.infer<typeof createCategoriesSchema>
type IMultipleCategories = z.infer<typeof multipleCategories>


export {
    ICategories,
    ICreateCategories,
    IMultipleCategories
}