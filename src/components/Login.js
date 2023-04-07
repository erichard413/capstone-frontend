import React from "react";
import "../stylesheets/components/Login.css";
import LoginForm from '../forms/LoginForm';

function Login({login}) {
    return (
        <div className="Login main-content">
            <h2>Login</h2>
            <LoginForm login={login}/>
        </div>
    )
}

export default Login