import React from 'react';
import logoNotFound from '../../Assets/images/logo-not-found.png';
import '../../stylesheets/components/Teams/PlayoffsCard.css';

const PlayoffsCard = ({matchup}) => {
    const imgUrl = "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/"
    function replaceImage(error) {
        error.target.src = logoNotFound;
    }

    let winner = false;
    if (matchup.team1.wins === 4 || matchup.team2.wins === 4) winner = true;
    return (
        <div className="PlayoffsCard">
            <div className="playoffscard-description"> 
                <p>{matchup.team1.name}</p>
                <p>VS</p>
                <p>{matchup.team2.name}</p>   
            </div>

            <img src={`${imgUrl}${matchup.team1.id}.svg`} alt={matchup.team1.name} onError={replaceImage} className={`${winner && matchup.team1.wins !== 4 ? 'LOSER':'WINNER'}`}/>
            <img src={`${imgUrl}${matchup.team2.id}.svg`} alt={matchup.team2.name} onError={replaceImage} className={`${winner && matchup.team2.wins !== 4 ? 'LOSER':'WINNER'}`}/>
            <p>{matchup.description}</p>
        </div>
    )
}

export default PlayoffsCard;