import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    key:process.env.REACT_APP_YOUTUBE_KEY,
    q:'',
    maxResults:12,
    order:'date',
    resultsPerPage:50,
  },
});

export const getVideos=async(params)=>{
  const { data }=await instance.get('/search',{
    params,
  });
  return data;
};
