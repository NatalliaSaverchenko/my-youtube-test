import { useEffect } from 'react';
import { Input } from 'antd';
// import { getVideos } from '../../api/youtube';
import { searchVideos } from '../../redux/actions/youtubeSearchActions';
import { useDispatch } from 'react-redux';
const { Search }=Input;
const SearchScreen=()=>{
  const reduxDispatch=useDispatch();
  useEffect(()=>{
    reduxDispatch(searchVideos({ q:'Котики' }));
  },[reduxDispatch]);
  return(
    <div>
      <Search
        placeholder="Что хотите посмотреть?"
        enterButton="Найти"
        size="large"
        loading={false}
      />
    </div>
  );};
export default SearchScreen;
