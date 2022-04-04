import { useState, useEffect } from 'react';
import AuthenticationButtons from './AuthenticationButtons';
import Logout from './Logout';
import '../styles/Navbar.css'



function Navbar() {
    const [user, setUser] = useState('')

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser){
            setUser(JSON.parse(loggedInUser))
        }
      }, []);

    return (
      <nav className='navbar'>
        <div className='left-nav'>
          <a href='/profile'>profile</a>
          <a href='/messages'>messages</a>
        </div>
        <div className='right-nav'>
          {user ? <Logout /> : <AuthenticationButtons />}
          <img className='avatar' src={user.avatar}/>
        </div>
      </nav>
    );
}

export default Navbar;
