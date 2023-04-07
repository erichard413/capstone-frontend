import React from 'react';
import {useState, useEffect} from 'react';
import PlayerCard from './PlayerCard';
import '../../stylesheets/components/Players/Players-list.css';
import NHLstatsAPI from '../../api';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';


function ActivePlayers({user, setUser}) {
    const [players, setPlayers] = useState();
    const [currPlayers, setCurrPlayers] = useState();
    const [pageIdx, setPageIdx] = useState(1);
    const [nameSearch, setNameSearch] = useState();
    const [paginationLimit, setPaginationLimit] = useState(15);
    
    const initialState = {
        name: ""
    }
    const [formData, setFormData] = useState(initialState);

    useEffect(()=>{
        const getPlayers = async function() {
            let res = await NHLstatsAPI.getPlayers(pageIdx, paginationLimit);
            setPlayers(res);
            setCurrPlayers(res);
        }
        getPlayers();
    },[])
    // change to page Idx, go get next pagination
    useEffect(()=>{
        console.log('change to pageIdx')
        const getPlayers = async function() {
            let res = await NHLstatsAPI.getPlayers(pageIdx, paginationLimit);
            setCurrPlayers(res);
        }
        getPlayers();
    },[pageIdx])

    if (!players) {
       return (
        <div><p>LOADING..</p></div>
       ) 
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSearch = (e) => {
        e.preventDefault();
        let name = formData.name;
        async function searchPlayers() {
            const res = await NHLstatsAPI.getPlayers(1, paginationLimit, name);
            setCurrPlayers(res);
        }
        setNameSearch(name);
        setFormData(initialState);
        setPageIdx(1);
        searchPlayers();
    }

    function handlePrev() {
        if(pageIdx > 1) {
            setPageIdx(pageIdx-1);
        }
    }
    function handleNext() {
        if(pageIdx < players.endPage) {
            setPageIdx(pageIdx+1);
        }
    }

    function handleReset() {
        setCurrPlayers(players);
        setFormData(initialState)
    }

    let prevBtnDisabled = pageIdx === 1 ? 'disabled' : "";
    let nextBtnDisabled = pageIdx === players.endPage ? 'disabled' : "";

    return (
        <div className="Players main-content"> 
            <div>
                <Form className="players-form" onSubmit={handleSearch}>
                    <FormGroup>
                    <Label for="type">Search By Name:</Label>
                    <Input name="name"
                    type="text"
                    placeholder="Type a player name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    </FormGroup>
                <Button onClick={handleSearch}>SEARCH</Button>   <Button onClick={handleReset}>RESET</Button>
            </Form>
                <button onClick={handlePrev} disabled={prevBtnDisabled}> &larr; </button>
                <p className="pageIdx">{pageIdx}</p>
                <button onClick={handleNext} disabled={nextBtnDisabled}> &rarr; </button>
            </div>
            {currPlayers && currPlayers.results.map(p=> <PlayerCard key={p.playerId} user={user} setUser={setUser} player={p}/>)}
        </div>
    )
}

export default ActivePlayers;