import {z} from 'zod'
import { createRealStateSchema, realStateSchema, returnRealStateSchema } from '../schemas/realState.schemas'

type IRealState = z.infer<typeof realStateSchema>
type ICreateRealState = z.infer<typeof createRealStateSchema>

type IReturnRealState = z.infer<typeof returnRealStateSchema>

export {
    ICreateRealState,
    IRealState,
    IReturnRealState
}

