import axios from "axios";
import { useState, useEffect } from "react";
import notifications_icon from '../img/notifications.png'
import './Notifications.css'


function Notifications(props) {
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
      axios.get('/users/notifications/').then((res) => setNotifications(res.data))
        
    }, [])
    
    return (
        <div className="notifications">
            <img src={notifications_icon}></img>
            {notifications.length > 0 ? <div className="notifications-count">{notifications.length}</div> : null}
            {notifications?.map(notification => console.log(notification))}
        </div>
    );
}

export default Notifications;
