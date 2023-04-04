import NHLstatsAPI from "../api";
import axios from 'axios';
const NHLAPI_BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

const getWatchedTeams = async (user) => {
    const res = await NHLstatsAPI.getWatchedTeams(user.username);
    const teamIds = Object.keys(res);
    if (!teamIds.includes(user.favTeamId)) {
       teamIds.unshift(user.favTeamId); 
    }

    // make API call to get team data
    const output = {};
    Promise.all(teamIds.map(async (id) => {
        const result = output[id] = await axios.get(`${NHLAPI_BASE_URL}/teams/${id}`);
        output[id] = result.data.teams[0]
    }))
    return output
}

export default getWatchedTeams;