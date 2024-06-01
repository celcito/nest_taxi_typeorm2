
import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'mysql',
  host: '172.18.0.2',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'vadetaxi',
  synchronize: false,
  migrations: [`${__dirname}/src/migrations/*.ts`],
  //entities: [`${__dirname}/src/**/entity/*.ts`],
  entities: ['./src/user/entity/user.entity.ts'],

});



