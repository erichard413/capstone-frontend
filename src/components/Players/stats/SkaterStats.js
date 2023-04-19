import React, {useState} from 'react';
import uuid from 'react-uuid';
import '../../../stylesheets/components/Players/stats/SkaterStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function SkaterStats({stats}) {
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
                        <td>{season.season.slice(0,4)+"-"+season.season.slice(4)}</td>
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
        <div className="SkaterStats-mobile">
        <table className="mobile-table">
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>Games</th>
                        <th>Goals</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    {stats && stats.map(season => (
                        <>
                        <tr key={uuid()}>
                            <td>{"'"+season.season.slice(2,4)+"-'"+season.season.slice(season.season.length-2)}</td>
                            <td className="team-league-td">{season.team.name} ({season.league.name})</td>
                            <td>{season.stat.games}</td>
                            <td>{season.stat.goals}</td>
                            <td>{season.stat.assists}</td>
                            <td><div onClick={()=>toggleOpen(season)}>{Object.keys(open).includes(season.season) ? upChevron : downChevron}</div></td>
                        </tr>
                        {Object.keys(open).includes(season.season) && <tr>
                            <td colspan="6">
                                <table className="advanced-stats-table">
                                <thead>
                                    <tr>
                                        <th>+/-</th>
                                        <th>PIM</th>
                                        <th>ESG</th>
                                        <th>PPG</th>
                                        <th>PPP</th>
                                        <th>SHG</th>
                                        <th>SHP</th>
                                        <th>OTG</th>
                                        <th>GWG</th>
                                        <th>FOW%</th>
                                        <th>Shots</th>
                                        <th>Shot%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{season.stat.plusMinus}</td>
                                        <td>{season.stat.pim}</td>
                                        <td>{season.stat.goals - (season.stat.powerPlayGoals + season.stat.shortHandedGoals) || 0}</td>
                                        <td>{season.stat.powerPlayGoals}</td>
                                        <td>{season.stat.powerPlayPoints}</td>
                                        <td>{season.stat.shortHandedGoals}</td>
                                        <td>{season.stat.shortHandedPoints}</td>
                                        <td>{season.stat.overTimeGoals}</td>
                                        <td>{season.stat.gameWinningGoals}</td>
                                        <td>{season.stat.faceOffPct}</td>
                                        <td>{season.stat.shots}</td>
                                        <td>{season.stat.shotPct}</td>
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

export default SkaterStats;