import './Post.css'
import PostSender from './PostSender';
import { useState, useContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import RoundedBox from '../RoundedBox';
import UploadImages from './UploadImages';
import UserDetailsContext from '../../context/UserDetailsContext';
function CreatePost(props){
    const [text, setText] = useState("")
    const [images, setImages] = useState([]);
    const {user} = useContext(UserDetailsContext);


    async function createNewPost(e){
        e.preventDefault();
        const data = new FormData()
        data.append('text', text)
        images.forEach((image) => data.append('images', image))
        let config = {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/posts/create/', data, config)
        .then(res => {
            props.onCreatePost(res.data);
            console.log(res.data);
        })
        
    }
    return (
        <RoundedBox>
            {console.log(user)}
            <PostSender {...user}/>
            <br></br>
            <form onSubmit={(e) => createNewPost(e)} style={{display: "flex"}}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Create new post'></input>
                <UploadImages setImages={(files) => setImages([...images, ...files])}/>
                {images.length > 0 ? <> Selected {images.length} images </> : null}
                <button>Send</button>
            </form>
        </RoundedBox>
    )


}
export default CreatePost;