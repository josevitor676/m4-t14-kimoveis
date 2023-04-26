import {z} from 'zod'
import { returnCategoriesSchema } from './categories.schemas'

const addressSchema = z.object({
    street: z.string(),
    zipCode: z.string().max(8).min(1),
    number: z.string().nullish(),
    city: z.string(),
    state: z.string().max(2).min(2)
})

const realStateSchema = z.object({
    id: z.number(),
    value: z.number(),
    size: z.number(),
    address: addressSchema,
    categoryId: z.number(),
    sold: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
})

const createRealStateSchema = realStateSchema.omit({
    id: true,
    sold: true,
    createdAt:true,
    updatedAt: true
})

const returnRealStateSchema = z.object({
    id: z.number(),
    value: z.number(),
    size: z.number(),
    address: addressSchema,
    category: returnCategoriesSchema,
    sold: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date()
})

//IRealState

export {
    createRealStateSchema,
    realStateSchema,
    returnRealStateSchema
}