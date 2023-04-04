import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import '../../stylesheets/components/Teams/StandingsTable.css';

function StandingsTableDivision({standings}) {
    
    return (
        <div className="StandingsTable">
            <h1>Division Standings</h1> 
           {standings.map(d => (
            <table key={d.division.name}>
                <thead>
                <tr>
                    <th>{d.division.name} Division</th>
                    <th>Games Played</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>OT</th>
                    <th>Points</th>
                    <th>P%</th>
                    <th>RW</th>
                    <th>ROW</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>DIFF</th>
                    <th>HOME</th>
                    <th>AWAY</th>
                    <th>S/O</th>
                    <th>L10</th>
                    <th>STRK</th>
                </tr>    
                </thead>
                <tbody>
                {d.teamRecords.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.divisionRank}    <img className="Standings-logo" key={`${t.team.name}-img`} src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
                    <td>{t.gamesPlayed}</td>
                    <td>{t.leagueRecord.wins}</td>
                    <td>{t.leagueRecord.losses}</td>
                    <td>{t.leagueRecord.ot}</td>
                    <td>{t.points}</td>
                    <td>.{Math.trunc(t.pointsPercentage *1000)}</td>
                    <td>{t.regulationWins}</td>
                    <td>{t.row}</td>
                    <td>{t.goalsScored}</td>
                    <td>{t.goalsAgainst}</td>
                    <td style={{color: t.goalsScored-t.goalsAgainst == 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
           ))}
        </div>
    )
}

export default StandingsTableDivision;