import { useEffect, useState, useContext } from "react";
import './DisplayProfile.css'
import {motion, AnimatePresence} from 'framer-motion'
import BackgroundImg from "./BackgroundImg";
import PostList from "../posts/PostList";
import FriendsList from "../FriendsList";
import Avatar from "./Avatar";
import UserDetailsContext from "../../context/UserDetailsContext";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";
import FriendButton from "./FriendButton";
function DisplayProfile() {
  
  const {user} = useContext(UserDetailsContext)
  const visitedUser = useContext(VisitedUserDetailsContext)

    

  return (
    <div className="display-profile">
      <BackgroundImg />
      <div className="profile-info">
        <Avatar/>
        <h1>{visitedUser?.username}</h1>

        <FriendButton />
    </div>
    <PostList isMyUser={user?.id === visitedUser?.id}/>
    
    <FriendsList />
    </div>
    
  );
}

export default DisplayProfile;
