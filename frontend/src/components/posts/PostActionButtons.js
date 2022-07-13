import './PostActionButtons.css'
import LikeButton from './LikeButton';
import CreateComment from './CreateComment';

function PostActionButtons(props){
    
    return (
        <div className="post-action-buttons">
            <LikeButton likes={props.likes} liked_by={props.liked_by} post_id={props.id}/>
            <CreateComment post_id={props.id} />
        </div>
    )


}
export default PostActionButtons;