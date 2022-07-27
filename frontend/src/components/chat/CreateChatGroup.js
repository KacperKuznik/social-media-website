import { useState, useContext} from 'react';
import addIcon from '../../img/add.png'
import './CreateChatGroup.css'
import UserDetailsContext from '../../context/UserDetailsContext';
import Friend from '../Friend';
import axios from 'axios';
import Cookies from 'js-cookie';

function CreateChatGroup() {
    const [showModal, setShowModal] = useState(false)
    
    return (
        <div onClick={() => setShowModal(true)} className='create-group'>
            <img src={addIcon} alt='plus'/>
            Create new chat group
            {showModal && <AddUsersModal setShowModal={setShowModal}/>}
        </div>
      );
    }

export default CreateChatGroup;

function AddUsersModal(props) {
    const {user} = useContext(UserDetailsContext)
    const [selectedUsers, setSelectedUsers] = useState([])
    const [groupName, setGroupName] = useState("")

    const handleCheckboxChange = e => {
        if (e.target.checked){
            setSelectedUsers( [...selectedUsers, e.target.value])
        }
        else{
            setSelectedUsers(selectedUsers.filter((id) => id !== e.target.value))
        }
    }


    const createGroup = async () => {
        let body = {
            users: selectedUsers,
            name: groupName
        }
        let config = {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('/chat/create-room/', body, config)
        .then(res => {
            props.setShowModal(false)
        })
    }

    return (
        <div className='add-users-modal'>
            <input type='text' placeholder="enter group name" value={groupName} onChange={(e) => setGroupName(e.target.value)}></input>
                {user?.friends?.map((friend, index) => 
                    <div>
                        <Friend key={index} id={friend}/>
                        <input type='checkbox' value={friend}  onChange={handleCheckboxChange}></input>
                    </div>
                )}
                <button onClick={createGroup}>Create group</button>
        </div>
    )
}