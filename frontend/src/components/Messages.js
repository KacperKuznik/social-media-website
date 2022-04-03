import '../styles/Messages.css'

function Messages(props) {

      return (
        <div id="messages">
              <div className={props.isreceiver ? 'receiver-message' : 'sender-message'}>
                {props.message}
              </div>
        </div>
      );
    }

export default Messages;
