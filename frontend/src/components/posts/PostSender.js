import './PostSender.css'
import VisitedUserDetailsContext from "../../context/VisitedUserDetailsContext";
import {useContext} from 'react'

function PostSender(){
    const visitedUser = useContext(VisitedUserDetailsContext)
    return (
        <div className="post-sender">
            <img src={visitedUser?.avatar} />
            <h3>{visitedUser?.firstname + " " + visitedUser?.lastname}</h3>
        </div>
    )


}
export default PostSender;