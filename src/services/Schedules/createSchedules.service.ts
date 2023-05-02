import { ConnectionCheckOutStartedEvent, Repository } from "typeorm"
import { ICreateSchedules, IReturnSchedules } from "../../interfaces/schedules.interfaces"
import { RealState, Schedules, Users } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"
import { schedulesSchema } from "../../schemas/schedules.schemas"

const createSchedulesService = async (idUser: number, dataSchedules: ICreateSchedules): Promise<IReturnSchedules>=> {

    const schedulesRepository: Repository<Schedules> = AppDataSource.getRepository(Schedules)
    const userRepository: Repository<Users> = AppDataSource.getRepository(Users)
    const realStateRepository: Repository<RealState> = AppDataSource.getRepository(RealState)

    const userFind: Users | null = await userRepository.findOneBy({id: idUser})

    const realStateFind: RealState | null = await realStateRepository.findOneBy({id: dataSchedules.realStateId})


    if(!(dataSchedules.hour >= '08:00') || !(dataSchedules.hour <= '18:00')) {
        throw new AppError('Horario de agendamento: 08:00 a 18:00', 401)
    }   

    let diaSemana = new Date(dataSchedules.date).getDay()

    if(!(diaSemana >= 0 ) || !(diaSemana <= 4 )) {
        throw new AppError('Você não pode agendar visitar em um final de semana', 401)
    }


    if(!realStateFind) {
        throw new AppError('Real Estate not found', 404)
    }

    const schedule = schedulesRepository.create({
        ...dataSchedules,
        realState: realStateFind!,
        user: userFind!
    })

    await schedulesRepository.save(schedule)

    const scheduleCreated = schedulesSchema.parse(schedule)

    return scheduleCreated

}

export default createSchedulesService