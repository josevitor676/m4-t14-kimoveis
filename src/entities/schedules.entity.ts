import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm'
import RealState from './realState.entity'
import { Users } from './users.entity'

@Entity('schedules_users_properties')
class Schedules {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'timestamp'})
    date: string

    @Column({type: 'time'})
    hour: string

    @ManyToOne(() => RealState, (realSate) => realSate.schedule)
    realState: RealState

    @ManyToOne(() => Users, (user) => user.realState)
    user: Users
}

export default Schedules