import React,{useState} from 'react';
import md5 from "md5"; 

const LoginForm=({setUser,SignInURL,SignUpURL,setUserName})=>{
  const [signToggle,setSignToggle]=useState(true);
  const [resultMessage,setResultMessage]=useState('');
  const handleSignIn=async (e)=>{
    e.preventDefault();
    const {username, password}=e.target;
    if (username && password){
        setResultMessage('Attempting log-in...');
        const newPass=md5(password.value);
        const data=JSON.stringify({username:username.value,password:newPass});
        const response = await fetch(SignInURL, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: data 
      });
      const result=await response.json();
      if (result && result.token){
        window.localStorage.setItem('user',JSON.stringify({user:result.token,username:username.value}));
        setResultMessage('');
        setUserName(username.value);
        setUser(result.token);
      }
      else {
        setResultMessage('Invalid credentials...');
        setTimeout(()=>setResultMessage(''),3000);
      }
    }
  }
  const handleSignUp=async (e)=>{
    e.preventDefault();
    const {username, password,confirm_password}=e.target;
    //todo add md5 or bcryptjs
    if (username && password && confirm_password.value===password.value)
      try{
        const newPass=md5(password.value);
        const data=JSON.stringify({username:username.value,password:newPass});
        const response = await fetch(SignUpURL, {
        method: 'POST',
        mode: 'cors', 
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: data 
      });
      const res= response;
      if(res.status !== 200){
        setResultMessage('Username is taken!');
        setTimeout(()=>setResultMessage(''),3000);
      }
      else{
        setResultMessage('Sign-up sucessful!');
        setTimeout(()=>setResultMessage(''),3000);
      }
    }
    catch(e){
      throw e;
    }
  else {
    setResultMessage('Please Fill all fields and make sure password and password confirmation match...');
    setTimeout(()=>setResultMessage(''),3000);
    }
  }
  const handleToggle=(e)=>{
    e.preventDefault();
    setResultMessage('');
    const newSignToggle=!signToggle;
    setSignToggle(newSignToggle);
  }
  const signInForm=<form className='sign-in' onSubmit={handleSignIn}>
    <label htmlFor="username">Username:&nbsp;</label>
    <input id="username" name="username" type="text"/>
    <label htmlFor="password">Password:&nbsp;</label>
    <input id="password" name="password" type="password"/>
    <button type="submit">Sign-In</button>
    <div className='error'>{resultMessage}</div>

  </form>;
  const SignUpForm= <form className='sign-in' onSubmit={handleSignUp}>
    <label htmlFor="username">Username:&nbsp;</label>
    <input id="username" name="username" type="text"/>
    <label htmlFor="password">Password:&nbsp;</label>
    <input id="password" name="password" type="password"/>
    <label htmlFor="confirm_password">Confirm Password:&nbsp;</label>
    <input id="confirm_password" name="confirm_password" type="password"/>
    <button type="submit">Sign-Up</button>
    <div className='error'>{resultMessage}</div>

  </form>   
    return (
    <div className="nav">
      {signToggle?
        signInForm
        :
        SignUpForm
      }
      <button className='sign-out' onClick={handleToggle}>{signToggle?<>Sign Up</>:<>Sign In</>}</button>
    </div>)
}

export default LoginForm
