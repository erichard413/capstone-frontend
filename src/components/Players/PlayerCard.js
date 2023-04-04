import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import NHLstatsAPI from '../../api';
import '../../stylesheets/components/Players/PlayerCard.css';


function PlayerCard({player, user, setUser}) {
    function handleAdd(){
        async function addPlayer() {
            await NHLstatsAPI.addPlayerToFavorites(user.username, player.playerId || player.id);
            // update user, add player ID to favPlayers.
            let userCopy = {...user}
            userCopy.favPlayers[player.playerId] = player;
            setUser(userCopy);
        }
        addPlayer();
    }
    function handleRemove(){
        async function removePlayer() {
            await NHLstatsAPI.removePlayerFromFavorites(user.username, player.playerId|| player.id);
            // update user, add player ID to favPlayers.
            let userCopy = {...user}
            delete userCopy.favPlayers[player.playerId || player.id]
            setUser(userCopy);
        }
        removePlayer();
    }

    if(!player) {
        return (
            <div>
                <p>LOADING...</p>
            </div>)
    }

    return (
        <div className="PlayerCard"> 
            <p><Link key={`${player.playerId}-link`} to={`/players/${player.playerId || player.id}`}>{player.name || player.fullName}</Link></p>
            {user && <>{user.favPlayers[player.playerId || player.id] ? <button onClick={handleRemove}>REMOVE</button> : <button onClick={handleAdd}>ADD</button>}</>}   
        </div>
    )
}

export default PlayerCard;