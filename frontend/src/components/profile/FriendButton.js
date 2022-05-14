import {useContext} from 'react'
import RemoveFriendButton from "./RemoveFriendButton";
import AddFriendButton from "./AddFriendButton";
import AcceptFriendButton from './AcceptFriendButton'
import UserDetailsContext from "../../context/UserDetailsContext";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";

function FriendButton(){
    const visitedUser = useContext(VisitedUserDetailsContext)
    const {user} = useContext(UserDetailsContext)
    if (!user || !visitedUser || visitedUser?.id === user?.id ){
        return 
    } else if (visitedUser?.friend_requests?.some((request) => request.request_to === user.id )){
        return <AcceptFriendButton />
    } else if (visitedUser?.friends?.includes(user?.id)){
        return <RemoveFriendButton />
    } else {
        return<AddFriendButton />
    }
}
export default FriendButton;