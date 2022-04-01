import axios from 'axios';
import { useNavigate } from 'react-router';

function Logout() {
    const navigate = useNavigate();

    async function handleLogout(){
        await axios.get('api/logout/');
        localStorage.removeItem("user");
        navigate('/');
    }

    return (
      <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
