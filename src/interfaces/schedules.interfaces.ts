import {z} from 'zod'
import { SchemaReturnScheduleByRealState, createSchedulesSchema, schedulesSchema } from '../schemas/schedules.schemas'

type IReturnSchedules = z.infer<typeof schedulesSchema>
type ICreateSchedules = z.infer<typeof createSchedulesSchema>

type IReturnScheduleByRealState = z.infer<typeof SchemaReturnScheduleByRealState>

export {
    ICreateSchedules,
    IReturnSchedules,
    IReturnScheduleByRealState
}