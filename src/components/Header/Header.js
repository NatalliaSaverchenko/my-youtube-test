import { NavLink } from 'react-router-dom';
import { Row,Col,Menu,Button } from 'antd';
import { setIsLoggedIn } from '../../redux/actions/userActions';
// import logo from '../../image/sibdev-logo.png';
import { LogoIcon } from '../LogoIcon';
import styles from'./Header.module.css';
import { useDispatch } from 'react-redux';
import { logoutSrh } from '../../redux/actions/youtubeSearchActions';
const Header=()=>{
  const reduxDispatch=useDispatch();
  // let pathName = useLocation().pathname;
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
          defaultSelectedKeys={['/']}>
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
        <Button
          variant='outline-primary'
          onClick={()=>handelClick()}
        >
            Выйти
        </Button>
      </Col>

    </Row>
  </div>);
};
export default Header;
