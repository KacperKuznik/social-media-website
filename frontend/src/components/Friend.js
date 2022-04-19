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
                <img src={friendData.avatar} />          
                {friendData.username}          
        </Link>
    );
}

export default Friend;
