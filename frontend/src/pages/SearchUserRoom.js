import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar"
import SearchUser from "../components/SearchUser";

function SearchUserRoom() {


  return (
    <div>
      <Navbar />
      <SearchUser />
    </div>
  );
}

export default SearchUserRoom;
