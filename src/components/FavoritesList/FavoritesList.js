import { List, Typography,  Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { searchVideos,setSearchQuery } from '../../redux/actions/youtubeSearchActions';
import { deleteFavorite } from '../../redux/actions/favoritesActions';

const { confirm } = Modal;

const FavoritesList=({ setIsModalVisible,setActiveFavorite })=>{

  const reduxDispatch = useDispatch();
  const routeHistory = useHistory();
  const { favorites } = useSelector((store) => store.favorites);
  console.log('favorites',favorites);

  const makeSearch = (id) => {
    const searchInput = favorites.filter(element => element.id === id)[0];
    reduxDispatch(setSearchQuery({ query: searchInput.query }));
    reduxDispatch(searchVideos({
      q: searchInput.query,
      order: searchInput.order ? searchInput.order : 'relevance',
      resultsPerPage: searchInput.resultsPerPage,
      maxResults: searchInput.resultsPerPage }));

    routeHistory.push('/');

  };

  const showConfirm = (title,id,username) => {
    console.log('showConfirm',title);
    confirm({
      title: `Удалить запрос «${title}» из «Избранного»?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'Удалить',
      cancelText: 'Отмена',
      onOk() {
        reduxDispatch(deleteFavorite({ id,username }));
      },
    });
  };

  const showConfirmOpenQuery = (favorite) => {
    const orderName = {
      relevance: 'Без сортировки',
      title: 'По названию',
      date: 'По дате релиза',
      viewCount: 'По количеству просмотров',
      rating: 'По рейтингу',
    };

    confirm({
      title: 'Выполнить запрос ?',
      content:
      <>
        <Typography.Text style={{ display: 'block', marginBottom: 5 }}>Название: «{favorite.title}»</Typography.Text>
        <Typography.Text style={{ display: 'block', marginBottom: 5 }}>Запрос: «{favorite.query}»</Typography.Text>
        <Typography.Text style={{ display: 'block', marginBottom: 5 }}>Сортировка: «{orderName[favorite.order]}»</Typography.Text>
        <Typography.Text style={{ display: 'block' }}>Max количество видео: «{favorite.resultsPerPage}»</Typography.Text>
      </>,
      okText: 'Выполнить',
      cancelText: 'Отмена',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        makeSearch(favorite.id);
      },
    });
  };

  return(<>
    <List

      dataSource={favorites}
      renderItem={item => (
        <List.Item
          key={item.id}
          style={{ flexWrap: 'nowrap' }}
          actions={[
            <a

              key="list-loadmore-edit"
              onClick={() => {
                setActiveFavorite(favorites.filter(el => el.id === item.id)[0]);
                setIsModalVisible(true);
              }}
            >
                Изменить
            </a>,
            <a

              key="list-loadmore-more"
              onClick={() => showConfirm(item.query, item.id, item.username)}
            >
                Удалить
            </a>,
          ]}
        >
          <Typography.Paragraph

            style={{ margin: 0 }}
            ellipsis={{ rows: 1, expandable: false }}
            onClick={() => showConfirmOpenQuery(item)}
          >
            {item.query}
          </Typography.Paragraph>
        </List.Item>
      )}
    />
  </>);
};
export default FavoritesList;
