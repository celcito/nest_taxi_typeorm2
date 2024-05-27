import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config'


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '172.18.0.2',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'vadetaxi',
    migrations: ['./migrations/*.ts'],
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrationsRun: false,
  }),UsersModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}


