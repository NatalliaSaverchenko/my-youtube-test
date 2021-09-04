import { combineReducers } from 'redux';
import youtubeSearchReducer from './youtubeSearchReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  searchVideos:youtubeSearchReducer,
  user:userReducer,

});
export default rootReducer;
