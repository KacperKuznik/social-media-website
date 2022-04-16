import { useState } from "react";
import '../styles/DisplayProfile.css'
import {motion, AnimatePresence} from 'framer-motion'
import xd from './wp5568745-archlinux-anime-wallpapers.png'
import BackgroundImg from "./BackgroundImg";
import PostList from "./posts/PostList";
function DisplayProfile(props) {
  

  return (
    <div className="display-profile">
      <BackgroundImg img={xd} />
      <div className="profile-info">
        <img src={props.user.avatar} id="profile-picture" alt="profile picture"/>
        <h1>{props.user.username}</h1>
    </div>
    <PostList />
    </div>
  );
}

export default DisplayProfile;
