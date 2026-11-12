import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto, "mssql-connection")
    private productoRepository: Repository<Producto>,
  ) {}

  async interMasivo(productos: Partial<Producto>[], tomanolote = 4000) {
    for (let i = 0; i < productos.length; i += tomanolote) {
      await this.productoRepository
        .createQueryBuilder()
        .insert()
        .into(Producto)
        .values(productos.slice(i, i + tomanolote))
        .execute();
    }
  }

  async total() {
    return await this.productoRepository.count();
  }

  async porCategoria(categoria: string) {
    return await this.productoRepository.find({ where: { categoria } });
  }

  async precioPromedioPorCategoria() {
    return await this.productoRepository
      .createQueryBuilder('p')
      .select('p.categoria', 'categoria')
      .addSelect('AVG(p.precio)', 'promedio')
      .groupBy('p.categoria')
      .getRawMany();
  }

  async top3Caros() {
    return await this.productoRepository.find({
      order: { precio: 'DESC' },
      take: 3,
    });
  }

  async stockMenorA50() {
    return await this.productoRepository
      .createQueryBuilder('p')
      .where('p.stock < :stock', { stock: 50 })
      .getMany();
  }

  async valorInventario() {
    const result = await this.productoRepository
      .createQueryBuilder('p')
      .select('SUM(p.precio * p.stock)', 'total')
      .getRawOne();
    return result.total;
  }

  async categoriasMayorA3000() {
    return await this.productoRepository
      .createQueryBuilder('p')
      .select('p.categoria', 'categoria')
      .addSelect('SUM(p.precio * p.stock)', 'total_inventario')
      .groupBy('p.categoria')
      .having('SUM(p.precio * p.stock) > :valor', { valor: 3000 })
      .getRawMany();
  }

  async update(id: number, data: UpdateProductoDto) {
    return await this.productoRepository.update(id, data);
  }
}
