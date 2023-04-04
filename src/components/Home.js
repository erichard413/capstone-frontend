import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'reactstrap';
import WatchedTeams from './User/WatchedTeams';
import FavPlayers from './Players/FavPlayers';

function Home({user, setUser}) {
    const navigate = useNavigate();

    if (localStorage.getItem("token") == null) {
        return(
            <div className="main-content">
            <p>PLEASE LOG IN FIRST</p>
            <div className="Home-button-div">
                    <Button onClick={() => navigate("/login", {replace: true})}>Login</Button>
                    <Button onClick={() => navigate("/register", {replace: true})}>Sign Up</Button>
            </div>
            </div>

        )
    }

    if (!user) {
        return (
            <p>
                LOADING...
            </p>
        )
    }

    return(
        <div className="Home main-content">
            <p>Welcome back, {user.firstName}</p>
            <WatchedTeams user={user}/>
            <FavPlayers user={user} setUser={setUser}/>
        </div>
    )
}

export default Home;