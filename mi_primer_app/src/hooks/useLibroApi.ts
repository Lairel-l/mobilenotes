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
  loadLibros: () => Promise<void>;
  createLibro: ( data: FormLibroData ) => Promise<void>;
  updateLibro: ( data: FormLibroData ) => Promise<void>;
  deleteLibro: ( data: FormLibroData ) => Promise<void>;
}

export const useLibroApi = (): UseLibroApi => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);
  const [ listLibros, setListLibros ] = useState<LibroResponse[]>([]);
  const urlApi = "/libros";

  const loadLibros = async () => {
    setIsLoading(true);
    try {
      const response = await pandoraApi.get<LibroResponse[]>( urlApi );
      setListLibros( response.data );
    } catch (error) {
      console.log("Error al cargar libros:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect( () => {
    loadLibros();
  },[]);

  const createLibro = async ( data: FormLibroData ) => {
    try {
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
    } catch (error) {
      console.log("Error al crear libro:", error);
    }
  }

  const updateLibro = async ( data: FormLibroData ) => {
    try {
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
    } catch (error) {
      console.log("Error al actualizar libro:", error);
    }
  }

  const deleteLibro = async ( data: FormLibroData ) => {
    try {
      await pandoraApi.delete( `${urlApi}/${data.id}`);
    } catch (error) {
      console.log("Error al eliminar libro:", error);
    }
  }

  return { isLoading, listLibros, loadLibros, createLibro, updateLibro, deleteLibro };
}
