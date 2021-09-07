import { SET_FAVORITES,SET_SAVED_FAVORITES } from './actionsType';
export const setFavorites=(values)=>{
  return{ type: SET_FAVORITES,
    payload: values,
  };
};
export const setSavedFavorites=(favorites)=>{
  return{ type: SET_SAVED_FAVORITES,
    payload: favorites,
  };
};
