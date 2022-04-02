import { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import '../styles/Navbar.css'


function Navbar() {
    const [user, setUser] = useState('')

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser){
            setUser(JSON.parse(loggedInUser))
            console.log(user)
        }
      }, []);

    return (
      <nav className='navbar'>
          {user ? <Logout /> : <Login />}
          
      </nav>
    );
}

export default Navbar;
