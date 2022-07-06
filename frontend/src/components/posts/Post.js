import './Post.css'
import PostActionButtons from './PostActionButtons';
import PostSender from './PostSender';
import PostData from './PostData'
import RoundedBox from '../RoundedBox';
import DeletePost from './DeletePost';

import { useContext } from 'react';
import UserDetailsContext from '../../context/UserDetailsContext';
import VisitedUserDetailsContext from '../../context/VisitedUserDetailsContext';
function Post(props){
    const {user} = useContext(UserDetailsContext);
    const visitedUser = useContext(VisitedUserDetailsContext);
    return (
        <RoundedBox  className='post'>
            <div className='post'>
                {visitedUser?.id === user?.id && <DeletePost id={props.post.id} onDelete={() => props.onDelete(props.id)}/>}
                <PostSender {...props.post.creator}/>
                <PostData post={props.post} />
                {/* 
                <PostComment /> */}
                <hr></hr>
                <PostActionButtons {...props.post}/>
            </div>
        </RoundedBox>
    )


}
export default Post;