import {z} from 'zod'
import { createUserSchema, returnUserSchema, returnUsers, updateUserSchema, userSchema } from '../schemas/users.schemas'
import { DeepPartial } from 'typeorm'

type IUser = z.infer<typeof userSchema>
type ICreateUser = z.infer<typeof createUserSchema>
type IReturnUser = z.infer<typeof returnUserSchema>
type IReturnUsers = z.infer<typeof returnUsers>

type IUpdateUser = DeepPartial<typeof updateUserSchema>

export {
    ICreateUser,
    IUser,
    IReturnUser,
    IReturnUsers,
    IUpdateUser
}