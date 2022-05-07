import ChangeBackgroundImg from "./ChangeBackgroundImg";
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";
import UserDetailsContext from "../../context/UserDetailsContext";
import {useContext} from 'react'

function BackgroundImg(){
    const {user} = useContext(UserDetailsContext)
    const visitedUser = useContext(VisitedUserDetailsContext)
    return(<div className='background-img'>
        <img src={visitedUser?.background}></img>
        {visitedUser?.id === user?.id ? <ChangeBackgroundImg username={visitedUser?.username} />: null}
    </div>)
}
export default BackgroundImg;