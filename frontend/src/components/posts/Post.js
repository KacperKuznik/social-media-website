import './Post.css'
import PostActionButtons from './PostActionButtons';
import PostSender from './PostSender';
import PostData from './PostData'
import RoundedBox from '../RoundedBox';

import DeletePost from './DeletePost';
function Post(props){

    return (
        <RoundedBox  className='post'>
            <div className='post'>
                <PostSender />
                <PostData post={props.post} />
                {/* 
                <PostComment /> */}
                <DeletePost id={props.post.id} onDelete={() => props.onDelete(props.id)}/>
                <hr></hr>
                <PostActionButtons {...props.post}/>
            </div>
        </RoundedBox>
    )


}
export default Post;