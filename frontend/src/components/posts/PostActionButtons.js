import './PostActionButtons.css'
import comment from '../../img/comment.png'
import LikeButton from './LikeButton';
function PostActionButtons(props){

    return (
        <div className="post-action-buttons">
            
            <LikeButton likes={props.likes} post_id={props.id}/>
            <span>
                <img src={comment} />
                Comment
            </span>
        </div>
    )


}
export default PostActionButtons;