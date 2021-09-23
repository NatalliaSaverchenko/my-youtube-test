/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from 'react-redux';

import { setIsLoggedIn, setUser } from '../../redux/actions/userActions';
import { message, Row, Col } from 'antd';
import { LoginForm } from '../../components';

//api
import Login from '../../api/login';
import { useHistory } from 'react-router';
import { clearFavorites } from '../../redux/actions/favoritesActions';

const LoginScreen = () => {
  const routeHistory=useHistory();
  const reduxDispatch = useDispatch();
  const onSubmit = (data) => {

    const user =  Login(data);
    if(!user) {message.error('Ошибка авторизации');
      localStorage.removeItem('authToken');
      localStorage.removeItem('authUser');

      return;
    }

    localStorage.setItem('authToken',user.token);
    localStorage.setItem('authUser',user.username);

    reduxDispatch(clearFavorites(null));
    reduxDispatch(setIsLoggedIn(true));
    reduxDispatch(setUser(user));

    routeHistory.push('/');

  };
  return (
    <Row
      justify = "center"
      align = "middle"
      style = {{ height: '100vh' }}>
      <Col
        xs = {{ span: 23 }}
        sm = {{ span: 22 }}
        md = {{ span: 22 }}
        lg = {{ span: 20 }}
        xxl = {{ span: 16 }}
        style = {{ maxWidth: 510 }}
      >
        <LoginForm
          initialValues = {{
            username: '',
            password: '',
          }}
          onSubmit = {onSubmit}
        />
      </Col>
    </Row>
  );
};
export default LoginScreen;
