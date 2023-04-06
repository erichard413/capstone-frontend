import NHLstatsAPI from "../api";
import axios from 'axios';
const NHLAPI_BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

const getFavPlayers = async (username) => {
    const res = await NHLstatsAPI.getFavoritePlayers(username);
    // make API call to get player data given ID.
    const output = {};
    let promises = res.map(async id => {
        return await axios.get(`${NHLAPI_BASE_URL}/people/${id}`);
    })
    for await (let res of promises) {
        output[res.data.people[0].id] = res.data.people[0];
    }
    return output
}

export default getFavPlayers;
