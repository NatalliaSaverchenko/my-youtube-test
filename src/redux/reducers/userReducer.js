import { SET_IS_LOGGED_IN } from '../actions/actionsType';
const initialeState = {
  isLoggedIn:!!localStorage.getItem('authToken'),
};
const useReducer = (state = initialeState, action) => {
  switch (action.type) {

  case SET_IS_LOGGED_IN:
    return { ...state,isLoggedIn:action.payload };
  default:{return state;}
  }
};
export default useReducer;
