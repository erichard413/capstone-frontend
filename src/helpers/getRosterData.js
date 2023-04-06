
import axios from 'axios';
const NHLAPI_BASE_URL = 'https://statsapi.web.nhl.com/api/v1';

const getRosterData = async (data) => {
    // make API call to get player data
    let forwards = [];
    let defensemen = [];
    let goalies = [];

    let promises = data.map(async player => {
        return await axios.get(`${NHLAPI_BASE_URL}/people/${player.person.id}`);
    })
    for await (let res of promises){
        let player = res.data.people[0]
        switch (player.primaryPosition.type) {
            case "Forward":
                forwards.push(player);
                break;
            case "Defenseman":
                defensemen.push(player);
                break;
            case "Goalie":
                goalies.push(player);
                break;
            default:
                break;
        }
    }

    forwards.sort((a,b)=>(a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
    defensemen.sort((a,b)=>(a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
    goalies.sort((a,b)=>(a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));

    return {forwards, defensemen, goalies}
}


export default getRosterData;