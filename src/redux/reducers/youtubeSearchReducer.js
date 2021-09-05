import { CHANGE_TITLE,SEARCH_VIDEOS_SUCCESS,SEARCH_VIDEOS_STARTED,SEARCH_VIDEOS_FAILURE, SET_QUERY } from '../actions/actionsType';
const initialeState = {
  videos:[],
  totalCount:0,
  isLoading:false,
  query:'',
};
const youtubeSearchReducer = (state = initialeState, action) => {
  switch (action.type) {
  case CHANGE_TITLE:
    return { ...state,title:action.payload };
  case SEARCH_VIDEOS_STARTED:
    return { ...state,isLoading:true };
  case SEARCH_VIDEOS_SUCCESS:
    return { ...state,
      totalCount:action.payload.pageInfo.totalResults,
      videos:action.payload.items.map((v)=>({
        videoId:v.id.videoId,
        title:v.snippet.channelTitle,
        description:v.snippet.description,
        thumbnail:{
          width:v.snippet.thumbnails.medium.width,
          height:v.snippet.thumbnails.medium.height,
          thumbnail:v.snippet.thumbnails.medium.url,
        },
      })),
      isLoading:false };
  case SET_QUERY:
    return { ...state,query:action.payload.query };
  case SEARCH_VIDEOS_FAILURE:
    return { ...state,isLoading:false };
  default:{return state;}
  }
};
export default youtubeSearchReducer;
