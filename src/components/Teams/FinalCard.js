import React from 'react';
import logoNotFound from '../../Assets/images/logo-not-found.png';
import '../../stylesheets/components/Teams/PlayoffsCard.css';

const FinalCard = ({team1, team2}) => {
    const imgUrl = "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/"
    function replaceImage(error) {
        error.target.src = logoNotFound;
    }
    let winner = false;
    if (team1.team1.wins === 4 || team2.team1.wins === 4) winner = true;
    return (
        <div className="PlayoffsCard">
            <div className="playoffscard-description"> 
                <p>{team1.team1.name}</p>
                <p>VS</p>
                <p>{team2.team1.name}</p>   
            </div>

            <img src={`${imgUrl}${team1.team1.id}.svg`} alt={team1.team1.name} onError={replaceImage} className={`${winner && team1.team1.wins !== 4 ? 'LOSER':'WINNER'}`}/>
            <img src={`${imgUrl}${team2.team1.id}.svg`} alt={team2.team1.name} onError={replaceImage} className={`${winner && team2.team1.wins !== 4 ? 'LOSER':'WINNER'}`}/>
            <p>{team1.description}</p>
        </div>
    )
}

export default FinalCard;