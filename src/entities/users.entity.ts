import { getRounds, hashSync } from 'bcryptjs'
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm'
import Schedules from './schedules.entity'

@Entity('users')
class Users {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 45})
    name: string

    @Column({type: 'varchar', length: 45, unique: true})
    email: string

    @Column({type: 'boolean'})
    admin: boolean

    @Column({type: 'varchar', length: 120})
    password: string

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @DeleteDateColumn()
    deletedAt: string

    @BeforeInsert()
    @BeforeUpdate()
    hashedPassword() {
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted) {
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Schedules, (schedules) => schedules.user)
    realState: Schedules[] 
}

export {
    Users
}