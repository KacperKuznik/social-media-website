import './PostActionButtons.css'
import comment from '../../img/comment.png'
import like from '../../img/like.png'
function PostActionButtons(){

    return (
        <div className="post-action-buttons">
            <span>
                <img src={like} />
                Like
            </span>
            <span>
                <img src={comment} />
                Comment
            </span>
        </div>
    )


}
export default PostActionButtons;