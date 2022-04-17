import './Post.css'
import PostActionButtons from './PostActionButtons';
import PostSender from './PostSender';

import img from '../wp5568745-archlinux-anime-wallpapers.png'
import DeletePost from './DeletePost';
function Post(props){

    return (
        <div className="post" >
            <PostSender {...props.user} />
            <DeletePost post_id={props.post.post_id} onDelete={() => props.onDelete(props.post_id)}/>
            {props.data}
            {/* <PostData />
            
            <PostComment /> */}
            <hr></hr>
            <PostActionButtons {...props.post}/>
        </div>
    )


}
export default Post;