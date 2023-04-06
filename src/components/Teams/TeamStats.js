import React from 'react';
import '../../stylesheets/components/Teams/TeamStats.css';


function TeamStats({stats}) {
    if (!stats) {
        return (
            <div>
                <h2>LOADING..</h2>
            </div>
        )
    }

    const stat = stats[0].stat;
    const rank = stats[1].stat;

    return (
        <div className="TeamStats">
            <table>
                <caption className="title">Stats For Nerds</caption>
                <thead>
                    <tr>
                       <th>Stat</th> 
                       <th>Value</th> 
                       <th>Rank</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Wins:</td>
                        <td>{stat.wins}</td>
                        <td>{rank.wins}</td>
                    </tr>
                    <tr>
                        <td>Losses:</td>
                        <td>{stat.losses}</td>
                        <td>{rank.losses}</td>
                    </tr>
                    <tr>
                        <td>OT Losses:</td>
                        <td>{stat.ot}</td>
                        <td>{rank.ot}</td>
                    </tr>
                    <tr>
                        <td>Points:</td>
                        <td>{stat.pts}</td>
                        <td>{rank.pts}</td>
                    </tr>
                    <tr>
                        <td>Goals Per Game:</td>
                        <td>{stat.goalsPerGame}</td>
                        <td>{rank.goalsPerGame}</td>
                    </tr>
                    <tr>
                        <td>Goals Against Per Game:</td>
                        <td>{stat.goalsAgainstPerGame}</td>
                        <td>{rank.goalsAgainstPerGame}</td>
                    </tr>
                    <tr>
                        <td>Power Play %:</td>
                        <td>{stat.powerPlayPercentage}</td>
                        <td>{rank.powerPlayPercentage}</td>
                    </tr>
                    <tr>
                        <td>Power Play Goals:</td>
                        <td>{stat.powerPlayGoals}</td>
                        <td>{rank.powerPlayGoals}</td>
                    </tr>
                    <tr>
                        <td>Power Play Goals Against:</td>
                        <td>{stat.powerPlayGoalsAgainst}</td>
                        <td>{rank.powerPlayGoalsAgainst}</td>
                    </tr>
                    <tr>
                        <td>Penalty Kill %:</td>
                        <td>{stat.penaltyKillPercentage}</td>
                        <td>{rank.penaltyKillPercentage}</td>
                    </tr>
                    <tr>
                        <td>Avg Shots/Game:</td>
                        <td>{stat.shotsPerGame}</td>
                        <td>{rank.shotsPerGame}</td>
                    </tr>
                    <tr>
                        <td>Avg Shots Allowed:</td>
                        <td>{stat.shotsAllowed}</td>
                        <td>{rank.shotsAllowed}</td>
                    </tr>
                    <tr>
                        <td>Win% When Scoring First:</td>
                        <td>{stat.winScoreFirst}</td>
                        <td>{rank.winScoreFirst}</td>
                    </tr>
                    <tr>
                        <td>Win% When Opp Scores First:</td>
                        <td>{stat.winOppScoreFirst}</td>
                        <td>{rank.winOppScoreFirst}</td>
                    </tr>
                    <tr>
                        <td>Win% When Leading After 1 Period:</td>
                        <td>{stat.winLeadFirstPer}</td>
                        <td>{rank.winLeadFirstPer}</td>
                    </tr>
                    <tr>
                        <td>Win% When Leading After 2 Periods:</td>
                        <td>{stat.winLeadSecondPer}</td>
                        <td>{rank.winLeadSecondPer}</td>
                    </tr>
                    <tr>
                        <td>FaceOff Win %:</td>
                        <td>{stat.faceOffWinPercentage}</td>
                        <td>{rank.faceOffWinPercentage}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeamStats;