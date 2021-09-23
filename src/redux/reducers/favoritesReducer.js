import {
  SET_FAVORITES,
  SET_SAVED_FAVORITES,
  DELETE_FAVORITE,EDIT_FAVORITE,
  CLEAR_FAVORITES,
} from '../actions/actionsType';

const initialeState = {
  favorites:[],
};
const favoritesReducer = (state = initialeState, action) => {
  switch(action.type){
  case SET_FAVORITES:
    return { ...state, favorites: [...state.favorites,action.payload]};
  case SET_SAVED_FAVORITES:
    return { ...state, favorites: action.payload };
  case CLEAR_FAVORITES:
    return { ...state, ...initialeState };
  case DELETE_FAVORITE:
    return { ...state,
      favorites: state.favorites.filter(item => item.id !== action.payload.id) };
  case EDIT_FAVORITE:
    return { ...state,
      favorites: state.favorites.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      }),
    };
  default:{return state;}}
};

export default favoritesReducer;
