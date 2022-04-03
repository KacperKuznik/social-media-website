import axios from 'axios';
import { useState } from 'react';
import '../styles/MessageBox.css'
import Messages from './Messages';
import Cookies from 'js-cookie';

function MessageBox(props) {
      const [typedMessage, setTypedMessage] = useState('')

      async function sendMessage(){
        let body = {
          message: typedMessage
        }
        let config = {
          withCredentials: true,
          headers: {
          'Content-Type': 'application/json',
          'X-CSRFTOKEN': Cookies.get('csrftoken'),
          }
        }
        await axios.post('/api/send_message/'+props.receiver.username+'/', body, config)
        .then(res => {
          console.log(res)
        })
      };

      return (
        <div id='message-box'>

          {props.messages ?  <div>
            {props.messages.map(message => <div key={message.id}>
              <Messages message={message.message} isreceiver={props.receiver.id === message.sender}/>
            </div>)}
          </div> :  null}
            

            <input type='text' value={typedMessage} onChange={(e) => setTypedMessage(e.target.value)}></input>
            <button onClick={sendMessage}>Send</button>
        </div>
      );
    }

export default MessageBox;