import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import DisplayProfile from "../components/DisplayProfile"
import {useParams} from "react-router-dom"
import axios from "axios";


function Profile() {
  const [user, setUser] = useState('')
  const [myUser, setMyUser] = useState('')
  const {username} = useParams();


  useEffect(() => {
      const myUser = localStorage.getItem('user');
      if (myUser){
          setMyUser(JSON.parse(myUser))
      }
    }, []);

  useEffect(() => {
      axios.get(`/users/${username}/`)
      .then(res => setUser(res.data))
  }, [username])


  return (
    <div>
      <Navbar />
      <DisplayProfile user={user} isMyUser={username===myUser.username}/>
      
    </div>
  );
}

export default Profile;
