import './PostList.css'
import Post from './Post';
import { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import sadFace from '../../img/sad.png'
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
            {posts.length === 0 ? 
                <>
                    <p>this user doesn't have any posts</p>
                    <img src={sadFace} alt='sad face' width={"30%"}></img>
                </> : posts.map((post, index) => <Post key={index} post={post}  onDelete={() => deletePost(post.id)}/>)}
        </div>
    )


}
export default PostList;