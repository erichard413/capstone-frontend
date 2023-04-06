import React from 'react';
import uuid from 'react-uuid';
import '../../../stylesheets/components/Players/stats/SkaterStats.css';


function SkaterStats({stats}) {
    return (
        <div className="SkaterStats"> 
            <table>
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>Games Played</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th>+/-</th>
                        <th>PIM</th>
                        <th>EVG</th>
                        <th>PPG</th>
                        <th>PPP</th>
                        <th>SHG</th>
                        <th>SHP</th>
                        <th>OTG</th>
                        <th>GWG</th>
                        <th>S</th>
                        <th>S%</th>
                        <th>TOI/GP</th>
                        <th>FOW%</th>
                    </tr>
                </thead>
                <tbody>
                    {stats && stats.map(season => (
                    <tr key={uuid()}>
                        <td>{season.season}</td>
                        <td>{season.team.name} ({season.league.name})</td>
                        <td>{season.stat.games}</td>
                        <td>{season.stat.goals}</td>
                        <td>{season.stat.assists}</td>
                        <td>{season.stat.plusMinus}</td>
                        <td>{season.stat.pim}</td>
                        <td>{season.stat.goals - (season.stat.powerPlayGoals + season.stat.shortHandedGoals) || 0}</td>
                        <td>{season.stat.powerPlayGoals}</td>
                        <td>{season.stat.powerPlayPoints}</td>
                        <td>{season.stat.shortHandedGoals}</td>
                        <td>{season.stat.shortHandedPoints}</td>
                        <td>{season.stat.overTimeGoals}</td>
                        <td>{season.stat.gameWinningGoals}</td>
                        <td>{season.stat.shots}</td>
                        <td>{season.stat.shotPct}</td>
                        <td>{season.stat.timeOnIce && season.stat.games && (parseInt(season.stat.timeOnIce) / season.stat.games).toFixed(2)}</td>
                        <td>{season.stat.faceOffPct}</td>

                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}

export default SkaterStats;