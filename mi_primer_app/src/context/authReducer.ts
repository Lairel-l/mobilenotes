import { AuthState } from "./AuthContext";

type Actions = 
  | { type: 'singIn' }
  | { type: 'logout' }
  | { type: 'changeAvatar', payload: string }
  | { type: 'chageUsername', payload: string }
  | { type: 'changeIp', payload: string };

export const authReducer = ( state: AuthState, action: Actions ): AuthState => {

  switch( action.type ){
    case 'singIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no_name_user_yet'
      }
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        avatar: undefined
      }
    case 'chageUsername':
      return {
        ...state,
        username: action.payload,
      }
    case 'changeAvatar':
      return {
        ...state,
        avatar: action.payload,
      }
    case 'changeIp':
      return {
        ...state,
        ip: action.payload,
      }
  }

}
