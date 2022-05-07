import {useContext} from 'react'
import RemoveFriendButton from "./RemoveFriendButton";
import AddFriendButton from "./AddFriendButton";
import UserDetailsContext from "../../context/UserDetailsContext";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";

function FriendButton(){
    const visitedUser = useContext(VisitedUserDetailsContext)
    const {user} = useContext(UserDetailsContext)

    if (!user || !visitedUser || visitedUser?.id === user?.id){
        return 
    } else if (user?.friends?.includes(visitedUser?.id)){
        return <RemoveFriendButton />
    } else {
        return<AddFriendButton />
    }
}
export default FriendButton;