import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import './App.css';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import MessageRoom from './pages/MessageRoom';
import SearchUserRoom from './pages/SearchUserRoom';
import LandingPage from './pages/LandingPage';
import UserDetailsContext from './context/UserDetailsContext'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    let cookie = Cookies.get("csrftoken");
    if (!cookie){
      axios.get("/api/set-csrf/")
      .then(res => Cookies.set('csrftoken', res.data["csrfToken"]))
    }
  }, []);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser){
        setUser(JSON.parse(loggedInUser))
    }
  }, []);

  return (
    <div className="App">
     <UserDetailsContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/messages" element={<SearchUserRoom />} />
            <Route path="/messages/:room_id" element={<MessageRoom />} />
          </Routes>
        </BrowserRouter>
      </UserDetailsContext.Provider>
    </div>
  );
}

export default App;
