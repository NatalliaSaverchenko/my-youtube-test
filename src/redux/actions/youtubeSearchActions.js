import { getVideos, getVideosStats } from '../../api/youtube';

import { CHANGE_TITLE,SEARCH_VIDEOS_SUCCESS,SEARCH_VIDEOS_STARTED,SEARCH_VIDEOS_FAILURE,SET_SEARCH_QUERY,SEARCH_VIDEOS_STATS_SUCCESS,SEARCH_VIDEOS_STATS_STARTED,SEARCH_VIDEOS_STATS_FAILURE } from '../actions/actionsType';

export const searchVideos=(params)=>async(dispatch)=>{
  dispatch(searchVideoStarted());
  try{
    const response=await getVideos(params);
    console.log(response);
    return dispatch(searchVideoSuccess(response));}

  catch(err){
    console.log(err);
    dispatch(searchVideoFailure());
  }
};

// export const searchVideosStats=(params)=>async(dispatch)=>{
//   dispatch(searchVideosStatsStarted());
//   try{
//     const response=await getVideosStats(params);
//     console.log(response);
//     return dispatch(searchVideosStatsSuccess(response));}

//   catch(err){
//     console.log(err);
//     dispatch(searchVideosStatsFailure());
//   }
// };

export const changeTitle=()=>{
  return { type: CHANGE_TITLE,
    payload: null,
  };
};
export const searchVideoStarted=()=>{
  return { type: SEARCH_VIDEOS_STARTED,
  };
};
export const searchVideoFailure=(err)=>{
  return { type: SEARCH_VIDEOS_FAILURE,
    payload:{ err },
  };
};
export const searchVideoSuccess=(response)=>{
  return { type: SEARCH_VIDEOS_SUCCESS,
    payload:response,
  };
};
export const setSearchQuery=(query)=>{
  return { type: SET_SEARCH_QUERY,
    payload:query,
  };
};
// export const searchVideosStatsStarted=()=>{
//   return { type: SEARCH_VIDEOS_STATS_STARTED,
//   };
// };
// export const searchVideosStatsFailure=(err)=>{
//   return { type: SEARCH_VIDEOS_STATS_FAILURE,
//     payload:{ err },
//   };
// };
// export const searchVideosStatsSuccess=(response)=>{
//   return { type: SEARCH_VIDEOS_STATS_SUCCESS,
//     payload:response,
//   };
// };
