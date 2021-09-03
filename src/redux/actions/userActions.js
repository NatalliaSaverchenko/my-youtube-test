import {

  SET_IS_LOGGED_IN,

} from '../actions/actionsType';

export const setIsLoggedIn=(isLoggedIn)=>{
  return{ type: SET_IS_LOGGED_IN,
    payload: isLoggedIn,
  };
};
