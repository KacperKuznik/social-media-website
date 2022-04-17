import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import './styles/App.css';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import MessageRoom from './pages/MessageRoom';
import SearchUserRoom from './pages/SearchUserRoom';

import Test from './pages/Test';

function App() {

  useEffect(() => {
    let cookie = Cookies.get("csrftoken");
    if (!cookie){
      axios.get("/api/set-csrf/")
      .then(res => Cookies.set('csrftoken', res.data["csrfToken"]))
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/messages" element={<SearchUserRoom />} />
          <Route path="/messages/:room_id" element={<MessageRoom />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
