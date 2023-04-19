import React from 'react';
import '../../stylesheets/components/Teams/TeamRosterCard.css';
import {useNavigate} from 'react-router-dom';
import headshot from '../../Assets/images/default_profile_picture.png';


function TeamRosterCard({player}) {
    const navigate=useNavigate();
    if (!player) {
        return (
            <div>
                <h2>LOADING..</h2>
            </div>
        )
    }
    function handleClick(id) {
        navigate(`/players/${id}`, {replace: 'true'});
    }
    let imgURL = `http://nhl.bamcontent.com/images/headshots/current/168x168/${player.id}.jpg`;

    // to replace image if image URL is not found/forbidden.
    function replaceImage(error) {
        error.target.src = headshot;
    }
    return (
        <div className="Team-roster-card-div" onClick={e => {handleClick(player.id)}}>
            <p className="jersey-number">#{player.primaryNumber}</p>
            
            <p className="p-image"><img src={imgURL} alt={`${player.fullName}`} onError={replaceImage}/></p>
            <p className="full-name">{player.fullName}</p>
            <p className="position">{player.primaryPosition.name}</p>
        </div>
    )
}

export default TeamRosterCard;