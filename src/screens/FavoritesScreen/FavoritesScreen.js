/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-debugger */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Empty,  Modal } from 'antd';

import { editFavorite } from '../../redux/actions/favoritesActions';

import { FavoritesForm } from '../../components/index';
import { FavoritesList } from '../../components/index';

const FavoritesScreen=()=>{
  const reduxDispatch=useDispatch();
  const { username } = useSelector((store) => store.user);
  const { favorites } = useSelector((store) => store.favorites);
  console.log(favorites);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeFavorite, setActiveFavorite] = useState({
    id: '',
    title: '',
    query: '',
    order: 'relevance',
    resultsPerPage: 12,
  });
  useEffect(() => {
    if (favorites.length) {
      localStorage.setItem(username,JSON.stringify([...favorites]));
    }
  }, [favorites]);
  const onEditFavorite = (values) => {

    reduxDispatch(editFavorite({ ...values, username, id:activeFavorite.id }));

    setIsModalVisible(false);
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

          <FavoritesList
            setActiveFavorite={setActiveFavorite}
            setIsModalVisible={setIsModalVisible}/>
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
        onSubmit={onEditFavorite}
        onCancel={() => setIsModalVisible(false)}
      />
    </Modal>
  </>
  );};
export default FavoritesScreen;
