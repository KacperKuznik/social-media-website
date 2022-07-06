import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Friend.css'

function Friend(props) {
    const [friendData, setFriendData] = useState()
    
    useEffect(() => {
        axios.get(`/users/id/${props.id}`)
        .then(res => setFriendData(res.data))
      }, [props]);

    if (friendData)
        return (
        <Link className="friend" to={'/profile/'+friendData.username}>
            <div className="friend-avatar">
                <img src={friendData.avatar} alt="friend avatar"/>
                <div className={`online-status ${friendData.is_active ? "active" : "not-active"}`}></div>
            </div>
            {friendData.username}          
        </Link>
    );
}

export default Friend;
