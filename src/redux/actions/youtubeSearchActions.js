import { getVideos } from '../../api/youtube';

import { CHANGE_TITLE,SEARCH_VIDEOS_SUCCESS,SEARCH_VIDEOS_STARTED,SEARCH_VIDEOS_FAILURE } from '../actions/actionsType';

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
