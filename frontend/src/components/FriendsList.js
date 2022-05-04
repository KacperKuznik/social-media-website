import { useState, useEffect } from "react";
import './FriendsList.css'
import Friend from "./Friend";
import RoundedBox from "./RoundedBox";
function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
      if (props.friends)
        setFriends(props.friends)
    }, [props])


    return (
      <RoundedBox id="friends"> 
          <h3>Friends ({friends.length}):</h3>
          {friends.map((friend, index) => <Friend key={index} id={friend}/>)}
      </RoundedBox>
    );
}

export default FriendsList;
