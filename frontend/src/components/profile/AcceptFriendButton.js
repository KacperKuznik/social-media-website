import axios from 'axios';
import {useParams} from 'react-router-dom'
function AcceptFriendButton() {
    const {username} = useParams()
    async function add(){
        await axios.get(`/users/friends/accept/${username}/`)
        .then(res => {

        })
        .catch(err =>{
            console.log(err.response);
        })
    }


    return (
        <button onClick={add}>Accept Friend</button>
    );
}

export default AcceptFriendButton;