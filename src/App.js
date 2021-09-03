import { useSelector } from 'react-redux';
import{ RouterView } from './router';
import { Header } from './components';
import './App.css';

function App() {
  const user=useSelector((store)=>store.user);
  console.log('user',user);
  return (
    <div className="App">
      {user.isLoggedIn&&<Header/>}
      <RouterView/>
    </div>
  );
}

export default App;
