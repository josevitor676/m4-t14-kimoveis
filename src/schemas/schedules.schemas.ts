import {z} from 'zod'
import { returnRealStateSchema } from './realState.schemas'
import { returnUserSchema } from './users.schemas'

const userReturn = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    admin: z.boolean(),
    password: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullish()
})
const realStateReturn = z.object({
    id: z.number(),
    sold: z.boolean(),
    value: z.string(),
    size: z.number(),
    createdAt: z.date(),
    updatedAt: z.date()
})

const schedulesSchema = z.object({
    id: z.number(),
    date: z.string().or(z.date()),
    hour: z.string().or(z.date()),
    realState: realStateReturn,
    user: userReturn,
})

const createSchedulesSchema = z.object({
    date: z.string(),
    hour: z.string(),
    realStateId: z.number()
})

const SchemaReturnScheduleByRealState = z.object({
    id: z.number(),
    sold: z.boolean(),
    value: z.string(),
    size: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    schedule: schedulesSchema.omit({realState: true, user: true}).array()
})

export {
    schedulesSchema,
    createSchedulesSchema,
    SchemaReturnScheduleByRealState
}