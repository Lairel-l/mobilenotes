import { Controller, Get, Post, Patch , Body, Param } from '@nestjs/common';
import { ProductoService } from './producto.service.js';
import { Producto } from './entities/producto.entity.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post('insertar-masivo')
  async interMasivo(@Body() productos: Producto[]) {
    await this.productoService.interMasivo(productos);
    return { datos_ingresados: productos.length };
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductoDto: UpdateProductoDto) {
    return this.productoService.update(id, updateProductoDto);
  }

  @Get('total')
  total() {
    return this.productoService.total();
  }

  @Get('abarrotes')
  abarrotes() {
    return this.productoService.porCategoria('abarrotes');
  }

  @Get('promedio-categorias')
  promedioCategorias() {
    return this.productoService.precioPromedioPorCategoria();
  }

  @Get('top3-caros')
  top3Caros() {
    return this.productoService.top3Caros();
  }

  @Get('stock-menor-50')
  stockMenor() {
    return this.productoService.stockMenorA50();
  }

  @Get('valor-inventario')
  valorInventario() {
    return this.productoService.valorInventario();
  }

  @Get('categorias-mayor-3000')
  categoriasMayor() {
    return this.productoService.categoriasMayorA3000();
  }
}
