import React from 'react';
import {useState, useEffect} from 'react';
import StandingsTableDivision from './StandingsTableDivision';
import StandingsTableLeague from './StandingsTableLeague';
import StandingsTableConference from './StandingsTableConference';
import StandingsTableWildCard from './StandingsTableWildCard';
import NHLstatsAPI from '../../api';
import '../../stylesheets/components/Teams/Standings.css';

function Standings() {
    const [standings, setStandings] = useState();
    const [currTable, setCurrTable] = useState("Division");
    useEffect(()=> {
        console.log('getting standings..')
        async function getStandings() {
            const result = await NHLstatsAPI.getStandings();
            setStandings(result);
        }
        getStandings();
    },[])

    if (!standings) {
        return (
            <div>
                <p>LOADING...</p>
            </div>
        )
    }

    const handleSetTable = (e) => {
        e.preventDefault();
        setCurrTable(e.target.innerText);
    }

    return (
        <div className="Standings main-content"> 
        <div className="Standings-links">
            <button onClick={handleSetTable}>Division</button>
            <button onClick={handleSetTable}>Wild Card</button>
            <button onClick={handleSetTable}>Conference</button>
            <button onClick={handleSetTable}>League</button>
        </div>
            {currTable === "Division" && <StandingsTableDivision standings={standings}/>}
            {currTable === "League" && <StandingsTableLeague standings={standings}/>}
            {currTable === "Conference" && <StandingsTableConference standings={standings}/>}
            {currTable === "Wild Card" && <StandingsTableWildCard standings={standings}/>}
        </div>
    )
}

export default Standings;