import axios from 'axios'
import { useState } from 'react'
import likeIcon from '../../img/like.png'

const LikeButton = props =>{
    const [likes, setLikes] = useState(props.likes)
    const like = () => {
        axios.get(`/posts/like/${props.post_id}`)
        .then((res) => setLikes(res.data.likes))

    }
    return(
        <span onClick={() => like()}>
            {likes}
            <img src={likeIcon} />
            Like
        </span>
    )
}

export default LikeButton;