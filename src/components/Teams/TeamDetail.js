import React from 'react';
import '../../stylesheets/components/Teams/Team.css';
import NHLstatsAPI from '../../api';
import TeamStats from './TeamStats';
import TeamRosterCard from './TeamRosterCard';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import teamListAddRemove from '../../helpers/teamListAddRemove';

function Team({user, setUser}) {
    const {teamId} = useParams();
    const [team, setTeam] = useState();
    const [teamStats, setTeamStats] = useState();
    const [roster, setRoster] = useState();
    
    useEffect(()=>{
        const getTeamDetails = async () => {
            const res = await NHLstatsAPI.getTeamDetails(teamId);
            setTeam(res.team);
            return;
        }
        getTeamDetails();
        const getTeamStats = async () => {
            const res = await NHLstatsAPI.getTeamStats(teamId);
            setTeamStats(res);
        }
        getTeamStats();
        const getRoster = async() => {
            const res = await NHLstatsAPI.getRoster(teamId);
            setRoster(res);
        }
        getRoster();
    },[]);

    
    if (!team) {
        return (
            <div>
                <h2>LOADING..</h2>
            </div>
        )
    }

    const handleAdd = (e) => {
        e.preventDefault();
        async function doAdd(){
            await teamListAddRemove(user, setUser, team, 'ADD');
        }
        doAdd();
    }
    const handleRemove = (e) => {
        e.preventDefault();
        async function doRemove(){
            await teamListAddRemove(user, setUser, team, 'REMOVE');
        }
        doRemove();
    }

    return (
        <div className="Team main-content">
            <h2>{team.name}</h2>
            <div className="top-container">
                    <div className="Team name-img-div">
                        <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`} style={{width: '300px', height: '300px'}} alt={`logo-${team.name}`} />
                    </div>
                    <div className="Team basic-details-div">
                            <ul>
                                <li><span className="font-weighted">City: </span>{team.city}</li>
                                <li><span className="font-weighted">Venue: </span>{team.venue}</li>
                                <li><span className="font-weighted">Conference: </span>{team.conference}</li>
                                <li><span className="font-weighted">Division: </span>{team.division}</li>
                                <li><span className="font-weighted">Website: </span><a href={team.url}>{team.url.replace(/^https?:\/\//, '').slice(0,-1)}</a></li>
                                {user && user.watchedTeams[team.id] ? <button onClick={handleRemove}>Remove from Watchlist</button> :<button onClick={handleAdd}>Add to Watchlist</button> }
                            </ul>
                    </div>
            </div>
            <div className="bottom-container">
                <div className="Team-stats-div">
                    <TeamStats stats={teamStats}/>
                </div>
                <div className="Team-roster-div">
                    <p className="title">Current Roster</p>
                    <p className="subtitle">Forwards</p>
                    {roster && roster.forwards.map(p => <TeamRosterCard key={p.id} player={p}/>)}
                    <p>Defensemen</p>
                    {roster && roster.defensemen.map(p => <TeamRosterCard key={p.id} player={p}/>)}
                    <p>Goalies</p>
                    {roster && roster.goalies.map(p => <TeamRosterCard key={p.id} player={p}/>)}
                </div>
            </div>
        </div>
    )
}

export default Team;

