import React from 'react';
import {useState, useEffect} from 'react';
import PlayerCard from './PlayerCard';
import players from '@nhl-api/players';
import '../../stylesheets/components/Players/ActivePlayers.css';
import NHLstatsAPI from '../../api';
import _ from 'lodash';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';


function AllPlayers({user, setUser}) {
    const [allPlayers, setAllPlayers] = useState();
    const [pageIdx, setPageIdx] = useState(1);
    const [nameSearch, setNameSearch] = useState();
    const [paginationLimit, setPaginationLimit] = useState(15);
    
    const initialState = {
        name: ""
    }
    const [formData, setFormData] = useState(initialState);

    useEffect(()=>{
        const getAllPlayers = async function() {
            let res = await NHLstatsAPI.getAllPlayers(pageIdx, paginationLimit);
            setAllPlayers(res);
        }
        getAllPlayers();
    },[])
    // change to page Idx, go get next pagination
    useEffect(()=>{
        const getAllPlayers = async function() {
            let res = await NHLstatsAPI.getAllPlayers(pageIdx, paginationLimit);
            setAllPlayers(res);
        }
        getAllPlayers();
    },[pageIdx, paginationLimit])

    if (!allPlayers) {
       return (
        <div><p>LOADING..</p></div>
       ) 
    }

    async function search() {
        let res = await NHLstatsAPI.getAllPlayers(pageIdx, paginationLimit, formData.name);
        setAllPlayers(res);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
        const doSearch = _.debounce(()=>{
            search(formData.name);
        }, 700);

        if (e.target.value.length > 1) {
           doSearch(); 
        }   
    }

    const handleSearch = (e) => {
        e.preventDefault();
        search();
    }

    function handlePrev() {
        if(pageIdx > 1) {
            setPageIdx(pageIdx-1);
        }
    }
    function handleNext() {
        if(pageIdx < allPlayers.endPage) {
            setPageIdx(pageIdx+1);
        }
    }

    let prevBtnDisabled = pageIdx == 1 ? 'disabled' : "";
    let nextBtnDisabled = pageIdx == allPlayers.endPage ? 'disabled' : "";

    return (
        <div className="AllPlayers main-content"> 
            <div>
                <button onClick={handlePrev} disabled={prevBtnDisabled}> &larr; </button>
                {pageIdx}
                <button onClick={handleNext} disabled={nextBtnDisabled}> &rarr; </button>
                <Form className="form" onSubmit={handleSearch}>
                    <FormGroup>
                    <Label for="type">Search By Name:</Label>
                    <Input name="name"
                    type="text"
                    placeholder="Type a player name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    </FormGroup>
                <Button onClick={handleSearch}>SEARCH</Button>
            </Form>
            </div>
            {allPlayers.results.map(p=> <PlayerCard key={p.playerId} user={user} setUser={setUser} player={p} />)}
        </div>
    )
}

export default AllPlayers;