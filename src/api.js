import axios from "axios";
import getRosterData from './helpers/getRosterData';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const NHLAPI_BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

class NHLstatsAPI {
    static token;

    static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${NHLstatsAPI.token}` };
    const params = (method === "get") ? data : {};
        try {
            return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }
    static async logIn(username, password) {
        let res = await this.request('auth/token', {username, password}, 'post');
        return res
    }
    static async register(formData) {
        let res = await this.request('auth/register', formData, 'post');
        return res
    }
    static async getUser(username) {
        let res = await this.request(`users/${username}`, {}, 'get');
        return res;
    }
    static async editUser(username, formData) {
        try {
            let res = await this.request(`users/${username}`, formData, 'patch');
            return res;
        } catch (err) {
            return err;
        } 
    }
    static async getTeams() {
        let res = await this.request('teams', {}, 'get');
        return res.teams;
    }
    static async getPlayers(page=null, limit=null, nameLike=null) {
        let urlString = 'players';
        if ((page && limit) || nameLike) {
            urlString+= '?'
        }
        if (page && limit) {
            urlString+= `page=${page}&limit=${limit}`
        }
        if (nameLike) {
            urlString+=`&nameLike=${nameLike}`
        }
        const res = await this.request(urlString, {}, 'get');
        return res;
    }
    static async getPlayer(playerId) {
        const res = await this.request(`players/${playerId}`, {}, 'get');
        return res;
    }
    static async getPlayerStatsYearByYear(playerId) {
        const res = await axios.get(`${NHLAPI_BASE_URL}/people/${playerId}/stats?stats=yearByYear`);
        return res.data.stats[0].splits;
    }
    static async getTeamDetails(teamId) {
        const res = await this.request(`teams/${teamId}`, {}, 'get');
        return res;
    }
    static async addPlayerToFavorites(username, playerId) {
        await this.request(`users/${username}/players/${playerId}`, {}, 'post');
        return;
    }
    static async removePlayerFromFavorites(username, playerId) {
        await this.request(`users/${username}/players/${playerId}`, {}, 'delete');
        return;
    }
    static async getFavoritePlayers(username) {
        const res = await this.request(`users/${username}/players`, {}, 'get');
        return res.favorites;
    }
    static async getStandings() {
        const res = await axios.get(`${NHLAPI_BASE_URL}/standings?expand=standings.record`);
        return res.data.records;
    }
    static async getAllPlayers(page=null, limit=null, nameLike=null) {
        let urlString = 'players/all';
        if ((page && limit)) {
            urlString+= '?'
        }
        if (page && limit) {
            urlString+= `page=${page}&limit=${limit}`
        }
        if (nameLike) {
            urlString+= `&nameLike=${nameLike.toLowerCase()}`
        }
        const res = await this.request(urlString, {}, 'get');
        return res;
    }
    static async getTeamStats(teamId) {
        const res = await axios.get(`${NHLAPI_BASE_URL}/teams/${teamId}?expand=team.stats`);
        return res.data.teams[0].teamStats[0].splits;
    }
    // static async getRoster(teamId) {
    //     const res = await this.request(`teams/${teamId}/roster`, {}, 'get');
    //     return res;
    // }
    static async getRoster(teamId, season) {
        const res = await axios.get(`${NHLAPI_BASE_URL}/teams/${teamId}/roster?expand=team.roster&season=${season}`);

        // this will get roster, but we need player data.
        const output = await getRosterData(res.data.roster);

        return output; 
    }
    static async getWatchedTeams(username) {
        const res = await this.request(`users/${username}/teams`, {}, 'get');
        return (res);
    }
    static async addWatchedTeam(username, teamId) {
        const res = await this.request(`users/${username}/teams/${teamId}`, {}, 'post');
        return res;
    }
    static async removeWatchedTeam(username, teamId) {
        const res = await this.request(`users/${username}/teams/${teamId}`, {}, 'delete');
        return res;
    }
    static async removeFavoriteTeam(username) {
        const res = await this.request(`users/${username}`, {favTeamId : null}, 'patch');
        return res;
    }
    static async getPlayoffData(season) {
        const res = await axios.get(`${NHLAPI_BASE_URL}/tournaments/playoffs?expand=round.series,schedule.game.seriesSummary&season=${season}`);
        return res.data
    }
    static async getSeasonYears() {
        const res = await axios.get(`${NHLAPI_BASE_URL}/seasons`);
        return res.data
    }
    static async getCurrentSeason() {
        const res = await axios.get(`${NHLAPI_BASE_URL}/seasons.current`);
        return res.data.seasons[0].seasonId;
    }
    static async getGamesForSeason(teamId, season) {
        const res = await axios.get(`${NHLAPI_BASE_URL}/schedule?teamId=${teamId}&season=${season}`);
        return res.data.dates;
    }
}

export default NHLstatsAPI