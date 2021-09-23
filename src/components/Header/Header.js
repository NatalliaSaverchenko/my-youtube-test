import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { LogoIcon } from '../LogoIcon';
import { Row,Col,Menu } from 'antd';

import { setIsLoggedIn } from '../../redux/actions/userActions';
import { logoutSrh } from '../../redux/actions/youtubeSearchActions';

import styles from'./Header.module.css';
import { clearFavorites } from '../../redux/actions/favoritesActions';

const Header = () => {
  const reduxDispatch = useDispatch();

  const { pathname } = useLocation();

  const handelClick = () => {

    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');

    reduxDispatch(logoutSrh());
    reduxDispatch(clearFavorites());
    reduxDispatch(setIsLoggedIn(false));

  };
  return (
    <div>
      <Row
        align = "middle"
        wrap = {false}>

        <Col flex = 'none'>
          <div className = {styles.logoContainer}>
            <LogoIcon
              width = {44}
              height = {44}
            />
          </div>
        </Col>
        <Col flex = 'auto'>
          <Menu
            theme = "light"
            mode = "horizontal"
            selectedKeys = {[pathname]}>
            <Menu.Item key = "/">
              <NavLink
                className = {styles.navlink}
                to = {'/'}

              >
              Поиск
              </NavLink>
            </Menu.Item>
            <Menu.Item key = "/favorites">
              <NavLink
                className = {styles.navlink}
                to = {'/favorites'}
              >
                Избранное
              </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col  flex = 'none'>
          <Menu
            mode = 'horizontal'
            style = {{ borderColor: 'transparent' }}
          >
            <Menu.Item key = '/login'>
              <NavLink
                className = {styles.navlink}
                to = {'/login'}
                onClick = {()=>handelClick()}
              >
            Выйти
              </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};
export default Header;
