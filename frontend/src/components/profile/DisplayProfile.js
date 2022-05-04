import { useEffect, useState } from "react";
import './DisplayProfile.css'
import {motion, AnimatePresence} from 'framer-motion'
import BackgroundImg from "./BackgroundImg";
import PostList from "../posts/PostList";
import ChangeAvatar from "./ChangeAvatar";
import FriendsList from "../FriendsList";
import AddFriendButton from "./AddFriendButton";
import AcceptFriendButton from "./AcceptFriendButton";
import Avatar from "./Avatar";
import RemoveFriendButton from "./RemoveFriendButton";
function DisplayProfile(props) {
  const [myUser, setMyUser] = useState('')
  const [friendButton, setFriendButton] = useState(null)
  useEffect(() => {
    
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser){
      setMyUser(JSON.parse(loggedInUser))
      }
  }, []);

  useEffect(() => {

    if (props.user && !props.isMyUser){
      if (props.user.friends.includes(myUser.id))
        setFriendButton(<RemoveFriendButton />)
      else
        setFriendButton(<AddFriendButton />)
    }
  }, [props, myUser])
  
    

  return (
    <div className="display-profile">
      <BackgroundImg background={props.user.background} username={props.user.username} isMyUser={props.isMyUser}/>
      <div className="profile-info">
        <Avatar avatar={props.user.avatar} isMyUser={props.isMyUser}/>
        <h1>{props.user.username}</h1>
        {friendButton}
    </div>
    <PostList user={props.user} isMyUser={props.isMyUser}/>
    
    <FriendsList friends={props.user.friends}/>
    {/* <AddFriendButton />
    <AcceptFriendButton /> */}
    </div>
    
  );
}

export default DisplayProfile;
