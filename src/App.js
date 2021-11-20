import './App.css';
import LoginForm from './compontents/LoginForm';
import {useEffect,useState} from 'react';
import Nav from './compontents/Nav';
import Posts from './compontents/Posts';
const SERVER= process.env.REACT_APP_SERVER|| 'http//localhost:3001';


function App() {
  const [user,setUser]=useState('');
  const [userName,setUserName]=useState('');
  const handleSignout=async()=>{
    window.localStorage.clear();
    setUser('')
  }
  useEffect(() => {
    const userObj=JSON.parse(window.localStorage.getItem('user'));
    if(userObj&& userObj.user&& userObj.username){
      setUser(userObj.user);
      setUserName(userObj.username);
    }

  },[user])
  return (
    <div className="App">
      {user?
      <Nav userName={userName} handleSignout={handleSignout}/>:
      <LoginForm setUser={setUser} setUserName={setUserName} SignInURL={SERVER} SignUpURL={`${SERVER}/sign-up`} />
      }
      <header className="App-header">
        {user&&<>
        <div className="posts-wrapper">
             <Posts user={user} postsURL={`${SERVER}/post`}/>
        </div></>
        }
      </header>
    </div>
  );
}

export default App;
