import {
  SET_FAVORITES,
  SET_SAVED_FAVORITES,
  DELETE_FAVORITE,
  EDIT_FAVORITE,
  CLEAR_FAVORITES,
} from './actionsType';

export const setFavorites = (values) => {
  return{
    type: SET_FAVORITES,
    payload: values,
  };
};

export const clearFavorites = () => {
  return{
    type: CLEAR_FAVORITES,
  };
};

export const setSavedFavorites = (favorites) => {
  return{
    type: SET_SAVED_FAVORITES,
    payload: favorites,
  };
};

export const deleteFavorite = (favorite) => {
  return{
    type: DELETE_FAVORITE,
    payload: favorite,
  };
};

export const editFavorite = (favorite) => {
  return{
    type: EDIT_FAVORITE,
    payload: favorite,
  };
};
