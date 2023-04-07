import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../../stylesheets/components/Teams/WatchedTeamsCard.css';

const WatchedTeamsCard = ({team}) => {
    const navigate = useNavigate();
    if (!team) {
        return (
            <>
            </>
        )
    }

    function handleClick() {
        navigate(`/teams/${team.id}`, {replace: 'true'});
    }

    return (
        <div className="WatchedTeamsCard" onClick={handleClick}>
            <img src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`} alt={team.name}></img>
            <p className="WatchedTeamsCard-title">{team.name}</p>
        </div>
    )
}

export default WatchedTeamsCard;