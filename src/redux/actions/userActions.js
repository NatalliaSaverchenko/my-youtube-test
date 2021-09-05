import {

  SET_IS_LOGGED_IN,SET_USER,

} from '../actions/actionsType';

export const setIsLoggedIn=(isLoggedIn)=>{
  return{ type: SET_IS_LOGGED_IN,
    payload: isLoggedIn,
  };
};
export const setUser=(username)=>{
  return{ type: SET_USER,
    payload: username,
  };
};
