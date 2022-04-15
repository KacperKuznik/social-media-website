import axios from 'axios';
import { useEffect, useState, useRef} from 'react';
import '../styles/MessageBox.css'
import Messages from './Messages';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';


function MessageBox(props) {
    const [messages, setMessages] = useState()
    const {room_id} = useParams()
    const [typedMessage, setTypedMessage] = useState('')
    const chatSocket =  useRef(null)
      

    useEffect(() => {
      setMessages(props.messages);
      connect()
  }, [props])

  useEffect(() => {
    chatSocket.current.onmessage = (event) =>{
      let data = JSON.parse(event.data)
      if (messages != null)
        setMessages([...messages, data])
      else
        setMessages([data])
    }
    chatSocket.current.onclose= (event) =>{
        console.log(event);
        setTimeout(connect,5000);
    }
}, [messages])
      
    function connect(){
      let socketPath = 'ws://localhost:8000/chat/'+room_id+'/'
      chatSocket.current =  new WebSocket(socketPath)
    }
    
      async function sendMessage(){
        if (chatSocket)
        chatSocket.current.send(JSON.stringify({
          'message': typedMessage}));
      };

      return (

        <div id='message-box'>
          <input type='text' value={typedMessage} onChange={(e) => setTypedMessage(e.target.value)}></input>
          <button onClick={sendMessage}>Send</button>
          {messages ?  <div>{console.log(typeof messages)}
          {console.log(messages)}
            {messages.map(message => <div key={message.id}>
              <Messages message={message.message} isSender={props.user.id === message.sender} time={new Date(message.time)} seen_by={message.seen_by}/>
            </div>)}
          </div> :  null}
        </div>
        
      );
    }
export default MessageBox;