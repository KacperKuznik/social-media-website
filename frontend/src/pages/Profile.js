import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import DisplayProfile from "../components/profile/DisplayProfile"
import {useParams} from "react-router-dom"
import axios from "axios";
import UserDetailsContext from '../context/UserDetailsContext'

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
      <UserDetailsContext.Provider value={user}>
      <DisplayProfile user={user} isMyUser={username===myUser.username}/>
      </UserDetailsContext.Provider>
    </div>
  );
}

export default Profile;
