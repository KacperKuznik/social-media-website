import { useState, useEffect } from 'react';
import AuthenticationButtons from './AuthenticationButtons';
import Logout from './Logout';
import {Link} from 'react-router-dom'
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
          <Link to='/profile'>profile</Link>
          <Link to='/messages'>messages</Link>
        </div>
        <div className='right-nav'>
          {user ? <Logout /> : <AuthenticationButtons />}
          <Link to='/profile' className='img-link'>
            <img className='avatar' src={user.avatar}/>
          </Link>
        </div>
      </nav>
    );
}

export default Navbar;
