import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
const SearchUser = () => {
    const [searchedUser, setSearchedUser] = useState('');
    const [users, setUsers] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('/users/get_users/')
        .then(res => setUsers(res.data));
    }, [])
    
    function search(){
        navigate(searchedUser)
    }
    return(
        <form onSubmit={(e) => search(e)}>
            <input  list='searchlist' value={searchedUser} onChange={(e) => setSearchedUser(e.target.value)}></input>
            <datalist  id="searchlist">
                {users ? users.map(user => 
                    <option key={user.id} value={user.username} />) : null}   
            </datalist>
        </form>
    )
}

export default SearchUser;