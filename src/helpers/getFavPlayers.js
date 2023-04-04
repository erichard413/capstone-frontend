import NHLstatsAPI from "../api";
import axios from 'axios';
const NHLAPI_BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

const getFavPlayers = async (username) => {
    const res = await NHLstatsAPI.getFavoritePlayers(username);
    // make API call to get player data given ID.
    const output = {};
    Promise.all(res.map(async (id) => {
        const result = output[id] = await axios.get(`${NHLAPI_BASE_URL}/people/${id}`);
        output[id] = result.data.people[0]
    }))
    return output
}

export default getFavPlayers;