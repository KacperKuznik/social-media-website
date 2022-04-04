import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import DisplayProfile from "../components/DisplayProfile"

function Profile() {
  const [user, setUser] = useState('')

  useEffect(() => {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser){
          setUser(JSON.parse(loggedInUser))
      }
    }, []);
  

  return (
    <div>
      <Navbar />
      <DisplayProfile user={user} />
    </div>
  );
}

export default Profile;
