import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, List, Typography, Empty,  Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { searchVideos,setSearchQuery } from '../../redux/actions/youtubeSearchActions';
import { editFavorite, deleteFavorite } from '../../redux/actions/favoritesActions';

import { FavoritesForm } from '../../components/index';

const { confirm } = Modal;

const FavoritesScreen=()=>{
  const reduxDispatch = useDispatch();
  const routeHistory = useHistory();
  const { favorites } = useSelector((store) => store.favorites);
  console.log('favorites',favorites);
  const { username } = useSelector((store) => store.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeFavorite, setActiveFavorite] = useState({
    id: '',
    title: '',
    query: '',
    order: 'relevance',
    resultsPerPage: 12,
  });

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

  const onEditFavoriteItem = (values) => {
    reduxDispatch(editFavorite({ ...values, username, id: activeFavorite.id }));
    setIsModalVisible(false);
  };

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

  return(<>
    <Row
      justify="center"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 22 }}
        md={{ span: 22 }}
        lg={{ span: 20 }}
        xxl={{ span: 16 }}
      >
        <h2

        >
          Избранное</h2>
        {!favorites.length ?
          <Row
            justify="center"
          >
            <Col flex='auto'>
              <Empty description='У Вас пока нет сохраненных запросов.'/>
            </Col>
          </Row> :
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
        }
      </Col>
    </Row>

    <Modal
      title={null}
      visible={isModalVisible}
      closable={false}
      footer={null}
      onCancel={() => setIsModalVisible(false)}
    >
      <h3
        style={{
          textAlign: 'center',
          fontSize: 18,
          margin: 0,
          padding: '15px 0 35px',
        }}
      >
      Изменить запрос
      </h3>
      <FavoritesForm
        initialValues={{
          id: activeFavorite.id,
          title: activeFavorite.title,
          query: activeFavorite.query,
          order: activeFavorite.order,
          resultsPerPage: activeFavorite.resultsPerPage,
        }}
        editMode={true}
        onSubmit={onEditFavoriteItem}
        onCancel={() => setIsModalVisible(false)}
      />
    </Modal>
  </>
  );};
export default FavoritesScreen;
