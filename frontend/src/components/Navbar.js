import { useState, useEffect, useContext } from 'react';
import AuthenticationButtons from './auth/AuthenticationButtons';
import Logout from './auth/Logout';
import {Link} from 'react-router-dom'
import UserDetailsContext from '../context/UserDetailsContext'
import './Navbar.css'



function Navbar() {
    const {user} = useContext(UserDetailsContext)

    return (
      <nav className='navbar'>
        
        <div className='left-nav'>
          <Link to={'/home/'} >home</Link>
          {user? <>
            <Link to={'/profile/'+user?.username} >profile</Link>
            <Link to='/messages'>messages</Link>
          </>
          : null}

        </div>
        <div className='right-nav'>
          {user ? 
          <>
            <Logout /> 
            <Link to={'/profile/'+user?.username} className='img-link'>
            <img className='avatar' alt='avatar' src={user?.avatar}/>
          </Link>
          </>: <AuthenticationButtons />}

        </div>
      </nav>
    );
}

export default Navbar;
