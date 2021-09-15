import { SET_IS_LOGGED_IN,SET_USER } from '../actions/actionsType';
const initialeState = {
  username: localStorage.getItem('authUser') || null,
  isLoggedIn:!!localStorage.getItem('authToken'),
};
const useReducer = (state = initialeState, action) => {
  switch (action.type) {

  case SET_IS_LOGGED_IN:
    return { ...state,isLoggedIn:action.payload, username: '' };
  case SET_USER:
    return { ...state,username:action.payload,isLoggedIn:true };
  default:{return state;}
  }
};
export default useReducer;
