import React from 'react';
import '../../stylesheets/components/Teams/Team.css';
import NHLstatsAPI from '../../api';
import TeamStats from './TeamStats';
import TeamRosterCard from './TeamRosterCard';
import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import teamListAddRemove from '../../helpers/teamListAddRemove';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

function Team({user, setUser, selectedSeason, setSelectedSeason}) {
    const navigate = useNavigate();
    const {teamId} = useParams();
    const [formData, setFormData] = useState();
    const [team, setTeam] = useState();
    const [seasons, setSeasons] = useState();
    // const [selectedSeason, setSelectedSeason] = useState();
    const [teamStats, setTeamStats] = useState();
    const [roster, setRoster] = useState();
    
    useEffect(()=>{
        const getSeasonYears = async () => {
            const seasonRes = await NHLstatsAPI.getSeasonYears();
            setSelectedSeason(seasonRes.seasons[seasonRes.seasons.length-1].seasonId)
            setSeasons(seasonRes.seasons);
        }
        getSeasonYears();
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
    },[]);

    useEffect(()=> {
        const getRoster = async() => {
            if (selectedSeason) {
                try {
                const res = await NHLstatsAPI.getRoster(teamId, selectedSeason);
                setRoster(res);
                } catch(e) {
                alert("Data unavailable!")
                }
            } 
        }
        getRoster(); 
    }, [selectedSeason])

    
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

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedSeason(formData.season)
    }
    const gamesClick = (e) => {
        e.preventDefault();
        navigate(`/games/${teamId}/${selectedSeason}`);
    }
    return (
        <div className="Team main-content">
            <h2>{team.name}</h2>
            <div className="top-container">
                    <div className="Team name-img-div">
                        <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`} alt={`logo-${team.name}`} />
                    </div>
                    <div className="Team basic-details-div">
                            <ul>
                                <li><span className="font-weighted">City: </span>{team.city}</li>
                                <li><span className="font-weighted">Venue: </span>{team.venue}</li>
                                <li><span className="font-weighted">Conference: </span>{team.conference}</li>
                                <li><span className="font-weighted">Division: </span>{team.division}</li>
                                <li><span className="font-weighted">Website: </span><a href={team.url}>{team.url.replace(/^https?:\/\//, '').slice(0,-1)}</a></li>
                                {user && user.watchedTeams[team.id] ? <button onClick={handleRemove} disabled={user.favTeamId === team.id ? true : false}>Remove from Watchlist</button> :<button onClick={handleAdd}>Add to Watchlist</button> }
                                <button onClick={gamesClick}>Games By Season</button>
                            </ul>
                    </div>
            </div>
            <div className="bottom-container">
                <div className="Team-stats-div">
                    <TeamStats stats={teamStats}/>
                </div>
                <div className="Team-roster-div">
                    <p className="title">Roster</p>
                    <div className="season-select">
                        <Form>
                        <FormGroup className="form-group">
                        <Label className="form-label" for="type">Season: </Label>
                            <Input className="form-label" name="season"
                            type="select" defaultValue={selectedSeason} onChange={handleChange}>
                            {seasons && seasons.map(s=> <option key={s.seasonId} value={s.seasonId}>{s.seasonId.slice(0,4)+"-"+s.seasonId.slice(4)}</option>)}
                        </Input>
                        </FormGroup>
                        </Form>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                    
                    <p className="subtitle">Forwards</p>
                    {roster && roster.forwards.map(p => <TeamRosterCard key={p.id} player={p}/>)}
                    <p className="subtitle">Defensemen</p>
                    {roster && roster.defensemen.map(p => <TeamRosterCard key={p.id} player={p}/>)}
                    <p className="subtitle">Goalies</p>
                    {roster && roster.goalies.map(p => <TeamRosterCard key={p.id} player={p}/>)}
                </div>
            </div>
        </div>
    )
}

export default Team;

