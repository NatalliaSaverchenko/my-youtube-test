import { v4 as uuidV4 } from 'uuid';

import users from './users.json';
// import { setUser } from '../redux/actions/userActions';

export default function Login(data){
  let authUser=null;
  const user=users.find(user=>user.username===data.username);

  if (user&&user.password===data.password){
    authUser={
      username:user.username,
      token:uuidV4(),
    };

  }else {
    authUser=null;
  }
  return authUser;

}
