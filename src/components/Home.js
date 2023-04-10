import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'reactstrap';
import WatchedTeamsCard from './User/WatchedTeamsCard';
import PlayerCard from './Players/PlayerCard';
import '../stylesheets/components/Home.css';

function Home({user, setUser}) {
    const navigate = useNavigate();

    if (localStorage.getItem("token") == null) {
        return(
            <div className="Home main-content">
            <h2>PLEASE LOG IN FIRST</h2>
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
            <h2>Welcome back, {user.firstName}</h2>
            <div>
                <div className="Home watchedTeams">
                    <p className="home-title">Watched Teams</p>
                    {user.watchedTeams && Object.keys(user.watchedTeams).map(key=> (<WatchedTeamsCard key={key} user={user} setUser={setUser} team={user.watchedTeams[key]} />))}
                </div>
                <div className="Home watchedTeams">
                    <p className="home-title">Favorite Players</p>
                    {user.favPlayers && Object.keys(user.favPlayers).map(key=> (<PlayerCard key={key} user={user} setUser={setUser} player={user.favPlayers[key]} />))}
                </div>
            </div>
            
            
        </div>
    )
}

export default Home;