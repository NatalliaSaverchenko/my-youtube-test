import { SET_FAVORITES,SET_SAVED_FAVORITES } from '../actions/actionsType';

const initialeState = {
  favorites:[],
};
const favoritesReducer = (state = initialeState, action) => {
  switch(action.type){
  case SET_FAVORITES:
    return { ...state,favorites:[...state.favorites,action.payload]};

    // &&localStorage.setItem(getUser().username,JSON.stringify({ ...state,favorites:[...state.favorites,action.payload]})) ;
    // return localStorage.setItem(getUser().username,JSON.stringify({ ...state,favorites:[...state.favorites,action.payload]}));
    // case SET_FAVORITES_TO_LOCAL_STORAGE:
    //   return { favorites:localStorage.setItem(getUser().username,JSON.stringify(action.payload)),...state.favorites };

  case SET_SAVED_FAVORITES:
    return { ...state,favorites:action.payload };
  default:{return state;}}
};

export default favoritesReducer;
