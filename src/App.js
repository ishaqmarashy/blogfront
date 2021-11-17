import './App.css';
import LoginForm from './compontents/LoginForm';
import {useEffect,useState} from 'react';
import Posts from './compontents/Posts';
const SERVER= "https://murmuring-refuge-74257.herokuapp.com";


function App() {
  const [user,setUser]=useState('');
  const handleSignout=async()=>{
    window.localStorage.clear();
    setUser('')
  }
  useEffect(() => {
    setUser(window.localStorage.getItem('user'));
  },[user])
  return (
    <div className="App">
      <header className="App-header">
        {user?
        <div className="display">
          <Posts user={user} postsURL={`${SERVER}/post`}/>
          <button className='sign-out' onClick={handleSignout}>Sign out</button>
        </div>
        :
        <LoginForm setUser={setUser} SignInURL={SERVER} SignUpURL={`${SERVER}/sign-up`} />
        }
      </header>
    </div>
  );
}

export default App;
