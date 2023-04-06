import React from 'react';
import WatchedTeamsCard from './WatchedTeamsCard';

const WatchedTeams = ({user, setUser}) => {
    if (!user && !user.watchedTeams) {
        return (
            <p>LOADING...</p>
        )
    }

    return ( 
        <div className="WatchedTeams">
            <p className="title">Watched Teams</p>
            {user.watchedTeams && Object.keys(user.watchedTeams).map(key => <WatchedTeamsCard key={key} team={user.watchedTeams[key]} />)}
        </div>
    )
}

export default WatchedTeams;