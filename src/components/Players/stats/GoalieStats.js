import React from 'react';
import {useState} from 'react';
import uuid from 'react-uuid';
import '../../../stylesheets/components/Players/stats/GoalieStats.css';


function GoalieStats({stats}) {
    return (
        <div className="SkaterStats"> 
            <table>
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>Games Played</th>
                        <th>Games Started</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>OTL</th>
                        <th>SA</th>
                        <th>Saves</th>
                        <th>GA</th>
                        <th>S%</th>
                        <th>GAA</th>
                        <th>TOI</th>
                        <th>SO</th>
                    </tr>
                </thead>
                <tbody>
                    {stats && stats.map(season => (
                    <tr key={uuid()}>
                        <td>{season.season}</td>
                        <td>{season.team.name} ({season.league.name})</td>
                        <td>{season.stat.games}</td>
                        <td>{season.stat.gamesStarted}</td>
                        <td>{season.stat.wins}</td>
                        <td>{season.stat.losses}</td>
                        <td>{season.stat.ot}</td>
                        <td>{season.stat.shotsAgainst}</td>
                        <td>{season.stat.saves}</td>
                        <td>{season.stat.goalsAgainst}</td>
                        <td>{season.stat.savePercentage.toFixed(3).slice(1)}</td>
                        <td>{season.stat.goalAgainstAverage.toFixed(2)}</td>
                        <td>{season.stat.timeOnIce}</td>
                        <td>{season.stat.shutouts}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default GoalieStats;