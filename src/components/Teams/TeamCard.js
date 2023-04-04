import React from 'react';
import {Link} from 'react-router-dom';
import '../../stylesheets/components/Teams/TeamCard.css';


function TeamCard({team}) {
    return (
        <div className="TeamCard"> 
            <p><Link key={`${team.id}-link`} to={`/teams/${team.id}`}>{team.name}</Link></p>
        </div>
    )
}

export default TeamCard;