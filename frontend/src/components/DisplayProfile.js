import { useState } from "react";
import '../styles/DisplayProfile.css'

function Profile(props) {
  

  

  return (
    <div className="display-profile">
      {props.user.username}
      {props.user.email}
      <img src={props.user.avatar} alt="profile picture"/>
    </div>
  );
}

export default Profile;