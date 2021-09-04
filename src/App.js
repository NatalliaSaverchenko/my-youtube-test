import { useSelector } from 'react-redux';
import { Layout,Row,Col } from 'antd';

import{ RouterView } from './router';
import { Header } from './components';
import './App.css';

function App() {
  const user=useSelector((store)=>store.user);
  console.log('user',user);
  return (
    <Layout style={{ height:'100vh' }}>
      {user.isLoggedIn&&(
        <Layout.Header style={{ backgroundColor:'#FFF' }}>
          <Header/>
        </Layout.Header>)}

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
