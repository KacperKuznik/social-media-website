import { useState, useEffect } from "react";
import './FriendsList.css'
import Friend from "./Friend";
function FriendsList(props) {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
      if (props.friends)
        setFriends(props.friends)
    }, [props])


    return (
      <div id="friends" className="post">
          {friends.map((friend, index) => <Friend key={index} id={friend}/>)}
      </div>
    );
}

export default FriendsList;
