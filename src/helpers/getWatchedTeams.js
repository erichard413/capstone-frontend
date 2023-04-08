import NHLstatsAPI from "../api";
import axios from 'axios';
const NHLAPI_BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

const getWatchedTeams = async (user) => {
    const res = await NHLstatsAPI.getWatchedTeams(user.username);
    const teamIds = Object.keys(res);

    if (!teamIds.includes(user.favTeamId) && user.favTeamId !== null) {
       teamIds.unshift(user.favTeamId); 
    }

    // make API call to get team data
    const output = {};
    let promises = teamIds.map(async id => {
            return await axios.get(`${NHLAPI_BASE_URL}/teams/${id}`);
    })
    for await (let res of promises){
        output[res.data.teams[0].id] = (res.data.teams[0]);
    }
       
    return output
}

export default getWatchedTeams;