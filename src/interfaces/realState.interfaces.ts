import {z} from 'zod'
import { createRealStateSchema, realStateSchema, returnMultipleRealState, returnRealStateSchema } from '../schemas/realState.schemas'

type IRealState = z.infer<typeof realStateSchema>
type ICreateRealState = z.infer<typeof createRealStateSchema>

type IReturnRealState = z.infer<typeof returnRealStateSchema>

type IReturnMultipleRealState = z.infer<typeof returnMultipleRealState>

export {
    ICreateRealState,
    IRealState,
    IReturnRealState,
    IReturnMultipleRealState
}

