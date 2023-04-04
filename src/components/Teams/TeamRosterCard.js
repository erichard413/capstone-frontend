import React from 'react';
import '../../stylesheets/components/Teams/TeamRosterCard.css';
import {Link} from 'react-router-dom';


function TeamRosterCard({player}) {
    if (!player) {
        return (
            <div>
                <h2>LOADING..</h2>
            </div>
        )
    }

    return (
        <tr>
            <td><img src={`http://nhl.bamcontent.com/images/headshots/current/168x168/${player.person.id}.jpg`} width="50px" height="50px" alt={`image-${player.person.fullName}`}/></td>
            <td>#{player.jerseyNumber}</td>
            <td><Link key={player.person.id} to={`/players/${player.person.id}`}>{player.person.fullName}</Link></td>
            <td>{player.position.name}</td>
        </tr>
    )
}

export default TeamRosterCard;