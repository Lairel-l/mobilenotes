import { createContext, useReducer, ReactNode, useEffect } from "react";
import { authReducer } from "./authReducer";
import { setPandoraIp } from "../api/pandoraApi";

export interface AuthState {
  isLoggedIn:   boolean;
  username:     string | undefined;
  avatar:       string | undefined;
  ip:           string;
}

export const AuthInicialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  avatar: undefined,
  ip: '192.168.143.172',
}

export interface AuthContextProps {
  authState:      AuthState;
  singIn:         () => void;
  logout:         () => void;
  changeAvatar:   ( avatar: string ) => void;
  chageUsername:  ( username: string ) => void;
  changeIp:       ( ip: string ) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ( { children }: { children: ReactNode } ) => {

  const [ authState, dispatch ] = useReducer( authReducer, AuthInicialState );

  useEffect(() => {
    setPandoraIp(authState.ip);
  }, [authState.ip]);

  const singIn = () => dispatch({ type: 'singIn' });
  const logout = () => dispatch({ type: 'logout' });
  const chageUsername = ( username: string ) => dispatch({ type: 'chageUsername', payload: username });
  const changeAvatar = ( avatar: string ) => dispatch({ type: 'changeAvatar', payload: avatar });
  const changeIp = ( ip: string ) => dispatch({ type: 'changeIp', payload: ip });

  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        logout,
        chageUsername,
        changeAvatar,
        changeIp
      }}
    >
      { children }
    </AuthContext.Provider>
  );

}
