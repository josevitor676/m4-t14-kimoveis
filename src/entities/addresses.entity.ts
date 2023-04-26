import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('addresses')
class Addresses {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 45})
    street: string

    @Column({type: 'varchar', length: 8})
    zipCode: string

    @Column({type: 'varchar', length: 8, nullable: true})
    number?: string | null | undefined

    @Column({type: 'varchar', length: 20})
    city: string

    @Column({type: 'varchar', length: 2})
    state: string
}

export default Addresses