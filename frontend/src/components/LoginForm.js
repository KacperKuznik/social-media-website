import { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import '../styles/LoginForm.css'


function LoginForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ErrorMessage, setErrorMessage] = useState("")

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
        await axios.post('/users/login/', body, config)
        .then(res => {
            const user = res.data;
            localStorage.setItem("user", JSON.stringify(user))
            navigate('/profile/'+user.username)
        })
        .catch(err =>{
            setErrorMessage(err.response.data.message)
        })
    }

    return (
        <form className="login-form" onSubmit={(e) => sendLoginData(e)}>
            <input type='text' value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type='password' value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button>Login</button>
            {ErrorMessage}
        </form>
    );
}

export default LoginForm;
