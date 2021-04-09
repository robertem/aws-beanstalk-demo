import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

export const sequelize = new Sequelize(
    `${config.dialect}://${config.usarname}:${config.password}@${config.host}:${config.port}/${config.database}`
);