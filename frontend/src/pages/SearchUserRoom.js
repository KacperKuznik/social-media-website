import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import SearchUser from "../components/SearchUser";

function Profile() {


  return (
    <div>
      <Navbar />
      <SearchUser />
    </div>
  );
}

export default Profile;
