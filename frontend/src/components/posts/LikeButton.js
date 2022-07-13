import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import UserDetailsContext from '../../context/UserDetailsContext'
import likeIcon from '../../img/like.png'
import blueLikeIcon from '../../img/like_blue.png'

const LikeButton = props =>{
    const {user} = useContext(UserDetailsContext)

    const [likes, setLikes] = useState(props.likes)
    const [liked, setLiked] = useState(false)
    useEffect(() => {
        setLikes(props.likes)
        setLiked(props.liked_by.includes(user.id))
    }, [props, user.id])

    const like = () => {
        axios.get(`/posts/like/${props.post_id}`)
        .then((res) => {
            setLikes(res.data.likes)
            setLiked(res.data.liked_by.includes(user.id))
        })
    }
    return(
        <span onClick={() => like()}>
            {likes}
            <img src={liked ? blueLikeIcon : likeIcon} alt='like icon' />
            Like
        </span>
    )
}

export default LikeButton;