import {useState} from 'react'
import { useNavigate } from 'react-router';
const SearchUser = () => {
    const [searchedUser, setSearchedUser] = useState('');
    const navigate = useNavigate();
    
    function search(){
        navigate(searchedUser)
    }
    return(
        <form onSubmit={(e) => search(e)}>
            <input type='text' value={searchedUser} onChange={(e) => setSearchedUser(e.target.value)}></input>
        </form>
    )
}

export default SearchUser;