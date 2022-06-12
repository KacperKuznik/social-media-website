import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import DisplayProfile from "../components/profile/DisplayProfile"
import {useParams} from "react-router-dom"
import axios from "axios";
import VisitedUserDetailsContext from '../context/VisitedUserDetailsContext'

function Profile() {
  const {username} = useParams();
  const [visitedUser, setVisitedUser] = useState()
  

  useEffect(() => {
      axios.get(`/users/${username}/`)
      .then(res => setVisitedUser(res.data))
  }, [username])


  return (
    <div>
      <Navbar />
      <VisitedUserDetailsContext.Provider value={visitedUser}>
      <DisplayProfile/>
      </VisitedUserDetailsContext.Provider>
    </div>
  );
}

export default Profile;
