import UserDetailsContext from "../../context/UserDetailsContext";
import {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import RemoveFriendButton from "./RemoveFriendButton";
import AddFriendButton from "./AddFriendButton";

function FriendButton(){
    const visitedUser = useParams()
    const user = useContext(UserDetailsContext)
    const [friendButton, setFriendButton] = useState(null)

    useEffect(() => {
            
        if (user && visitedUser.username!=user.username){
          if (user.friends.includes(user.id))
            setFriendButton(<RemoveFriendButton />)
          else
            setFriendButton(<AddFriendButton />)
        }
      }, [user])
    return(<div>
        {friendButton}
        </div>
    )
}
export default FriendButton;