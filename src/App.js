/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector,useDispatch } from 'react-redux';
import { Layout,Row,Col } from 'antd';

// import { setUser } from './redux/actions/userActions';
import { setSavedFavorites } from './redux/actions/favoritesActions';

//import { getUser } from './api/login';

import{ RouterView } from './router';
import { Header } from './components';

import './App.css';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

function App() {
  const user=useSelector((store)=>store.user);

  const reduxDispatch=useDispatch();
  const hist = useHistory();

  useEffect(()=>{

    if (user.isLoggedIn){
      // const user=getUser();
      const favorites=localStorage.getItem(user.username);
      if (favorites){
        reduxDispatch(setSavedFavorites(JSON.parse(favorites)));
      }
      hist.push('/');
    } else {
      hist.push('/login');
    }
  },[user.isLoggedIn]);

  return (
    <Layout style={{ minHeight:'100vh' }}>
      {user.isLoggedIn&&(
        <Layout.Header style={{ backgroundColor:'#FFF' }}>
          <Header />
        </Layout.Header>
      )}

      <Layout.Content>
        <Row justify='center'>
          <Col span={22}>
            <RouterView/>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default App;
