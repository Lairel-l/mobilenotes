import { PartialType } from '@nestjs/mapped-types';
import { CreateProducto } from './create-producto.dto.js';

export class UpdateProductoDto extends PartialType(CreateProducto) {}
