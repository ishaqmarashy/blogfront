import React from 'react'

function Nav({userName,handleSignout}) {
  return (
    <div className ='nav'>Welcome {userName}! <button className='sign-out' onClick={handleSignout}>Sign out</button></div>
  )
}

export default Nav
