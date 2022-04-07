import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import MessageBox from "../components/MessageBox";
import FriendsList from "../components/FriendsList";

const chatStyles = {
      "display": "flex",
      "flex-grow": "1",

}
function MessageRoom() {

    const {username} = useParams()
    const [receiver, setReceiver] = useState()
    const [messages, setMessages] = useState()


    useEffect(() => {
        axios.get('/api/users/'+username+'/')
        .then(res => setReceiver(res.data))

      
        axios.get('/api/messages/'+username+'/')
        .then(res => setMessages(res.data))
 
    }, [username])
    

      return (
        <div style={{'display': 'flex', 'flex-direction': 'column', 'height': "100%"}}>
          <Navbar />
          <main style={chatStyles}>
            <FriendsList/>
            {receiver ? <MessageBox messages={messages} receiver={receiver}/> : 'user not found'}
          </main>
        </div>
      );
    }

export default MessageRoom;
