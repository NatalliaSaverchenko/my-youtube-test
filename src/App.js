/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Layout, Row, Col } from 'antd';
import{ RouterView } from './router';
import { Header } from './components';

import { setSavedFavorites } from './redux/actions/favoritesActions';

import './App.css';

function App() {
  const user = useSelector((store) => store.user);

  const reduxDispatch = useDispatch();

  useEffect(() => {

    if (user.isLoggedIn) {
      const favorites = localStorage.getItem(user.username);
      if (favorites){
        reduxDispatch(setSavedFavorites(JSON.parse(favorites)));
      }
    }
  },[user.isLoggedIn]);

  return (
    <Layout style = {{ minHeight:'100vh' }}>
      {user.isLoggedIn && (
        <Layout.Header
          style = {{ backgroundColor:'#ffffff' }}
        >
          <Row justify="center">
            <Col
              xs={{ span: 23 }}
              sm={{ span: 22 }}
              md={{ span: 22 }}
              lg={{ span: 20 }}
              xxl={{ span: 16 }}
            >
              <Header />
            </Col>
          </Row>
        </Layout.Header>
      )}

      <Layout.Content>
        <Row justify = 'center'>
          <Col span = {22}>
            <RouterView/>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
