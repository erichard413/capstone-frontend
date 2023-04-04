import React from "react";
import "../stylesheets/components/Login.css";
import LoginForm from '../forms/LoginForm';

function Login({login}) {
    return (
        <div className="main-content">
            <p>I AM THE LOG IN PAGE!</p>
            <LoginForm login={login}/>
        </div>
    )
}

export default Login