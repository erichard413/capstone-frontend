import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getPlayerMugshot} from '@nhl-api/players';
import '../../stylesheets/components/Players/PlayerDetail.css';
import NHLstatsAPI from '../../api';
import SkaterStats from './stats/SkaterStats';
import GoalieStats from './stats/GoalieStats';
import headshot from '../../Assets/images/default_profile_picture.svg';
import axios from 'axios';


function PlayerDetail() {
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

    const {name, teamId, jerseyNumber, position} = player;
    let imgURL = `http://nhl.bamcontent.com/images/headshots/current/168x168/${playerId}.jpg`;

    // to replace image if image URL is not found/forbidden.
    function replaceImage(error) {
        error.target.src = headshot;
    }
    console.log(player);
    return (
        <div className="PlayerDetail main-content">
            <img src={imgURL} onError={replaceImage}/>
            <h2>{name}</h2> 
            <ul>
                <li>Jersey Number: {jerseyNumber}</li>
                <li>Team: {teamId}</li>
                <li>Position: {position}</li>
            </ul>
            {stats && player.primaryPosition.name !== 'Goalie' && <SkaterStats stats={stats}/>}
            {stats && player.primaryPosition.name === 'Goalie' && <GoalieStats stats={stats}/>}
            
        </div>
    )
}

export default PlayerDetail;