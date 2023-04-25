import {z} from 'zod'

const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45).min(2),
    email: z.string().email(),
    admin: z.boolean(),
    password: z.string().min(6),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullish()
});

const returnUserSchema = userSchema.omit({password: true})

const createUserSchema = userSchema.omit({
    id: true,
    createdAt: true,
    deletedAt: true,
    updatedAt: true,
})

const updateUserSchema = userSchema.omit({id:true, admin: true}).partial()

const returnUsers = userSchema.omit({password: true}).array()

export {
    createUserSchema, 
    userSchema,
    returnUserSchema,
    returnUsers,
    updateUserSchema
}