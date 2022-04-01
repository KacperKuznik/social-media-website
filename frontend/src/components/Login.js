import { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
//import '../styles/Login.css'
function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ErrorMessage, setErrorMessage] = useState("")
    const [email, setEmail] = useState("");

    async function sendLoginData(e){
        e.preventDefault();

        let body = {
            username: username,
            password: password,
        }
        let config = {
            withCredentials: true,
            headers: {
            'Content-Type': 'application/json',
            'X-CSRFTOKEN': Cookies.get('csrftoken'),
            }
        }
        await axios.post('api/login/', body, config)
        .then(res => {
            const user = res.data;
            localStorage.setItem("user", JSON.stringify(user))
            navigate('/profile')
        })
        .catch(err =>{
            setErrorMessage(err.response.data.message)
        })
    }

    return (
      <div className='login'>
        <form onSubmit={(e) => sendLoginData(e)}>
            <input type='text' value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type='password' value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            {/* <input type='email' value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input> */}
            {ErrorMessage}
            <button>submit</button>
        </form>
      </div>
    );
}

export default Login;
