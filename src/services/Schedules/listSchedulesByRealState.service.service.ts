import { Repository } from "typeorm"
import { RealState, Schedules } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { IReturnScheduleByRealState } from "../../interfaces/schedules.interfaces"
import { SchemaReturnScheduleByRealState } from "../../schemas/schedules.schemas"

//: Promise<IReturnScheduleByRealState>

const listSchedulesByRealStateService = async (idRealState:number): Promise<IReturnScheduleByRealState> => {

    const realStateRepository: Repository<RealState> = AppDataSource.getRepository(RealState)


    const realState = await realStateRepository.findOneBy({id: idRealState})
    
    if(!realState){
        throw new AppError('Real Estate not found.', 404)
    }


    const scheduleRealState = await realStateRepository.findOne({
        where: {
            id: realState.id
        },
        relations: {
            schedule: true
        }
    })

    const returnScheduleRealState = SchemaReturnScheduleByRealState.parse(scheduleRealState)
    
    return returnScheduleRealState


    //return scheduleRealState
}

export default listSchedulesByRealStateService