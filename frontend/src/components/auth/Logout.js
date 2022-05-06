import axios from 'axios';
import { useNavigate } from 'react-router';
import {useContext} from 'react'
import UserDetailsContext from '../../context/UserDetailsContext'


function Logout() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDetailsContext)

    async function handleLogout(){
        await axios.get('/users/logout/');
        localStorage.removeItem("user");
        setUser()
        navigate('/');
    }

    return (
      <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
