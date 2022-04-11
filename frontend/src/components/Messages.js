import { useState, useEffect } from 'react';
import '../styles/Messages.css'

function Messages(props) {
  const [showInfo, setShowInfo] = useState(false)
  const [time, setTime] = useState(props.time.toLocaleString("en-US"))

  
      return (
        <div id="messages" >
          {showInfo ? time : null}
              <div className={props.isSender ? 'sender-message': 'receiver-message'} onClick={() => setShowInfo(!showInfo)}>
                {props.message}
              </div>
              {props.seen_by}
        </div>
      );
    }

export default Messages;
