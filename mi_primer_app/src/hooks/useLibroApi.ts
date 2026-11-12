import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { FormLibroData } from "./useFormLibro";

export interface LibroResponse {
  id: number;
  titulo: string;
  autor: string;
  isbn: string;
  editorial: string;
  ano: number;
  genero: string;
  idioma: string;
  numeroPaginas: number;
  ubicacion: string;
  imagen1: string;
  imagen2: string;
  imagen3: string;
}

interface UseLibroApi {
  isLoading: boolean;
  listLibros: LibroResponse[];
  loadLibros: () => void;
  createLibro: ( data: FormLibroData ) => void;
  updateLibro: ( data: FormLibroData ) => void;
  deleteLibro: ( data: FormLibroData ) => void;
}

export const useLibroApi = (): UseLibroApi => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ listLibros, setListLibros ] = useState<LibroResponse[]>([]);
  const urlApi = "/libros";

  const loadLibros = async () => {
    setIsLoading(true);
    const response = await pandoraApi.get<LibroResponse[]>( urlApi );
    setListLibros( response.data );
    setIsLoading(false);
  }

  useEffect( () => {
    loadLibros();
  },[]);

  const createLibro = async ( data: FormLibroData ) => {
    const dataBody = {
      titulo: data.titulo,
      autor: data.autor,
      isbn: data.isbn,
      editorial: data.editorial,
      ano: parseInt(data.ano),
      genero: data.genero,
      idioma: data.idioma,
      numeroPaginas: parseInt(data.numeroPaginas),
      ubicacion: data.ubicacion,
      imagen1: data.imagen1 !== '' ? data.imagen1 : 'sin-imagen.jpg',
      imagen2: data.imagen2 !== '' ? data.imagen2 : 'sin-imagen.jpg',
      imagen3: data.imagen3 !== '' ? data.imagen3 : 'sin-imagen.jpg',
    }

    await pandoraApi.post( urlApi, dataBody );
  }

  const updateLibro = async ( data: FormLibroData ) => {
    const dataBody = {
      titulo: data.titulo,
      autor: data.autor,
      isbn: data.isbn,
      editorial: data.editorial,
      ano: parseInt(data.ano),
      genero: data.genero,
      idioma: data.idioma,
      numeroPaginas: parseInt(data.numeroPaginas),
      ubicacion: data.ubicacion,
      imagen1: data.imagen1,
      imagen2: data.imagen2,
      imagen3: data.imagen3
    }

    await pandoraApi.patch( `${urlApi}/${data.id}`, dataBody );
  }

  const deleteLibro = async ( data: FormLibroData ) => {
    await pandoraApi.delete( `${urlApi}/${data.id}`);
  }

  return { isLoading, listLibros, loadLibros, createLibro, updateLibro, deleteLibro };
}
