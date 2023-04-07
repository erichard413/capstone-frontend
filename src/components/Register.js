import React from "react";
import "../stylesheets/components/Register.css";
import RegisterForm from '../forms/RegisterForm';

function Register({setUser, teams}) {
    return (
        <div className="Register main-content">
            <h2>Create an Account</h2>
            <RegisterForm setUser={setUser} teams={teams}/>
        </div>
    )
}

export default Register