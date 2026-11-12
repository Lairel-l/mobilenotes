import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class CreateLibroDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  @IsNotEmpty()
  editorial: string;

  @IsInt()
  @Min(0)
  ano: number;

  @IsString()
  @IsNotEmpty()
  genero: string;

  @IsString()
  @IsNotEmpty()
  idioma: string;

  @IsInt()
  @Min(1)
  numeroPaginas: number;

  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @IsString()
  @IsNotEmpty()
  imagen1: string;

  @IsString()
  @IsNotEmpty()
  imagen2: string;

  @IsString()
  @IsNotEmpty()
  imagen3: string;
}
