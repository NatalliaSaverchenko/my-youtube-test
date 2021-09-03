import { combineReducers } from 'redux';
import youtubeSearchReducer from './youtubeSearchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  title:youtubeSearchReducer,
  user:userReducer,

});
export default rootReducer;
