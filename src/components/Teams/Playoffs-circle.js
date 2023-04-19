import React from 'react';
import logoNotFound from '../../Assets/images/logo-not-found.png';

const PlayoffsCircle = ({team, conference, description}) => {
    function replaceImage(error) {
        error.target.src = logoNotFound;
    }
    let imgUrl;
    if (team) {
        imgUrl = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${team.id}.svg`;
    } 
    
    return (
        <div className="Playoffs-circle">
            {imgUrl && <img src={imgUrl} alt={`${team.name}`} onError={replaceImage}/>}
        </div>
    )
}

export default PlayoffsCircle;