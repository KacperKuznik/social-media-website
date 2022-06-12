import { useEffect, useState, useContext } from "react";
import './DisplayProfile.css'
import BackgroundImg from "./BackgroundImg";
import PostList from "../posts/PostList";
import FriendsList from "../FriendsList";
import Avatar from "./Avatar";
import UserDetailsContext from "../../context/UserDetailsContext";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";
import FriendButton from "./FriendButton";
import axios from "axios";
function DisplayProfile() {
  
  const {user} = useContext(UserDetailsContext)
  const visitedUser = useContext(VisitedUserDetailsContext)
  const [posts, setPosts] = useState([])


  useEffect(() => {
    if (visitedUser)
    axios.get(`/posts/${visitedUser?.username}/`)
    .then(res => setPosts(res.data.reverse()))
}, [visitedUser])
    

  return (
    <div className="display-profile">
      <BackgroundImg />
      <div className="profile-info">
        <Avatar/>
        <h1>{visitedUser?.first_name + " " + visitedUser?.last_name}</h1>

        <FriendButton />
    </div>
    <PostList showCreatePost={user?.id === visitedUser?.id} posts={posts}/>
    
    <FriendsList />
    </div>
    
  );
}

export default DisplayProfile;
