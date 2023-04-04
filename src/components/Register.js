import React from "react";
import "../stylesheets/components/Register.css";
import RegisterForm from '../forms/RegisterForm';

function Register({setUser, teams}) {
    return (
        <div className="main-content">
            <p>I AM THE REGISTER PAGE</p>
            <RegisterForm setUser={setUser} teams={teams}/>
        </div>
    )
}

export default Register