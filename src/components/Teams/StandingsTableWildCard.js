import React from 'react';
import {Link} from 'react-router-dom';
import formatStandingData from '../../helpers/formatStandingData';
import '../../stylesheets/components/Teams/StandingsTable.css';

function StandingsTableWildCard({standings}) {
    
    const wildCard = formatStandingData(standings, "WildCard");

    return (
        <div className="StandingsTable">
            <p className="standings-title">Eastern Conference</p>
            <p className="standings-subtitle">Metro Division</p>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Team Name</th>
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
                {wildCard.metro.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.divisionRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
            </div>
            <p className="standings-subtitle">Atlantic Division</p>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Team Name</th>
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
                {wildCard.atlantic.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.divisionRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
            </div>
            <p className="standings-subtitle">East Wildcard</p>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Team Name</th>
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
                {wildCard.eastWildCard.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.wildCardRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                {wildCard.east.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.wildCardRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
            </div>
            <p className="standings-title">Western Conference</p>
            <p className="standings-subtitle">Central Division</p>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Team Name</th>
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
                {wildCard.central.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.divisionRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
            </div>
            <p className="standings-subtitle">Pacific Division</p>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Team Name</th>
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
                {wildCard.pacific.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.divisionRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
            </div>
            <p className="standings-subtitle">West Wildcard</p>
            <div>
            <table>
                <thead>
                <tr>
                    <th>Team Name</th>
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
                {wildCard.westWildCard.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.wildCardRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                {wildCard.west.map(t=> (
                <tr key={t.team.name}>
                    <td>{t.wildCardRank}    <img className="Standings-logo" src={`https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${t.team.id}.svg`} style={{width: '30px', height: '30px'}} alt={`logo-${t.team.name}`} /> {t.clinchIndicator ? `${t.clinchIndicator}-` : ""} <Link key={t.team.id} to={`/teams/${t.team.id}`}>{t.team.name}</Link></td>
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
                    <td style={{color: t.goalsScored-t.goalsAgainst === 0 ? "black" : t.goalsScored - t.goalsAgainst > 0 ? "green" : "red"}}>{t.goalsScored - t.goalsAgainst > 0 ? "+" : ""}{t.goalsScored - t.goalsAgainst}</td>
                    <td>{t.records.overallRecords[0].wins}-{t.records.overallRecords[0].losses}-{t.records.overallRecords[0].ot}</td>
                    <td>{t.records.overallRecords[1].wins}-{t.records.overallRecords[1].losses}-{t.records.overallRecords[1].ot}</td>
                    <td>{t.records.overallRecords[2].wins}-{t.records.overallRecords[2].losses}</td>
                    <td>{t.records.overallRecords[3].wins}-{t.records.overallRecords[3].losses}-{t.records.overallRecords[3].ot}</td>
                    <td>{t.streak.streakCode}</td>
                </tr>    
                ))}    
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default StandingsTableWildCard;