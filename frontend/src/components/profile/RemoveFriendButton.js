import axios from 'axios';
import {useParams} from 'react-router-dom'
function RemoveFriendButton() {
    const {username} = useParams()
    async function remove(){
        await axios.get(`/users/friends/remove/${username}/`)
        .then(res => {

        })
        .catch(err =>{
            console.log(err.response);
        })
    }


    return (
        <button onClick={remove}>Remove Friend</button>
    );
}

export default RemoveFriendButton;
