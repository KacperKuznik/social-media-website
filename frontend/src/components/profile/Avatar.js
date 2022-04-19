import ChangeAvatar from "./ChangeAvatar";

function Avatar(props){
    return(<div> 
        <img src={props.avatar} id="profile-picture" alt="profile picture"/>
        {props.isMyUser ? <ChangeAvatar /> : null}
    </div>)
}
export default Avatar;