import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne, OneToMany} from 'typeorm'
import Addresses from './addresses.entity'
import Categories from './categories.entity'
import Schedules from './schedules.entity'

@Entity('real_state')
class RealState {

    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type: 'boolean', default: false})
    sold: boolean

    @Column({type: 'decimal', precision: 10, scale:2 })
    value: number 

    @Column({type: 'integer'})
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(() => Addresses)
    @JoinColumn()
    address: Addresses;

    @ManyToOne(() => Categories, category => category.realState)
    category: Categories;

    @OneToMany(() => Schedules, (schedules) => schedules.realState)
    schedule: Schedules[] 
}

export default RealState