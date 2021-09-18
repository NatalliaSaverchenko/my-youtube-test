import { NavLink } from 'react-router-dom';
import { Row,Col,Menu } from 'antd';
import { setIsLoggedIn } from '../../redux/actions/userActions';
import { useLocation } from 'react-router';
// import logo from '../../image/sibdev-logo.png';
import { LogoIcon } from '../LogoIcon';
import styles from'./Header.module.css';
import { useDispatch } from 'react-redux';
import { logoutSrh } from '../../redux/actions/youtubeSearchActions';
const Header=()=>{
  const reduxDispatch=useDispatch();
  const { pathname } = useLocation();
  const handelClick=()=>{
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    reduxDispatch(logoutSrh());
    reduxDispatch(setIsLoggedIn(false));
  };
  return (<div>
    <Row
      align="middle"
      wrap={false}>

      <Col flex='none'>
        <div className={styles.logoContainer}>
          <LogoIcon
            width={44}
            height={44}
          />
        </div>
      </Col>
      <Col flex='auto'>
        <Menu
          theme="light"
          mode="horizontal"
          selectedKeys={[pathname]}>
          <Menu.Item key="/">
            <NavLink
              className={styles.navlink}
              to={'/'}
              // onClick={}

            >Поиск</NavLink></Menu.Item>
          <Menu.Item key="/favorites">
            <NavLink
              className={styles.navlink}
              to={'/favorites'}>
                Избранное
            </NavLink>
          </Menu.Item>
        </Menu>
      </Col>
      <Col  flex='none'>
        <Menu
          mode='horizontal'
          style={{ borderColor: 'transparent' }}
        >
          <Menu.Item key='/login'>
            <NavLink
              className={styles.navlink}
              to={'/login'}

              onClick={()=>handelClick()}
            >
            Выйти
            </NavLink>
          </Menu.Item>
        </Menu>
      </Col>

    </Row>
  </div>);
};
export default Header;
