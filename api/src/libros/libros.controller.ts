import { Controller, Get, Post, Body } from '@nestjs/common';
import { LibrosService } from './libros.service.js';
import { CreateLibroDto } from './dto/create-libro.dto.js';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }

  @Get()
  findAll() {
    return this.librosService.findAll();
  }
}
