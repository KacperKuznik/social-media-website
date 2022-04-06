import axios from 'axios';
import { useEffect, useState, useRef} from 'react';
import '../styles/MessageBox.css'
import Messages from './Messages';
import Cookies from 'js-cookie';
import { useParams } from 'react-router';


function MessageBox(props) {
    const [messages, setMessages] = useState()
    const {username} = useParams()
    const [typedMessage, setTypedMessage] = useState('')
    const chatSocket =  useRef(null)
      

    useEffect(() => {
      setMessages(props.messages);
      connect()
  }, [props])

  useEffect(() => {
    chatSocket.current.onmessage = (event) =>{
      let data = JSON.parse(event.data)
      console.log(data)
      setMessages([data])
      console.log(messages)
      setMessages([...messages, data])
    }
    chatSocket.current.onclose= (event) =>{
        console.log(event);
        setTimeout(connect,5000);
    }
}, [messages])
      
    function connect(){
      let socketPath = 'ws://127.0.0.1:8000/chat/'+username+'/'
      chatSocket.current =  new WebSocket(socketPath)
    }
    
      async function sendMessage(){
        if (chatSocket)
        chatSocket.current.send(JSON.stringify({
          'message': typedMessage}));
          
      //  let config = {
      //    withCredentials: true,
      //    headers: {
      //    'Content-Type': 'application/json',
      //    'X-CSRFTOKEN': Cookies.get('csrftoken'),
      //    }
      //  }
      //  await axios.post('/api/send_message/'+props.receiver.username+'/', body, config)
      //  .then(res => {
      //    console.log(res)
      //  })
      };

   
      return (
        <div id='message-box'>

          {messages ?  <div>
            {messages.map(message => <div key={message.id}>
              <Messages message={message.message} isreceiver={props.receiver.id === message.sender}/>
            </div>)}
          </div> :  null}
            

            <input type='text' value={typedMessage} onChange={(e) => setTypedMessage(e.target.value)}></input>
            <button onClick={sendMessage}>Send</button>
        </div>
      );
    }

export default MessageBox;