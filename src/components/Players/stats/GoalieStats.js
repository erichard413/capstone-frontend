import React, {useState} from 'react';
import uuid from 'react-uuid';
import '../../../stylesheets/components/Players/stats/GoalieStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function GoalieStats({stats}) {
    const initialState = {}
    const [open, setOpen] = useState(initialState);

    const toggleOpen = (season) => {
        const sId = season.season; 
        if (open[sId]) {
            let copy = {...open}
            delete copy[sId];
            setOpen(copy);
        } else {
           setOpen({...open, [sId]: "open"}) 
        }
    }
    const downChevron = <FontAwesomeIcon icon={faChevronDown}/>
    const upChevron = <FontAwesomeIcon icon={faChevronUp}/>
    return (
        <>
        <div className="SkaterStats full"> 
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
                        <td>{season.season.slice(0,4)+"-"+season.season.slice(4)}</td>
                        <td>{season.team.name} ({season.league.name})</td>
                        <td>{season.stat.games}</td>
                        <td>{season.stat.gamesStarted}</td>
                        <td>{season.stat.wins}</td>
                        <td>{season.stat.losses}</td>
                        <td>{season.stat.ot}</td>
                        <td>{season.stat.shotsAgainst}</td>
                        <td>{season.stat.saves}</td>
                        <td>{season.stat.goalsAgainst}</td>
                        <td>{season.stat.savePercentage && season.stat.savePercentage.toFixed(3).slice(1)}</td>
                        <td>{season.stat.goalAgainstAverage && season.stat.goalAgainstAverage.toFixed(2)}</td>
                        <td>{season.stat.timeOnIce}</td>
                        <td>{season.stat.shutouts}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
        <div className="SkaterStats-mobile">
        <table className="mobile-table">
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>OTL</th>
                    </tr>
                </thead>
                <tbody>
                    {stats && stats.map(season => (
                        <>
                        <tr key={uuid()}>
                            <td>{"'"+season.season.slice(2,4)+"-'"+season.season.slice(season.season.length-2)}</td>
                            <td className="team-league-td">{season.team.name} ({season.league.name})</td>
                            <td>{season.stat.wins}</td>
                            <td>{season.stat.losses}</td>
                            <td>{season.stat.ot}</td>
                            <td><div onClick={()=>toggleOpen(season)}>{Object.keys(open).includes(season.season) ? upChevron : downChevron}</div></td>
                        </tr>
                        {Object.keys(open).includes(season.season) && <tr>
                            <td colspan="6">
                                <table className="advanced-stats-table">
                                <thead>
                                    <tr>
                                        <th>Games Played</th>
                                        <th>Games Started</th>
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
                                    <tr>
                                        <td>{season.stat.games}</td>
                                        <td>{season.stat.gamesStarted}</td>
                                        <td>{season.stat.shotsAgainst}</td>
                                        <td>{season.stat.saves}</td>
                                        <td>{season.stat.goalsAgainst}</td>
                                        <td>{season.stat.savePercentage && season.stat.savePercentage.toFixed(3).slice(1)}</td>
                                        <td>{season.stat.goalAgainstAverage && season.stat.goalAgainstAverage.toFixed(2)}</td>
                                        <td>{season.stat.timeOnIce}</td>
                                        <td>{season.stat.shutouts}</td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            
                        </tr>}
                        </>
                    ))}
                    
                </tbody>
        </table>
        </div>
        </>
    )
}

export default GoalieStats;