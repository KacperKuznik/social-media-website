import './Post.css'
import PostSender from './PostSender';
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
function CreatePost(props){
    const [text, setText] = useState("")

    async function createNewPost(e){
        e.preventDefault();

        let body = {
            text: text
        }
        let config = {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/posts/create/', body, config)
        .then(res => {
            props.onCreatePost(res.data)
        })
        
    }
    return (
        <div className="post" >
            <PostSender avatar={props.avatar} firstname={props.username} lastname={""}/>
            <br></br>
        
            <form onSubmit={(e) => createNewPost(e)}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Create new post'></input>
                <button>Send</button>
            </form>
        </div>
    )


}
export default CreatePost;