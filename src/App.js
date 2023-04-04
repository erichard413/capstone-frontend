import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Profile from './components/User/Profile'
import ActivePlayers from './components/Players/ActivePlayers'
import AllPlayers from './components/Players/AllPlayers.js'
import FavPlayers from './components/Players/FavPlayers'
import Teams from './components/Teams/Teams'
import TeamDetail from './components/Teams/TeamDetail'
import PlayerDetail from './components/Players/PlayerDetail'
import Standings from './components/Teams/Standings'
import NHLstatsAPI from './api';
import getFavPlayers from './helpers/getFavPlayers';
import getWatchedTeams from './helpers/getWatchedTeams';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [teams, setTeams] = useState();
  
  // grab token from LS on page load, grab user on page load, get teams on page load.
  useEffect(()=>{
    async function getTokenFromLS() {
      let token = localStorage.getItem("token") || null;
      console.log('getting token..')
      console.log(`token is ${token}`)
      if (token) {
        NHLstatsAPI.token = token;
      }
    }
    getTokenFromLS();
    async function getUserData() {
      let data = jwt_decode(NHLstatsAPI.token);
      let userData = await NHLstatsAPI.getUser(data.username);
      let favPlayers = await getFavPlayers(userData.username);
      let watchedTeams = await getWatchedTeams(userData);
      userData.watchedTeams = watchedTeams;
      userData.favPlayers = favPlayers;
      console.log('got user: ',  userData);
      setUser(userData);
    }
    if (NHLstatsAPI.token) {
      getUserData();
    }
    async function getTeamData() {
      console.log(`getting teams..`)
      const res = await NHLstatsAPI.getTeams();
      setTeams(res);
    }
    getTeamData();
  }, [])
  // get user data on login
  useEffect(()=>{
    async function getUserData() {
        let data = jwt_decode(NHLstatsAPI.token);
        let userData = await NHLstatsAPI.getUser(data.username);
        userData.favPlayers=await getFavPlayers(userData.username);
        userData.watchedTeams = await getWatchedTeams(userData);
        console.log('got user: ',  userData)
        setUser(userData);
    }
    if (NHLstatsAPI.token) {
      getUserData();
    }
  },[NHLstatsAPI])

  // function to log in user, store token on NHLstatsAPI.
  const logInUser = async(username, password) => {
    try {
      const res = await NHLstatsAPI.logIn(username, password);
      localStorage.setItem('token', res.token);
      NHLstatsAPI.token = res.token;
      let data = jwt_decode(NHLstatsAPI.token);
      let userData = await NHLstatsAPI.getUser(data.username);
      let favPlayers = await getFavPlayers(userData.username);
      userData.watchedTeams = await getWatchedTeams(userData);
      userData.favPlayers = favPlayers;
      console.log('got user: ',  userData)
      setUser(userData);
      navigate('/', {replace: true})
      return true
    } catch (err) {
      return false
    }
  }
  // function to log out user
  const logOutUser = () => {
    setUser();
    localStorage.removeItem('token')
    NHLstatsAPI.token = null;
  }

  return (
    <div className="App">
        <NavBar user={user} logOut={logOutUser}/>
        <Routes>
            <Route exact path="/" element={<Home user={user} setUser={setUser}/>} />
            <Route exact path="/login" element={<Login login={logInUser}/>} />
            <Route exact path="/register" element={<Register setUser={setUser} teams={teams}/>} />
            <Route exact path="/profile" element={<Profile user={user} setUser={setUser} teams={teams}/>} />
            <Route exact path="/teams" element={<Teams teams={teams} />} />
            <Route exact path="/activeplayers" element={<ActivePlayers user={user} setUser={setUser}/>} />
            <Route exact path="/allplayers" element={<AllPlayers user={user} setUser={setUser}/>} />
            <Route exact path="/players/:playerId" element={<PlayerDetail />} />
            <Route exact path="/myplayers" element={<FavPlayers user={user} setUser={setUser} />} />
            <Route exact path="/teams/:teamId" element={<TeamDetail />} />
            <Route exact path="/standings" element={<Standings />} />
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
    </div>

  );
}

export default App;
