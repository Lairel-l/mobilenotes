import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateProducto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    categoria: string;

    @IsNumber()
    @IsNotEmpty()
    precio: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;
}
