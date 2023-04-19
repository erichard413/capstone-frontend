import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import '../../stylesheets/components/Games/Games.css';
import NHLstatsAPI from '../../api';
import GamesCard from './GamesCard';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const SeasonGames = ({selectedSeason, setSelectedSeason}) => {
    const navigate = useNavigate();
    const {id, season} = useParams();
    const [team, setTeam] = useState();
    const [games, setGames] = useState();
    const [formData, setFormData] = useState();
    const [seasons, setSeasons] = useState();

    // on page load, go get data.
    useEffect(()=>{
        const getSeasonYears = async () => {
            const seasonRes = await NHLstatsAPI.getSeasonYears();
            setSelectedSeason(season)
            setSeasons(seasonRes.seasons);
        }
        getSeasonYears();
        const getGames = async () => {
            const res = await NHLstatsAPI.getGamesForSeason(id,season);
            setGames(res);
        }
        try { 
            getGames()
            } catch(e){
                navigate('/404', {replace: 'true'})
            }
        
        const getTeam = async (id) => {
            const res = await NHLstatsAPI.getTeamDetails(id);
            setTeam(res.team);
        }
        getTeam(id);
    },[season]);

    useEffect(()=>{
        console.log('change in selected season!')
        navigate(`/games/${id}/${selectedSeason}`, {replace: true});
    },[selectedSeason]);

    useEffect(()=> {
        console.log(seasons);
        if (season === "undefined" && seasons) {
            setSelectedSeason(seasons[seasons.length-1].seasonId)
            navigate(`/games/${id}/${selectedSeason}`, {replace: true});
        }
    },[seasons])
  
    if (!games || !team) {
        return (
            <div className="Games main-content">LOADING...</div>
        )
    }

    if (games.length === 0) {
        navigate('/404', {replace: 'true'})
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        setSelectedSeason(formData.season)
    }

    return (
        <div className="Games main-content">
            <h3>{team.name} {selectedSeason.slice(0,4) + "-" + selectedSeason.slice(4)} Season</h3>
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
            <div className="Games-games-container">
                {games.map(g => <GamesCard game={g} key={g.games[0].gamePk}/>)}
            </div>
        </div>
    )
}

export default SeasonGames;
