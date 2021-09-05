// import { useEffect } from 'react';
import { useState } from 'react';
import { Input,Modal } from 'antd';
// import { getVideos } from '../../api/youtube';
import { searchVideos, setQuery } from '../../redux/actions/youtubeSearchActions';
import { useDispatch,useSelector } from 'react-redux';
import { HeartOutlined } from '@ant-design/icons';
import FavoritesForm from '../../components/FavoritesForm/FavoritesForm';
const { Search }=Input;

const SearchScreen=()=>{
  const reduxDispatch=useDispatch();
  const search=useSelector(store=>store.youtubeSearch);
  const [isModalOpen,setModalOpen]=useState(false);

  // useEffect(()=>{
  //   reduxDispatch(searchVideos({ q:'Котики' }));
  // },[reduxDispatch]);
  const makeSearch=(q)=>{
    if (!q){
      return;
    }
    reduxDispatch(setQuery({ query:q }));
    reduxDispatch(searchVideos({ q }));
  };

  // const openModal=()=>{console.log('OK');};
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
      <Search
        placeholder="Что хотите посмотреть?"
        enterButton="Найти"
        size="large"
        loading={search.isLoading}
        onSearch={makeSearch}
        suffix={suffix}
      />
      <Modal
        title='Сохранить запрос'
        visible={isModalOpen}
        footer={null}
        onCancel={()=>setModalOpen(false)}
      >
        <FavoritesForm
          initialValues={{
            query:search.query,
            title:'',
            order:null,
            resultsPerPage:12,
          }}
          onCancel={()=>setModalOpen(false)}
          onSubmit={(val)=>console.log('val',val)}/>

      </Modal>
    </div>
  );};
export default SearchScreen;
