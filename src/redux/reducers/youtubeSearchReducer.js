import {
  CHANGE_TITLE,
  SEARCH_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_STARTED,
  SEARCH_VIDEOS_FAILURE,SET_SEARCH_QUERY,
  SEARCH_VIDEOS_STATS_STARTED,
  SEARCH_VIDEOS_STATS_FAILURE,
  SEARCH_VIDEOS_STATS_SUCCESS,
} from '../actions/actionsType';
const initialeState = {
  videos:[],
  totalCount:0,
  isLoading:false,
  query:'',
  listOfVideos:'',
  queryStatus: '',
};
const youtubeSearchReducer = (state = initialeState, action) => {
  switch (action.type) {
  case CHANGE_TITLE:
    return { ...state,title:action.payload };
  case SEARCH_VIDEOS_STARTED:
    return { ...state,queryStatus:'pending',isLoading:true };
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

      listOfVideos:action.payload.items.map((video)=>
        video.id.videoId).join(','),
      queryStatus:'fulfilled',
      isLoading: false };
  case SET_SEARCH_QUERY:
    return { ...state,query:action.payload.query };
  case SEARCH_VIDEOS_FAILURE:
    return { ...state,queryStatus:'rejected',isLoading:false };
  case SEARCH_VIDEOS_STATS_STARTED:
    return { ...state,isLoading:true };
  case SEARCH_VIDEOS_STATS_FAILURE:
    return { ...state,isLoading:false };
  case SEARCH_VIDEOS_STATS_SUCCESS:
    return { ...state,
      videos:state.videos.map(video => {
        video.viewCount=action.payload.items.filter(el => el.id === video.videoId)[0]?.statistics.viewCount;
        return video;

      }),
    };
  default:{return state;}
  }
};
export default youtubeSearchReducer;
