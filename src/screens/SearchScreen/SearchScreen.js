import { useEffect } from 'react';
import { getVideos } from '../../api/youtube';

const SearchScreen=()=>{
  useEffect(()=>{
    getVideos().then(data=>{
      console.log(data.items);
    });
  },[]);
  return(<>SearchScreen</>);};
export default SearchScreen;
