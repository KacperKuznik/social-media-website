import { useNavigate } from 'react-router';

function Group(props) { 
  const navigate = useNavigate();
  
  return (
    <div className="chat-group" onClick={() => navigate('/messages/'+props.id)}>
        {props.name}
    </div>
  );
}

export default Group;
