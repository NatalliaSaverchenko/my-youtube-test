import { useEffect } from 'react';
import {  useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Input,Modal,Typography } from 'antd';
// import { getVideos } from '../../api/youtube';
import { searchVideos,setSearchQuery,searchVideosStats } from '../../redux/actions/youtubeSearchActions';
import { useDispatch,useSelector } from 'react-redux';
import { HeartOutlined } from '@ant-design/icons';
import FavoritesForm from '../../components/FavoritesForm/FavoritesForm';
import { setFavorites } from '../../redux/actions/favoritesActions';
import { SearchResults } from '../../components';
import styles from './SearchScreen.module.css';
import { saveFavorite } from '../../api/favorites';
const { Title }=Typography;
const { Search }=Input;

const SearchScreen=()=>{
  const reduxDispatch=useDispatch();
  const search=useSelector(store=>store.youtubeSearch);
  const { username }=useSelector(store=>store.user);

  console.log(username);
  // const { favorites }=useSelector(store=>store.favorites);

  const [query,setQuery]=useState();
  const [isModalOpen,setModalOpen]=useState(false);

  useEffect (() => {
    if (search.queryStatus !== 'fulfilled') return;
    reduxDispatch(searchVideosStats(search.listOfVideos));
  }, [reduxDispatch, search.queryStatus, search.listOfVideos]);

  const makeSearch=async()=>{
    if (!query){
      return;
    }

    await reduxDispatch(searchVideos({ q:query }));
    reduxDispatch(setSearchQuery({ query }));
    // await reduxDispatch(searchVideosStats(search.listOfVideos));

  };

  const saveToFavorites=(values)=>{
    const id=uuidV4();
    // eslint-disable-next-line no-debugger
    reduxDispatch(setFavorites({ ...values,username,id }));
    saveFavorite(username,{ ...values,id });
    setModalOpen(false);

  };

  const suffix = (
    <HeartOutlined
      onClick={()=>setModalOpen(true)}
      style={{
        fontSize: 16,
        color: '#1890ff',
        cursor:'pointer',
      }}
    />
  );

  return(
    <div>
      <Title className={styles.searchTitle}>Поиск видео</Title>
      <Search
        className={styles.search}
        placeholder="Что хотите посмотреть?"
        enterButton="Найти"
        size="large"
        // loading={search.isLoading}
        onSearch={makeSearch}
        suffix={suffix}
        onChange={(e)=>setQuery(e.target.value)}
        value={query}
      />
      <Modal
        title='Сохранить запрос'
        visible={isModalOpen}
        footer={null}
        onCancel={()=>setModalOpen(false)}
      >
        <FavoritesForm
          initialValues={{ id:'',
            query,
            title:'',
            order:null,
            resultsPerPage:12 }}
          onCancel={()=>setModalOpen(false)}
          onSubmit={(values)=>saveToFavorites(values)}/>

      </Modal>
      {search.query?<SearchResults/>:null}

    </div>
  );};
export default SearchScreen;
