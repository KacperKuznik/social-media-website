import './Post.css'
import PostActionButtons from './PostActionButtons';
import PostSender from './PostSender';

import DeletePost from './DeletePost';
function Post(props){

    return (
        <div className="post" >
            <PostSender {...props.user} />
            <DeletePost id={props.post.id} onDelete={() => props.onDelete(props.id)}/>
            {props.data}
            {/* <PostData />
            
            <PostComment /> */}
            <hr></hr>
            <PostActionButtons {...props.post}/>
        </div>
    )


}
export default Post;