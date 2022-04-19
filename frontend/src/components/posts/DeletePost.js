import axios from 'axios'

const DeletePost = props =>{
    
    const deletePost = () => {
        axios.get(`/posts/delete/${props.id}`)
        .then((res) => props.onDelete())
    }
    return(
        <button onClick={deletePost}>Delete post</button>
    )
}

export default DeletePost;