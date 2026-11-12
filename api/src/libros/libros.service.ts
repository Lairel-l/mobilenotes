import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './entities/libro.entity.js';
import { CreateLibroDto } from './dto/create-libro.dto.js';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro, 'postgres-connection')
    private libroRepository: Repository<Libro>,
  ) {}

  async create(createLibroDto: CreateLibroDto) {
    const nuevoLibro = this.libroRepository.create(createLibroDto);
    return await this.libroRepository.save(nuevoLibro);
  }

  async findAll() {
    return await this.libroRepository.find();
  }
}
