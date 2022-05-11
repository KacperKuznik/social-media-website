import axios from "axios";
import { useState, useEffect } from "react";
import notifications_icon from '../img/notifications.png'
import './Notifications.css'
import useCollapse from 'react-collapsed';

function Notifications(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [notifications, setNotifications] = useState([])
    useEffect(() => {
      axios.get('/users/notifications/').then((res) => setNotifications(res.data))
        
    }, [])
    
    return (
        <div className="notifications" >
            <img src={notifications_icon} {...getToggleProps()}></img>
            {notifications.length > 0 ? <div className="notifications-count">{notifications.length}</div> : null}
            <ul {...getCollapseProps()}>
                {notifications?.map(notification => <li className="content" key={notification.id} >{notification.message}</li>)}     
            </ul>
        </div>
    );
}

export default Notifications;
