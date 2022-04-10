import '../styles/Messages.css'

function Messages(props) {

      return (
        <div id="messages">
              <div className={props.isSender ? 'sender-message': 'receiver-message'}>
                {props.message}
              </div>
        </div>
      );
    }

export default Messages;
