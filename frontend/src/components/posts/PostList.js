import './PostList.css'
import Post from './Post';
import { useState } from 'react';
function PostList(){
const [posts, setPosts] = useState('second')
    return (
        <div className="post-list" >
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </div>
    )


}
export default PostList;