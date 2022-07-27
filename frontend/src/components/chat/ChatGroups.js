import { useState, useEffect } from 'react';
import './ChatGroups.css'
import CreateChatGroup from './CreateChatGroup';
import axios from 'axios';
import Group from './Group';
function ChatGroups() {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        axios.get(`/chat/rooms/`).then(res => setRooms(res.data))
    }, [])
  
      return (
        <div className="chat-group-list">
            <CreateChatGroup />
            {rooms?.map(room => <Group key={room.id} {...room} />)}
        </div>
      );
    }

export default ChatGroups;
