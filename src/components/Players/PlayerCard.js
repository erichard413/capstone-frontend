import React from 'react';
import {Link} from 'react-router-dom';
import NHLstatsAPI from '../../api';
import '../../stylesheets/components/Players/PlayerCard.css';
import headshot from '../../Assets/images/default_profile_picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

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

    let imgURL = `http://nhl.bamcontent.com/images/headshots/current/168x168/${player.playerId || player.id}.jpg`;

    // to replace image if image URL is not found/forbidden.
    function replaceImage(error) {
        error.target.src = headshot;
    }

    if(!player) {
        return (
            <div>
                <p>LOADING...</p>
            </div>)
    }
    const element = <FontAwesomeIcon icon={faCircleXmark} />
    return (
        <div className="PlayerCard"> 
            <Link key={`${player.playerId}-link`} to={`/players/${player.playerId || player.id}`}><img src={imgURL} alt={`${player.playerId || player.id}`} onError={replaceImage} /></Link>
            <p><Link key={`${player.playerId}-link`} to={`/players/${player.playerId || player.id}`}>{player.name || player.fullName}</Link></p>
            {user && <>{user.favPlayers[player.playerId || player.id] ? <><button className="Full-view" onClick={handleRemove}>REMOVE</button> <div className="Mobile-view" onClick={handleRemove}>{element}</div>  </> : <button className="Full-view" onClick={handleAdd}>ADD</button>}</>}
        </div>
    )
}

export default PlayerCard;