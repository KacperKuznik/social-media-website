import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import MessageBox from "../components/MessageBox";


function MessageRoom() {

    const {username} = useParams()
    const [receiver, setReceiver] = useState({})
    const [messages, setMessages] = useState()


    useEffect(() => {
        axios.get('/api/users/'+username+'/')
        .then(res => setReceiver(res.data))
      
        axios.get('/api/messages/'+username+'/')
        .then(res => setMessages(res.data))
 
    }, [username])
    

      return (
        <div style={{"height": "80%"}}>
          <Navbar />
             <MessageBox messages={messages} receiver={receiver}/>

        </div>
      );
    }

export default MessageRoom;
