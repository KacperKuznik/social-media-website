import { useState, useEffect } from 'react';
import AuthenticationButtons from './AuthenticationButtons';
import Logout from './Logout';
import '../styles/Navbar.css'
import LoginForm from './LoginForm';


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
          <button></button>
        </div>
        <div className='right-nav'>
          {user ? <Logout /> : <AuthenticationButtons />}
          <img className='avatar' src={user.avatar}/>
        </div>
      </nav>
    );
}

export default Navbar;
