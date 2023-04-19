import React from 'react';
import '../../stylesheets/components/Games/Games.css';
import logoNotFound from '../../Assets/images/logo-not-found.png';

const GamesCard = ({game}) => {
    const homeTeam = game.games[0].teams.home.team;
    const awayTeam = game.games[0].teams.away.team;
    const dateTime = new Date(game.games[0].gameDate);
    function replaceImage(error) {
        error.target.src = logoNotFound;
    }
    return (
        <div className="GamesCard">
            <p className="status">{game.games[0].gameType === "PR" ? "Preseason" : game.games[0].gameType === "P" ? "Playoffs" : "Regular Season" }</p>
            <div className="GamesCard-images">
            <img className="GamesCard-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${awayTeam.id}.svg`} alt={`logo-${awayTeam.name}`} onError={replaceImage} />
            <p className="VS">AT</p>
            <img className="GamesCard-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${homeTeam.id}.svg`} alt={`logo-${homeTeam.name}`} onError={replaceImage} />
            </div>
            <div className="results">
                {game.games[0].status.detailedState === "Final" && <div className="away"><p>{game.games[0].teams.away.score}</p></div>}
                <div className="empty"></div>
                {game.games[0].status.detailedState === "Final" && <div className="home"><p>{game.games[0].teams.home.score}</p></div>}
            </div>
            <div className="GamesCard-description">
            <ul>
                <li>{dateTime.toDateString()} - {dateTime.toLocaleTimeString()}</li>
            </ul>     
            </div>
            
        </div>
    )
}

export default GamesCard;