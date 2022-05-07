import ChangeAvatar from "./ChangeAvatar";
import UserDetailsContext from "../../context/UserDetailsContext";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";
import {useContext} from 'react'

function Avatar(){
    const {user} = useContext(UserDetailsContext)
    const visitedUser = useContext(VisitedUserDetailsContext)
    return(<div> 
        <img src={visitedUser?.avatar} id="profile-picture" alt="profile picture"/>
        {visitedUser?.id === user?.id ? <ChangeAvatar /> : null}
    </div>)
}
export default Avatar;