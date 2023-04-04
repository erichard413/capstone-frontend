import React from 'react';
import {Link} from 'react-router-dom';

const WatchedTeamsCard = ({team}) => {
    return (
        <div className="WatchedTeamsCard">
            <p className="WatchedTeamsCard-title"><Link to={`/teams/${team.id}`}>{team.name}</Link></p>
        </div>
    )
}

export default WatchedTeamsCard;