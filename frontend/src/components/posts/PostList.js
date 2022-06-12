import './PostList.css'
import Post from './Post';
import { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
function PostList(props){
    const [posts, setPosts] = useState([])

    useEffect(() =>{
        setPosts(props.posts)
    },[props]) 
    
    const deletePost = (id) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
    }
    return (
        <div className="post-list" >
            {props.showCreatePost ? <CreatePost onCreatePost={(post) => setPosts([post, ...posts,]) }  /> : null}
            {posts.length === 0 ? "this user doesn't have any posts" : 
                posts.map((post, index) => <Post key={index} post={post}  onDelete={() => deletePost(post.id)}/>)}

        </div>
    )


}
export default PostList;