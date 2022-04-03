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
          <Route path="/profile" element={<Profile />} />
          <Route path="/messages/:username" element={<MessageRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
