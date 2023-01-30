import { Sequelize } from 'sequelize-typescript';
import {track} from "../track/track.entity";
import {comment} from "../comment/comment.entity";
import {album} from "../album/album.entity";


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Typebot2',
                database: 'timus',
            })
            sequelize.addModels([track, comment, album])
            await sequelize.sync()
            return sequelize
        },
    },
];