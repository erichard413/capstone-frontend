import React from 'react';
import {useState, useEffect} from 'react';
import PlayerCard from './PlayerCard';
import '../../stylesheets/components/Players/Players-list.css';
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

    if (!allPlayers) {
       return (
        <div><p>LOADING..</p></div>
       ) 
    }

    async function search() {
        let res = await NHLstatsAPI.getAllPlayers(1, paginationLimit, formData.name);
        setPageIdx(1);
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
            const getAllPlayers = async function() {
                let res = await NHLstatsAPI.getAllPlayers(pageIdx, paginationLimit, formData.name);
                setAllPlayers(res);
            }
            getAllPlayers();
        }
    }
    function handleNext() {
        if(pageIdx < allPlayers.endPage) {
            setPageIdx(pageIdx+1);
            const getAllPlayers = async function() {
                let res = await NHLstatsAPI.getAllPlayers(pageIdx, paginationLimit, formData.name);
                setAllPlayers(res);
            }
            getAllPlayers();
        }
    }
    function handleReset() {
        setFormData(initialState)
        setPageIdx(1);
        const getAllPlayers = async function() {
            let res = await NHLstatsAPI.getAllPlayers(pageIdx, paginationLimit);
            setAllPlayers(res);
        }
        getAllPlayers();
    }

    let prevBtnDisabled = pageIdx === 1 ? 'disabled' : "";
    let nextBtnDisabled = pageIdx === allPlayers.endPage ? 'disabled' : "";

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
                <Button onClick={handleSearch}>SEARCH</Button>
                <Button onClick={handleReset}>RESET</Button>
            </Form>
                <button onClick={handlePrev} disabled={prevBtnDisabled}> &larr; </button>
                <p className="pageIdx">{pageIdx}</p>
                <button onClick={handleNext} disabled={nextBtnDisabled}> &rarr; </button>
            </div>
            {allPlayers.results.map(p=> <PlayerCard key={p.playerId} user={user} setUser={setUser} player={p} />)}
        </div>
    )
}

export default AllPlayers;