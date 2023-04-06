import React from 'react';
import PlayerCard from './PlayerCard';


function FavPlayers({user, setUser}) {
    if (!user) {
        return (
            <div>LOADING...</div>
        )
    }
    const favPlayers = user.favPlayers
  
    return (
        <div className="FavPlayers main-content">
            <p>Favorite Players</p>
            {Object.keys(favPlayers).map(key=> <PlayerCard key={key} player={favPlayers[key]} user={user} setUser={setUser} />)}
        </div>
    )
}

export default FavPlayers;