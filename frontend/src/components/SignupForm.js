import { useState } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
//import '../styles/SignupForm.css'


function SignupForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [ErrorMessage, setErrorMessage] = useState("")

    async function sendSignupData(e){
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
        await axios.post('users/signup/', body, config)
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
        <form className="signup-form" onSubmit={(e) => sendSignupData(e)}>
            <input type='text' value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type='password' value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <input type='email' value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
            <button>Login</button>
            {ErrorMessage}
        </form>
    );
}

export default SignupForm;
