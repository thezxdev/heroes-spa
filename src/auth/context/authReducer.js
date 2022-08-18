import { types } from '../types/types';

export const authReducer = ( state = {}, action ) => {

  switch ( action.type ) {
    case types.login:
      return {
        ...state, // En caso de pasar más propiedades
        logged: true,
        user: action.payload
      };

    case types.login:
      return {
        logged: false,
      };
  
    default:
      return state;
  }

}