import { useState } from "react";
import '../styles/DisplayProfile.css'
import Post from "./posts/Post";
import xd from './wp5568745-archlinux-anime-wallpapers.png'
function DisplayProfile(props) {
  

  

  return (
    <div className="display-profile">
      <img src={xd} id='background-img'></img>
      {props.user.username}
      {props.user.email}
      <img src={props.user.avatar} id="profile-picture" alt="profile picture"/>
      {props.user.friends}
      <Post />
    </div>
  );
}

export default DisplayProfile;
