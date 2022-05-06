import { useState, useEffect, useContext } from "react";
import './FriendsList.css'
import Friend from "./Friend";
import RoundedBox from "./RoundedBox";
import UserDetailsContext from "../context/UserDetailsContext";

function FriendsList() {
    const user = useContext(UserDetailsContext)
   
    return (
      <RoundedBox id="friends"> 
          <h3>Friends ({user?.friends?.length}):</h3>
          {user?.friends?.map((friend, index) => <Friend key={index} id={friend}/>)}
      </RoundedBox>
    );
}

export default FriendsList;
