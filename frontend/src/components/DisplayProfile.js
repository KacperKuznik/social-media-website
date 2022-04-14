import { useState } from "react";
import '../styles/DisplayProfile.css'

function Profile(props) {
  

  

  return (
    <div className="display-profile">
      {props.user.username}
      {props.user.email}
      <img src={props.user.avatar} id="profile-picture" alt="profile picture"/>
      {props.user.friends}
    </div>
  );
}

export default Profile;
