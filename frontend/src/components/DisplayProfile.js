import { useState } from "react";
import '../styles/DisplayProfile.css'
import {motion, AnimatePresence} from 'framer-motion'
import BackgroundImg from "./BackgroundImg";
import PostList from "./posts/PostList";
import ChangeAvatar from "./profile/ChangeAvatar";
import FriendsList from "./FriendsList";
import AddFriendButton from "./profile/AddFriendButton";
import AcceptFriendButton from "./profile/AcceptFriendButton";
import Avatar from "./profile/Avatar";
function DisplayProfile(props) {
  

  return (
    <div className="display-profile">
      <BackgroundImg background={props.user.background} username={props.user.username} isMyUser={props.isMyUser}/>
      <div className="profile-info">
        <Avatar avatar={props.user.avatar} isMyUser={props.isMyUser}/>
        <h1>{props.user.username}</h1>
    </div>
    <PostList user={props.user} isMyUser={props.isMyUser}/>
    
    <FriendsList friends={props.user.friends}/>
    {/* <AddFriendButton />
    <AcceptFriendButton /> */}
    </div>
    
  );
}

export default DisplayProfile;
