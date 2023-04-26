import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm'
import RealState from './realState.entity'

@Entity('categories')
class Categories {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 45, unique: true})
    name: string

    @OneToMany(() => RealState, realState => realState.category)
    realState: RealState[]

}

export default Categories