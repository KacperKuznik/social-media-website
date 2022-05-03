import './Post.css'
import PostActionButtons from './PostActionButtons';
import PostSender from './PostSender';
import PostData from './PostData'

import DeletePost from './DeletePost';
function Post(props){

    return (
        <div className="post" >
            <PostSender {...props.user} />
            <PostData text={props.post.text}/>
            {/* 
            <PostComment /> */}
            <DeletePost id={props.post.id} onDelete={() => props.onDelete(props.id)}/>

            <hr></hr>
            <PostActionButtons {...props.post}/>
        </div>
    )


}
export default Post;