import { useState, useEffect } from "react";
import '../styles/FriendsList.css'

function FriendsList() {
    const [friends, setFriends] = useState(null)
    const [user, setUser] = useState('')

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser){
            setUser(JSON.parse(loggedInUser))
            setFriends(user.friends)
        }
      }, [user]);
    return (
      <div id="friends" className="post">
          {friends}
      </div>
    );
}

export default FriendsList;
