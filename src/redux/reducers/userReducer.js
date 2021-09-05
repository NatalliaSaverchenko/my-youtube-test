import { SET_IS_LOGGED_IN,SET_USER } from '../actions/actionsType';
const initialeState = {
  username:'',
  isLoggedIn:!!localStorage.getItem('authToken'),
};
const useReducer = (state = initialeState, action) => {
  switch (action.type) {

  case SET_IS_LOGGED_IN:
    return { ...state,isLoggedIn:action.payload };
  case SET_USER:
    return { ...state,username:action.payload };
  default:{return state;}
  }
};
export default useReducer;
