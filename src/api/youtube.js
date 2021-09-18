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

export const getVideos = async (params) => {
  const { data } = await instance.get('/search',{
    params,
  });
  return data;
};

// const options=axios.create({
//   baseURL: 'https://www.googleapis.com/youtube/v3/videos',
//   params: {
//     part:'statistics',
//     key:process.env.REACT_APP_YOUTUBE_KEY,
//     id:videoId,
//   },

// });
// export const getVideosStats=async(params)=>{
//   const { data }=await options.get('/getstat',{
//     params,
//   });
//   return data;};

export const getVideosStats = async (videoId) => {
  const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_KEY}&fields=items(snippet(title,channelTitle,publishedAt),id,statistics(viewCount))&part=snippet,statistics&id=${videoId}`);

  return data;
};
