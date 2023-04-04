import React from 'react';
import WatchedTeamsCard from './WatchedTeamsCard';
import FavPlayers from '../Players/FavPlayers';

const WatchedTeams = ({user, setUser}) => {
    if (!user) {
        return (
            <p>LOADING...</p>
        )
    }

    const watched = user.watchedTeams;
    return ( 
        <div className="WatchedTeams">
            <p className="title">Watched Teams</p>
            {Object.keys(watched).map(key => <WatchedTeamsCard key={key} team={watched[key]} />)}
        </div>
    )
}

export default WatchedTeams;