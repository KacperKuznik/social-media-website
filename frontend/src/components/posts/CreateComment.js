import axios from 'axios';
import Cookies from 'js-cookie';
import comment from '../../img/comment.png'
import { useState } from 'react'

function CreateComment(props){
    const [message, setMessage ] = useState("")

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
            <img src={comment} alt="comment" onClick={postComment}/>
            Comment
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
        </span>
    )
}

export default CreateComment;
