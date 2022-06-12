import { useState, useContext } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import UserDetailsContext from "../../context/UserDetailsContext";



function SignupForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ErrorMessage, setErrorMessage] = useState("")
    const { setUser } = useContext(UserDetailsContext)


    async function sendSignupData(e){
        e.preventDefault();

        let body = {
            username,
            password,
            first_name: firstName,
            last_name: lastName,
            email
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
            setUser(user)
            localStorage.setItem("user", JSON.stringify(user))
            navigate('/profile/'+user.username)
        })
        .catch(err =>{
            setErrorMessage(err.response.data.message)
        })
    }

    return (
        <form className="signup-form" onSubmit={(e) => sendSignupData(e)}>
            <input type='text' value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type='text' value={firstName} placeholder="first name" onChange={(e) => setFirstName(e.target.value)}></input>
            <input type='text' value={lastName} placeholder="last name" onChange={(e) => setLastName(e.target.value)}></input>
            <input type='password' value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}></input>
            <input type='email' value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
            <button>Login</button>
            {ErrorMessage}
        </form>
    );
}

export default SignupForm;
