import axios from "axios";
import { useState, useEffect } from "react";
import notifications_icon from '../../img/notifications.png'
import './Notifications.css'
import DropdownMenu from "./DropdownMenu";
import { useNavigate } from "react-router";


function Notifications(props) {
    const [notifications, setNotifications] = useState([])
    const [unseenNotifications, setUnseenNotifications] = useState([])
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
      axios.get('/users/notifications/').then((res) => {
          setNotifications(res.data);
          setUnseenNotifications(res.data.filter(notification => !notification.seen))
        })
        
    }, [])
    const handleClick = (notification) => {
        setOpen(!open);
        navigate('/profile/'+notification.username);
    }
    return (
        <>
            <div className="notifications" onClick={() => setOpen(!open)}>
                <img src={notifications_icon} ></img>
                {unseenNotifications.length > 0 && <div className="notifications-count">{unseenNotifications.length}</div>}
            </div>
            {open && 
                <DropdownMenu>
                    {notifications?.map(notification => 
                        <div className={'dropdown-item'} key={notification.id} onClick={() => handleClick(notification)}>
                            <img src={notification.avatar} className='notification-img'></img>
                            {notification.message}
                        </div>
                    )}
                </DropdownMenu>}
        </>
    );
}

export default Notifications;
