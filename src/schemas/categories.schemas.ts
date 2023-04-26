import {z} from 'zod'

const returnCategoriesSchema = z.object({
    id: z.number(),
    name: z.string().min(2).max(45)
})

const createCategoriesSchema = returnCategoriesSchema.omit({id: true})

const multipleCategories = returnCategoriesSchema.array();

export  {
    createCategoriesSchema,
    returnCategoriesSchema,
    multipleCategories
}