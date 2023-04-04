import React from 'react';
import '../../stylesheets/components/Teams/Team.css';
import NHLstatsAPI from '../../api';
import TeamStats from './TeamStats';
import TeamRosterCard from './TeamRosterCard';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Team() {
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
    console.log(roster);
    return (
        <div className="Team main-content">
            <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`} style={{width: '300px', height: '300px'}} alt={`logo-${team.name}`} />
            <h2>{team.name}</h2>
            <ul>
                <li>City: {team.city}</li>
                <li>Venue: {team.venue}</li>
                <li>Conference: {team.conference}</li>
                <li>Division: {team.division}</li>
                <li>Website: <a href={team.url}>{team.url}</a></li>
            </ul>
            <TeamStats stats={teamStats}/>
            <div className="Roster">
                {roster && roster.map(p => <TeamRosterCard key={p.person.id} player={p}/>)}
            </div>
        </div>
    )
}

export default Team;

