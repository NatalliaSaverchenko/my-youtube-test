import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import { v4 as uuidV4 } from 'uuid';
import { Input, Modal, Typography, Tooltip } from 'antd';
import { NavLink } from 'react-router-dom';

import { setFavorites } from '../../redux/actions/favoritesActions';
import { searchVideos,setSearchQuery,searchVideosStats } from '../../redux/actions/youtubeSearchActions';

import { HeartOutlined,HeartFilled } from '@ant-design/icons';

import FavoritesForm from '../../components/FavoritesForm/FavoritesForm';
import { SearchResults } from '../../components';

import { saveFavorite } from '../../api/favorites';

import styles from './SearchScreen.module.css';

const { Title } = Typography;
const { Search } = Input;

const SearchScreen = () => {
  const reduxDispatch = useDispatch();
  const search = useSelector(store => store.youtubeSearch);
  const { username } = useSelector(store => store.user);

  const { favorites } = useSelector(store => store.favorites);

  const [query,setQuery] = useState();
  const [isModalOpen,setModalOpen] = useState(false);

  const routeHistory=useHistory();

  useEffect (() => {
    if (search.queryStatus !== 'fulfilled') return;
    reduxDispatch(searchVideosStats(search.listOfVideos));
  }, [reduxDispatch, search.queryStatus, search.listOfVideos]);

  const makeSearch = async() => {
    if (!query){
      return;
    }

    await reduxDispatch(searchVideos({ q:query }));
    reduxDispatch(setSearchQuery({ query }));

  };

  const saveToFavorites = (values) => {
    const id=uuidV4();
    // eslint-disable-next-line no-debugger
    reduxDispatch(setFavorites({ ...values,username,id }));
    saveFavorite(username,{ ...values,id });
    setModalOpen(false);

  };

  const suffix =
  search.query ?

    favorites.filter(el => el.query.trim() === search.query.trim()).length?
      <Tooltip
        style={{ visibility: search.videos.length ? 'visible' : 'hidden' }}
        placement = 'bottom'
        trigger = 'hover'
        color = '#ffffff'
        title = {
          <>
            <Typography.Text
              strong
              style = {{
                display: 'block',
                marginBottom: 15,
              }}
            >
              Поиск сохранён в разделе «Избранное»
            </Typography.Text>
            <NavLink
              style = {{ marginTop: 15 }}
              to = {'/favorites'}
            >
              Перейти в «Избранное»
            </NavLink>
          </>
        }
      >
        <HeartFilled
          className = {styles.icon}
          style = {{
            color: '#1890FF',
            visibility: search.videos.length ? 'visible' : 'hidden',
          }}
          onClick = {() => routeHistory.push('/favorites')}
        />
      </Tooltip>

      :
      <HeartOutlined
        className = {styles.icon}
        style = {{
          color: '#1890FF',
          visibility: search.videos.length ? 'visible' : 'hidden',
        }}
        onClick = {() => setModalOpen(true)}
      />

    :<span/>;

  return(
    <div>
      <Title
        className = {styles.searchTitle}
      >
        Поиск видео
      </Title>
      <div className = 'searchContainer'>

        <Search
          className = {styles.search}
          placeholder = "Что хотите посмотреть?"
          enterButton = "Найти"
          size = "large"
          // loading={search.isLoading}
          onSearch = {makeSearch}
          suffix = {suffix}
          onChange = {(e) => setQuery(e.target.value)}
          value = {query}
        />
      </div>
      <Modal
        title = 'Сохранить запрос'
        visible = {isModalOpen}
        footer = {null}
        onCancel = {() => setModalOpen(false)}
      >
        <FavoritesForm
          initialValues = {{
            id:'',
            query,
            title:'',
            order:null,
            resultsPerPage:12,
          }}
          onCancel = {() => setModalOpen(false)}
          onSubmit = {(values) => saveToFavorites(values)}/>

      </Modal>
      {search.query ? <SearchResults/> : null}

    </div>
  );
};
export default SearchScreen;
