import { v4 as uuidV4 } from 'uuid';
import users from './users.json';
export function login(data){
  // console.log(users);
  const user=users.find(user=>user.username===data.username);
  if (user&&user.password===data.password){
    return{
      username:user.username,
      token:uuidV4(),
    };
  }
  return null;
}
