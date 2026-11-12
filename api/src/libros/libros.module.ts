import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibrosController } from './libros.controller.js';
import { LibrosService } from './libros.service.js';
import { Libro } from './entities/libro.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Libro], 'postgres-connection')],
  controllers: [LibrosController],
  providers: [LibrosService],
})
export class LibrosModule {}
