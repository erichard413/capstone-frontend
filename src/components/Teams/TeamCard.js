import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../stylesheets/components/Teams/TeamCard.css';


function TeamCard({team}) {
    const navigate = useNavigate();
    function handleClick(id) {
        navigate(`/teams/${id}`, {replace: 'true'});
    }

    return (
        <div onClick={e => {handleClick(team.id)} } className="TeamCard"> 
            <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`} key={`${team.id}-img`} alt={`logo-${team.name}`} />
            <p>{team.name}</p>
        </div>
    )
}

export default TeamCard;