import ChangeBackgroundImg from "./ChangeBackgroundImg";
import UserDetailsContext from "../../context/UserDetailsContext";
import {useContext} from 'react'
import {useParams} from 'react-router-dom'

function BackgroundImg(props){
    const visitedUser = useParams()
    const user = useContext(UserDetailsContext)
    return(<div className='background-img'>
        <img src={user.background}></img>
        {visitedUser.username === user.username ? <ChangeBackgroundImg username={visitedUser.username} />: null}
    </div>)
}
export default BackgroundImg;