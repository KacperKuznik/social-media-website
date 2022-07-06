import deleteIcon from '../../img/delete.png'
import axios from 'axios'


const DeletePost = props =>{
    
    let style = {
        'display': 'flex',
        'justifyContent': 'flex-end'
    }
    const deletePost = () => {
        axios.get(`/posts/delete/${props.id}`)
        .then((res) => props.onDelete())
    }
    return(
        <div style={style}>
            <img src={deleteIcon} className='icon' alt="delete icon" onClick={deletePost}></img>
        </div>
    )
}

export default DeletePost;