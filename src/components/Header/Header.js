import { Link, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import { setIsLoggedIn } from '../../redux/actions/userActions';
import logo from '../../image/sibdev-logo.png';

import './header.css';
import { useDispatch } from 'react-redux';
import { logoutSrh } from '../../redux/actions/youtubeSearchActions';
const Header=()=>{
  const reduxDispatch=useDispatch();
  let pathName = useLocation().pathname;
  const handelClick=()=>{
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    reduxDispatch(logoutSrh());
    reduxDispatch(setIsLoggedIn(false));
  };
  return (<div>

    <header className='header'>
      <div className='head__group'>
        <img
          className='header__logo'
          src={logo}
          alt='logo'/>
        <Link
          className={'header__item-search' +
            (pathName === '/' ? ' header__item-search_active' : '')}
          to='/'>Поиск</Link>
        <Link
          className={'header__item-favorites' +
            (pathName === '/favorites' ? ' header__item-favorites_active' : '')}
          to='/favorites'>Избранное</Link>
      </div>
      <div className='head__group'>
        <Button
          className='header__item-exit'
          variant='outline-primary'
          onClick={handelClick}>Выйти</Button>
      </div>
    </header>
  </div>);
};
export default Header;
