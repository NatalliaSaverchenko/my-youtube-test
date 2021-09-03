import { useSelector } from 'react-redux';
import { useLocation,useHistory } from 'react-router-dom';

export const useRouteGuard=()=>{
  const { pathname }=useLocation();
  const { isLoggedIn }=useSelector(store=>store.user);
  const routeHistory=useHistory();
  if (!isLoggedIn&&pathname!=='/login'){
    routeHistory.push('/login');
  }
  return null;
};
