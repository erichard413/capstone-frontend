import NHLstatsAPI from "../api";

// this function will take in a user, setUser, team, and action('ADD' or 'REMOVE')
const teamListAddRemove = (user, setUser, team, action) =>{
    if (action === 'ADD') {
        let userCopy = {...user};
        userCopy.watchedTeams[team.id] = team;
        setUser(userCopy);
        async function updateDB() {
            await NHLstatsAPI.addWatchedTeam(user.username, team.id);
        }
        updateDB();
    }
    if (action === 'REMOVE') {
        let userCopy = {...user};
        delete userCopy.watchedTeams[team.id]
        async function updateDB() {
            await NHLstatsAPI.removeWatchedTeam(user.username, team.id);
            if (team.id === user.favTeamId) {
                await NHLstatsAPI.removeFavoriteTeam(user.username, team.id);
                userCopy.favTeamId = null;
            }
        }
        setUser(userCopy)
        updateDB();
    }
}

export default teamListAddRemove