import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Sensor } from './sensors/entities/sensor.entity.js';
import { SensorsModule } from './sensors/sensors.module.js';
import { Tarea } from './tareas/entities/tarea.entity.js';
import { TareasModule } from './tareas/tareas.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity.js';
import { UsersModule } from './users/users.module.js';
import { LibrosModule } from './libros/libros.module.js';
import { Libro } from './libros/entities/libro.entity.js';
import {ProductoModule} from './producto/producto.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'mssql-connection',
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      password: 'ConfiguracionSegura2026!',
      username: 'sa',
      database: 'sqldsm42',
      entities: [ Tarea, ProductoModule ],
      synchronize: true,
      autoLoadEntities: true,
      options: {
        trustServerCertificate: true
      }
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      database: 'postdsm42',
      entities: [ User,Libro ],
      host: 'localhost',
      name: 'postgres-connection',
      password: 'admin',
      port: 5432,
      synchronize: true,
      type: 'postgres',
      username: 'lairel'
    }),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      database: 'mariadsm42',
      entities: [ Sensor,Tarea,User ],
      host: 'localhost',
      name: 'mariadb-connection',
      password: 'admin',
      port: 3038,
      synchronize: true,
      type: 'mariadb',
      username: 'lairel'
    }),
    UsersModule,
    SensorsModule,
    TareasModule,
    LibrosModule,
    ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




