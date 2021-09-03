import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import {} from '../../redux/reducers/userReducer';
import { setIsLoggedIn } from '../../redux/actions/userActions';
// import {} from '../../redux/actions/actionsType';
import { message,Row,Col } from 'antd';
import { LoginForm } from '../../components';

//api
import { login } from '../../api/login';

const LoginScreen=()=>{
  const routeHistory=useHistory();
  const reduxDispatch=useDispatch();

  const onSubmit=(data)=>{
    const user=login(data);
    if(!user){message.error('Ошибка авторизации');
      localStorage.removeItem('authToken');
      reduxDispatch(setIsLoggedIn(false));
      return;}
    if (user){
      localStorage.setItem('authtoken',user.token);
      reduxDispatch(setIsLoggedIn(true));
      routeHistory.push('/');
    }

  };
  return(

    <Row
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 22 }}
        md={{ span: 22 }}
        lg={{ span: 20 }}
        xxl={{ span: 16 }}
        style={{ maxWidth: 510 }}
      >
        <LoginForm
          initialValues={{
            username:'',
            password:'' }}
          onSubmit={onSubmit}
        />
      </Col>
    </Row>

  );
};
export default LoginScreen;
