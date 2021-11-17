import React,{useState} from 'react';
import md5 from "md5"; 
import bcrypt from "bcryptjs";

const LoginForm=({setUser,SignInURL,SignUpURL})=>{
  const [signToggle,setSignToggle]=useState(true);
  const handleSignIn=async (e)=>{
    e.preventDefault();
    const {username, password}=e.target;
    if (username && password)
      try{
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
        window.localStorage.setItem('user',result.token);
        setUser(result.token);
      }
    }
    catch(e){
      throw e;
    } 
  }
  const handleSignUp=async (e)=>{
    e.preventDefault();
    const {username, password}=e.target;
    console.log(username, password , SignUpURL)
    //todo add md5 or bcryptjs
    if (username && password)
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
      await response.json();
    }
    catch(e){
      throw e;
    } 
  }
  const handleToggle=(e)=>{
    e.preventDefault();
    const newSignToggle=!signToggle;
    setSignToggle(newSignToggle);
  }
  const signInForm=<form className='sign-in' onSubmit={handleSignIn}>
    <label htmlFor="username">Username</label>
    <input id="username" name="username" type="text"/>
    <label htmlFor="password">Password</label>
    <input id="password" name="password" type="password"/>
    <button type="submit">Sign-In</button>
  </form>;
  const SignUpForm= <form className='sign-in' onSubmit={handleSignUp}>
    <label htmlFor="username">Username</label>
    <input id="username" name="username" type="text"/>
    <label htmlFor="password">Password</label>
    <input id="password" name="password" type="password"/>
    <label htmlFor="confirm_password">Confirm Password</label>
    <input id="confirm_password" name="confirm_password" type="password"/>
    <button type="submit">Sign-Up</button>
  </form>   
    return (
    <div>
      {signToggle?
        signInForm
        :
        SignUpForm   
      }
      <button className='sign-toggle' onClick={handleToggle}>{signToggle?<>Sign Up</>:<>Sign In</>}</button>
    </div>)
}

export default LoginForm
