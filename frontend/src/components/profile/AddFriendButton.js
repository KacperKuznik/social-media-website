import axios from 'axios';
import {useParams} from 'react-router-dom'
function AddFriendButton() {
    const {username} = useParams()
    async function add(){
        await axios.get(`/users/friends/request/${username}/`)
        .then(res => {

        })
        .catch(err =>{
            console.log(err.response);
        })
    }


    return (
        <button onClick={add}></button>
    );
}

export default AddFriendButton;
