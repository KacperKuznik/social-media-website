import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"
import Overlay from "../Overlay";
import './AuthenticationButtons.css'

function AuthenticationButtons() {
    const [showOverlay, setShowOverlay] = useState(false)

    return (
        <div>
            <button onClick={() => setShowOverlay("login")}>Login</button>
            <button onClick={() => setShowOverlay("signup")}>Signup</button>
            {showOverlay ? 
                <div>
                    <Overlay onClick={() => setShowOverlay(!showOverlay)}/>
                    <div className={'form-wrapper'}>
                        {showOverlay==="login" ? <LoginForm  /> : <SignupForm />}
                    </div>
                </div>
            : null}
            
        </div>
    );
}

export default AuthenticationButtons;
