import axios from 'axios';
import Cookies from 'js-cookie';
import { useState, useContext } from 'react'
import UserDetailsContext from '../../context/UserDetailsContext';

function CreateComment(props){
    const [message, setMessage ] = useState("")
    const {user} = useContext(UserDetailsContext)


    async function postComment(){
        let body = {
            message: message,
        }
        let config = {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/posts/comment/' + props.post_id + "/", body, config)
        .then(res => {
            console.log(res)
        })
    }

    return(
        <span>
            <input value={message} placeholder="create comment" onChange={(e) => setMessage(e.target.value)} onKeyPress={event => {
                if (event.key === 'Enter') {
                  postComment()
                }
              }}/>
            
        </span>
    )
}

export default CreateComment;
