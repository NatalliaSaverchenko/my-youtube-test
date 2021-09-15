/* eslint-disable react-hooks/exhaustive-deps */
// import {} from '../../redux/reducers/userReducer';
import { setUser } from '../../redux/actions/userActions';
// import {} from '../../redux/actions/actionsType';
import { message, Row, Col } from 'antd';
import { LoginForm } from '../../components';

//api
import Login from '../../api/login';
import { useDispatch } from 'react-redux';

const LoginScreen = () => {
  const reduxDispatch = useDispatch();
  //  useLogin(data);
  const onSubmit = (data) => {

    const user =  Login(data);
    if(!user){message.error('Ошибка авторизации');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');
      return;}
    if (user){
      localStorage.setItem('authToken',user.token);
      localStorage.setItem('authUser',user.username);
    }
    reduxDispatch(setUser(user));
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: '100vh' }}>
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
            username: '',
            password: '',
          }}
          onSubmit={onSubmit}
        />
      </Col>
    </Row>
  );
};
export default LoginScreen;
