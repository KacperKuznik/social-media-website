import ChangeAvatar from "./ChangeAvatar";
import UserDetailsContext from "../../context/UserDetailsContext";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";
import {useContext} from 'react'

function Avatar(){
    const {user} = useContext(UserDetailsContext)
    const visitedUser = useContext(VisitedUserDetailsContext)
    return(<div className="profile-picture">
        <img src={visitedUser?.avatar} alt="profile"/>
        {visitedUser?.id === user?.id ? <ChangeAvatar /> : null}
    </div>)
}
export default Avatar;