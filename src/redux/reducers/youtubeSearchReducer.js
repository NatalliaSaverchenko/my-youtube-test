import { CHANGE_TITLE } from '../actions/actionsType';
const initialeState = { title:'' };
const youtubeSearchReducer = (state = initialeState, action) => {
  switch (action.type) {
  case CHANGE_TITLE:
    return { ...state,title:action.payload };
  default:{return state;}
  }
};
export default youtubeSearchReducer;
