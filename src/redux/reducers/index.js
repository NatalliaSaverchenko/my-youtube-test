import { combineReducers } from 'redux';
import youtubeSearchReducer from './youtubeSearchReducer';
import userReducer from './userReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  youtubeSearch:youtubeSearchReducer,
  user:userReducer,
  favorites:favoritesReducer,

});
export default rootReducer;
