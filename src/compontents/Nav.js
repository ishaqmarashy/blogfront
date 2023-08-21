import React from 'react'

function Nav({userName,handleSignout}) {
  return (
    <div className="nav">
      <img className='logo' src={process.env.PUBLIC_URL + '/android-chrome-512x512.png'}  alt="logo"/>      
      <div className='nav-sign'>
      <div className='sign-in'>Welcome {userName}!</div>
      </div>
      <div className='nav-out'>
      <button className='sign-out' onClick={handleSignout}>Sign out</button>
      </div>
    </div>
  )
}

export default Nav
