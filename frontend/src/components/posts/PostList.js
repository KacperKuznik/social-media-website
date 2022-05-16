import './PostList.css'
import Post from './Post';
import { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import axios from 'axios';
import {useParams} from 'react-router-dom'
function PostList(props){
    const [posts, setPosts] = useState([])
    const {username} = useParams();

    
    useEffect(() =>{
        axios.get(`/posts/${username}/`)
        .then(res => setPosts(res.data.reverse()))
    },[username]) 
    
    
    const deletePost = (id) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    }
    return (
        <div className="post-list" >
            {props.isMyUser ? <CreatePost onCreatePost={(post) => setPosts([post, ...posts,]) }  /> : null}
            {posts.length === 0 ? "this user doesn't have any posts" : 
                posts.map((post, index) => <Post key={index} post={post}  onDelete={() => deletePost(post.id)}/>)}

        </div>
    )


}
export default PostList;