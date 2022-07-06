import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import MessageBox from "../components/chat/MessageBox";
import FriendsList from "../components/FriendsList";

const chatStyles = {
      "display": "flex",
      "flexGrow": "1",
}
function MessageRoom() {
    const room = useParams()
    const [messages, setMessages] = useState()
    const [user, setUser] = useState('')
    

  useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser){
          setUser(JSON.parse(loggedInUser))
      }
    }, []);
  
    useEffect(() => {
        axios.get('/chat/messages/'+room.room_id+'/')
        .then(res => setMessages(res.data)) 
    }, [room])
    

      return (
        <div id='msg' style={{'display': 'flex', 'flexDirection': 'column', 'height': "100%"}}>
          <Navbar />
          <main style={chatStyles}>
            <FriendsList/>
            <MessageBox messages={messages} user={user}/>
          </main>
        </div>
      );
    }

export default MessageRoom;
