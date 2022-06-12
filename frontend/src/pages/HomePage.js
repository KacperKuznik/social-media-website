import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import PostList from '../components/posts/PostList'

function HomePage() {
  const [homePosts, setHomePosts] = useState([])
  useEffect(() => {
    axios.get('/posts/home').then((res) =>{
      setHomePosts(res.data.reverse());
      console.table(res.data)
    })
  }, [])
  


  return (
    <div>
      <Navbar />
      <PostList showCreatePost={true} posts={homePosts}/>
    </div>
  );
}

export default HomePage;
