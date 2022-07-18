import './PostActionButtons.css'
import LikeButton from './LikeButton';
import CreateComment from './CreateComment';
import comment from '../../img/comment.png'
import {useState} from 'react'

import { Link } from "react-router-dom";


function PostActionButtons(props){
    const [showComments, setShowComments] = useState(false);
    return (
        <div>
            <div className="post-action-buttons">
                <LikeButton likes={props.likes} liked_by={props.liked_by} post_id={props.id}/>
                <span>
                    <img src={comment} alt="comment" onClick={() => setShowComments(!showComments)}/>
                    Comment
                </span>
            </div>
            <div>
                <hr />
                <CreateComment post_id={props.id} />
                {props.comment_set.map(comment => 
                    <div key={comment.id}>
                        <div style={{"height": "50px"}}>
                            <Link to={'/profile/'+comment.creator.username}>
                                <img src={comment.creator.avatar} className="avatar" alt='avatar'/>
                                {comment.creator.first_name} {comment.creator.last_name}
                            </Link>
                        </div>
                        {comment.text}
                    </div>
                    )}
            </div>
        </div>
    )


}
export default PostActionButtons;