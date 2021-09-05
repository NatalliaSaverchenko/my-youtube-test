import { combineReducers } from 'redux';
import youtubeSearchReducer from './youtubeSearchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  youtubeSearch:youtubeSearchReducer,
  user:userReducer,

});
export default rootReducer;
