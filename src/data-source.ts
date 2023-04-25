import 'dotenv/config'
import 'reflect-metadata'
import path from 'path'
import {DataSource, DataSourceOptions} from 'typeorm'

const dataSourceConfig = ():DataSourceOptions => {

    const migrationsPath: string = path.join(__dirname, './migrations/**.{ts,js}')
    const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}')

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl) {
        throw new Error('Missing Env var DATABASE_URL')
    }

    const nodeEnv: string | undefined = process.env.NODE_ENV

    if(nodeEnv === 'teste') {
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize:true,
            entities: [entitiesPath]
        }
    }

    return {
        type: 'postgres',
        url: dbUrl!,
        logging: true,
        synchronize:false,
        entities: [entitiesPath],
        migrations:[migrationsPath]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export {
    AppDataSource
}