import { useContext } from "react";
import './FriendsList.css'
import Friend from "./Friend";
import RoundedBox from "./RoundedBox";
import VisitedUserDetailsContext from "../context/VisitedUserDetailsContext";

function FriendsList() {
    const user = useContext(VisitedUserDetailsContext)
   
    return (
      <span id="friends">
        <RoundedBox > 
            <h3>Friends ({user?.friends?.length}):</h3>
            {user?.friends?.map((friend, index) => <Friend key={index} id={friend}/>)}
        </RoundedBox>
      </span>
    );
}

export default FriendsList;
