import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../../stylesheets/components/Players/PlayerDetail.css';
import NHLstatsAPI from '../../api';
import SkaterStats from './stats/SkaterStats';
import GoalieStats from './stats/GoalieStats';
import headshot from '../../Assets/images/default_profile_picture.png';



function PlayerDetail({user, setUser}) {
    const [player, setPlayer] = useState();
    const [stats, setStats] = useState();
    const {playerId} = useParams();
    // get player details.
    useEffect(()=>{
        const getPlayerDetail = async () => {
            const res = await NHLstatsAPI.getPlayer(playerId);
            setPlayer(res);
            return;
        }
        getPlayerDetail();
        const getYearByYearStats = async () => {
            const res = await NHLstatsAPI.getPlayerStatsYearByYear(playerId);
            setStats(res);
        }
        getYearByYearStats();
        
    },[]);

    if (!player) {
        return (
            <div>
                <h2>LOADING..</h2>
            </div>
        )
    }

    // let imgURL = `http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`;
    let imgURL = `https://cms.nhl.bamgrid.com/images/headshots/current/168x168/${playerId || player.id}.jpg`

    // to replace image if image URL is not found/forbidden.
    function replaceImage(error) {
        error.target.src = headshot;
    }

    function handleAdd(){
        async function addPlayer() {
            await NHLstatsAPI.addPlayerToFavorites(user.username, player.playerId || player.id);
            // update user, add player ID to favPlayers.
            let userCopy = {...user}
            userCopy.favPlayers[player.playerId || player.id] = player;
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

    return (
        <div className="PlayerDetail main-content">
            <h2>{player.fullName}</h2>
            <div className="top-div">
                <div className="top-left-div">
                    <img src={imgURL} alt={player.id} onError={replaceImage}/>
                </div>
                <div className="top-right-div">
                     <ul>
                        <li><span className="font-weighted">Jersey Number</span>: {player.primaryNumber}</li>
                        {player.active &&  <li><span className="font-weighted">Team:</span> {player.currentTeam.name}</li>}
                        <li><span className="font-weighted">Position:</span> {player.primaryPosition.name}</li>
                        <li> <span className="font-weighted">{player.primaryPosition.type !== "Goalie" ? "Shoots: " : "Catches: " }</span>
                        {player.shootsCatches === "R" ? "Right" : "Left"}
                        </li>
                        <li>
                            {user && <>{user.favPlayers[player.playerId || player.id] ? <><button className="Full-view" onClick={handleRemove}>REMOVE</button> </> : <button className="Full-view" onClick={handleAdd}>ADD</button>}</>}
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="bio-div">
                <p className="title">Bio</p>
                <ul>
                    <li><span className="font-weighted">Age: </span>{player.currentAge}</li>
                    <li><span className="font-weighted">Birth Date: </span>{player.birthDate.slice(5)+"-"+player.birthDate.slice(0, 4)}</li>
                    <li><span className="font-weighted">Hometown: </span>{player.birthCity} {player.birthStateProvince}</li>
                    <li><span className="font-weighted">Nationality: </span> {player.nationality}</li>
                    <li><span className="font-weighted">Height: </span>{player.height}</li>
                    <li><span className="font-weighted">Weight: </span>{player.weight}</li>
                </ul>
            </div>
            <div className="stats-div">
                <p className="title">Stats</p>
                {stats && player.primaryPosition.name !== 'Goalie' && <SkaterStats stats={stats}/>}
                {stats && player.primaryPosition.name === 'Goalie' && <GoalieStats stats={stats}/>}
            </div>
        </div>
    )
}

export default PlayerDetail;