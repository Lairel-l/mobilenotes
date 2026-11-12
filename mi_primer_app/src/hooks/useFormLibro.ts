import { useReducer } from "react";
import { useLibroApi } from "./useLibroApi";

export interface FormLibroData {
  id: number;
  titulo: string;
  autor: string;
  isbn: string;
  editorial: string;
  ano: string;
  genero: string;
  idioma: string;
  numeroPaginas: string;
  ubicacion: string;
  imagen1: string;
  imagen2: string;
  imagen3: string;
}

interface UseFormLibro {
  state: FormLibroData;
  handleInputChange: ( fieldName: keyof FormLibroData, value: string | number ) => void;
  handleSubmit: () => void;
  handleDelete: () => void;
}

export const useFormLibro = (): UseFormLibro => {

  const initialForm: FormLibroData = {
    id: 0,
    titulo: '',
    autor: '',
    isbn: '',
    editorial: '',
    ano: '',
    genero: '',
    idioma: '',
    numeroPaginas: '',
    ubicacion: '',
    imagen1: '',
    imagen2: '',
    imagen3: '',
  };

  type Action = { type: 'handleInputChange', payload: { fieldName: keyof FormLibroData, value: string | number } };

  const formReducer = ( state: FormLibroData, action: Action ): FormLibroData => {
    switch( action.type ){
      case 'handleInputChange':
        return {
          ...state,
          [ action.payload.fieldName ]: action.payload.value
        };
      default:
        return state;
    }
  };

  const [ state, dispatch ] = useReducer( formReducer, initialForm );
  const { createLibro, updateLibro, deleteLibro } = useLibroApi();

  const handleInputChange = ( fieldName: keyof FormLibroData, value: string | number ) => {
    dispatch({ type: 'handleInputChange', payload: { fieldName, value } });
  };

  const handleSubmit = () => {
    if( state.id == 0 ){
      createLibro( state );
    } else {
      updateLibro( state );
    }
  };

  const handleDelete = () => deleteLibro( state );

  return { state, handleInputChange, handleSubmit, handleDelete };
};
