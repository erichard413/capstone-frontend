import React, {useState, useEffect} from 'react';
import '../../stylesheets/components/Teams/Playoffs.css';
import NHLstatsAPI from '../../api';
import PlayoffsCircle from './Playoffs-circle';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';
import formatPlayoffData from '../../helpers/formatPlayoffData';

function Playoffs() {
    const [seasons, setSeasons] = useState();
    const [formData, setFormData] = useState();
    const [currSeason, setCurrSeason] = useState("20222023")
    const [playoffData, setPlayoffData] = useState()

    useEffect(()=>{
        async function getSeasons() {
            const seasonRes = await NHLstatsAPI.getSeasonYears();
            setSeasons(seasonRes.seasons);
            // setCurrSeason(seasonRes.seasons[seasonRes.seasons.length-1].seasonId)
        }
        getSeasons();
    },[])

    useEffect(()=>{
        console.log('getting data...')
        async function getData() {
            try {
                const res = await NHLstatsAPI.getPlayoffData(currSeason);
                if (res.rounds) {
                    setPlayoffData(formatPlayoffData(res));
                }
            } catch (err) {
                alert('Data unavailable!')
            }

        }
        if (currSeason) getData();
    },[currSeason])

    if (!playoffData || !seasons || !currSeason) {
        return (
        <div>LOADING..</div>
        )
    }

    const handleChange = (e) => {
        let {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrSeason(formData.season)
    }

    const imgUrl = "https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/"
    // find winner

    let winner;
    if (playoffData.east.round4.length>0) {
        winner = playoffData.east.round4[0].team1.wins === 4 ? playoffData.east.round4[0].team1 : playoffData.west.round4[0].team1;
    }

    console.log(playoffData);

    return(
        <div className="Playoffs">
            <h2>Playoffs</h2>
            <Form>
                <FormGroup className="form-group">
                    <Label className="form-label" for="type">Season:</Label>
                    <Input className="form-label" name="season"
                        type="select" defaultValue={currSeason} onChange={handleChange}>
                        {seasons && seasons.map(s=> <option key={s.seasonId} value={s.seasonId}>{s.seasonId.slice(0,4)+"-"+s.seasonId.slice(4)}</option>)}
                    </Input>
                </FormGroup>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>
            {winner && <div className="Playoffs-Winner">
                <img src={`${imgUrl}${winner.id}.svg`} alt="winner"/>
            <p>{playoffData.east.round4[0].description}</p>
            </div>}
            
            <div className="Playoffs-table">
                <div className="Playoffs-rd-1 EAST">
                    <div className="Playoffs-circles-rd1">
                        {playoffData.east.round1.length > 0 ? <>
                        <div className="results-east1"><p>{playoffData.east.round1[0].description}</p></div> 
                        <PlayoffsCircle team={playoffData.east.round1[0].team1} conference="EAST"/>
                        <PlayoffsCircle team={playoffData.east.round1[0].team2} conference="EAST"/>
                        <div className="results-east1"><p>{playoffData.east.round1[1].description}</p></div>   
                        <PlayoffsCircle team={playoffData.east.round1[1].team1} conference="EAST"/>
                        <PlayoffsCircle team={playoffData.east.round1[1].team2} conference="EAST"/> 
                        <div className="results-east1"><p>{playoffData.east.round1[2].description}</p></div> 
                        <PlayoffsCircle team={playoffData.east.round1[2].team1} conference="EAST"/>
                        <PlayoffsCircle team={playoffData.east.round1[2].team2} conference="EAST"/> 
                        <div className="results-east1"><p>{playoffData.east.round1[3].description}</p></div> 
                        <PlayoffsCircle team={playoffData.east.round1[3].team1} conference="EAST"/> 
                        <PlayoffsCircle team={playoffData.east.round1[3].team2} conference="EAST"/>   
                        {/* <div className="Playoffs-circle">{playoffData.east.round1[0] && <img src={`${imgUrl}${playoffData.east.round1[0].team1.id}.svg`} alt={`rd1-${playoffData.east.round1[0].team1.name}`} onError={replaceImage}/>}</div> */}
                        {/* <div className="Playoffs-circle">{playoffData.east.round1[0] && <img src={`${imgUrl}${playoffData.east.round1[0].team2.id}.svg`} alt={`rd1-${playoffData.east.round1[0].team2.name}`} onError={replaceImage}/>}</div>
                        <div className="Playoffs-circle">{playoffData.east.round1[1] && <img src={`${imgUrl}${playoffData.east.round1[1].team1.id}.svg`} alt={`rd1-${playoffData.east.round1[1].team1.name}`} onError={replaceImage}/>}</div>
                        <div className="Playoffs-circle">{playoffData.east.round1[1] && <img src={`${imgUrl}${playoffData.east.round1[1].team2.id}.svg`} alt={`rd1-${playoffData.east.round1[1].team2.name}`} onError={replaceImage}/>}</div>
                        <div className="Playoffs-circle">{playoffData.east.round1[2] && <img src={`${imgUrl}${playoffData.east.round1[2].team1.id}.svg`} alt={`rd1-${playoffData.east.round1[2].team1.name}`} onError={replaceImage}/>}</div>
                        <div className="Playoffs-circle">{playoffData.east.round1[2] && <img src={`${imgUrl}${playoffData.east.round1[2].team2.id}.svg`} alt={`rd1-${playoffData.east.round1[2].team2.name}`} onError={replaceImage}/>}</div>
                        <div className="Playoffs-circle">{playoffData.east.round1[3] && <img src={`${imgUrl}${playoffData.east.round1[3].team1.id}.svg`} alt={`rd1-${playoffData.east.round1[3].team1.name}`} onError={replaceImage}/>}</div>
                        <div className="Playoffs-circle">{playoffData.east.round1[3] && <img src={`${imgUrl}${playoffData.east.round1[3].team2.id}.svg`} alt={`rd1-${playoffData.east.round1[3].team2.name}`} onError={replaceImage}/>}</div> */}
                        </> :
                        <>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        <div className="Playoffs-circle"></div>
                        </> }
                        
                    </div>
                    <div className="Playoffs-connections">
                        <div className="Playoffs-connectors">
                            <div className="two-to-one-left"></div>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="Playoffs-connectors">
                            <div className="two-to-one-left"></div>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="Playoffs-connectors">
                            <div className="two-to-one-left"></div>
                            <div className="vertical-line"></div>
                        </div>
                        <div className="Playoffs-connectors">
                            <div className="two-to-one-left"></div>
                            <div className="vertical-line"></div>
                        </div>
                    </div>
                </div>
                <div className="Playoffs-rd-2 EAST">
                    <div className="Playoffs-circles-rd2">
                        {playoffData.east.round2.length > 0 ? <>
                            <div className="results-east2-1"><p>{playoffData.east.round2[0].description}</p></div> 
                            <PlayoffsCircle team={playoffData.east.round2[0].team1} conference="EAST"/>  
                            <PlayoffsCircle team={playoffData.east.round2[0].team2} conference="EAST"/>
                            <div className="results-east2-2"><p>{playoffData.east.round2[1].description}</p></div> 
                            <PlayoffsCircle team={playoffData.east.round2[1].team1} conference="EAST"/>  
                            <PlayoffsCircle team={playoffData.east.round2[1].team2} conference="EAST"/>  
                            {/* <div className="Playoffs-circle">{playoffData.east.round2 && <img src={`${imgUrl}${playoffData.east.round2[0].team1.id}.svg`} alt={`rd2-${playoffData.east.round2[0].team1.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.east.round2 && <img src={`${imgUrl}${playoffData.east.round2[0].team2.id}.svg`} alt={`rd2-${playoffData.east.round2[0].team2.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.east.round2  && <img src={`${imgUrl}${playoffData.east.round2[1].team1.id}.svg`} alt={`rd2-${playoffData.east.round2[1].team1.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.east.round2 && <img src={`${imgUrl}${playoffData.east.round2[1].team2.id}.svg`} alt={`rd2-${playoffData.east.round2[1].team2.name}`} onError={replaceImage}/>}</div> */}
                        </> : <>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                        </>}
                            
                    </div>
                    <div className="Playoffs-connections-rd2">
                        <div className="Playoffs-connectors-rd2">
                            <div className="two-to-one-left-rd2"></div>
                            <div className="vertical-line-rd2"></div>
                        </div>
                        <div className="Playoffs-connectors-rd2">
                            <div className="two-to-one-left-rd2"></div>
                            <div className="vertical-line-rd2"></div>
                        </div>
                    </div>
                </div>
                <div className="Playoffs-rd-3 EAST">
                    <div className="Playoffs-circles-rd3">
                        {playoffData.east.round3.length > 0 ? <>
                            <div className="results-east3"><p>{playoffData.east.round3[0].description}</p></div> 
                            <PlayoffsCircle team={playoffData.east.round3[0].team1} conference="EAST"/>  
                            <PlayoffsCircle team={playoffData.east.round3[0].team2} conference="EAST"/> 
                            {/* <div className="Playoffs-circle">{playoffData.east.round3[0] && <img src={`${imgUrl}${playoffData.east.round3[0].team1.id}.svg`} alt={`rd3-${playoffData.east.round3[0].team1.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.east.round3[0] && <img src={`${imgUrl}${playoffData.east.round3[0].team2.id}.svg`} alt={`rd3-${playoffData.east.round3[0].team2.name}`} onError={replaceImage}/>}</div>  */}
                        </>:<>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                        </>}
                           
                    </div>
                        <div className="Playoffs-connectors-rd3">
                            <div className="two-to-one-left-rd3"></div>
                            <div className="vertical-line-rd3"></div>
                        </div>
                </div>
                <div className="Playoffs-rd-4 EAST">
                        <div className="Playoffs-circles-rd4">
                            {playoffData.east.round4.length > 0 ? <>
                                <PlayoffsCircle team={playoffData.east.round4[0].team1} conference="EAST"/>  
                                {/* <div className="Playoffs-circle">{playoffData.east.round4[0] && <img src={`${imgUrl}${playoffData.east.round4[0].team1.id}.svg`} alt={`rd4-${playoffData.east.round4[0].team1.name}`} onError={replaceImage}/>}</div> */}
                            </> : <>
                                <div className="Playoffs-circle"></div>
                            </>}
                        
                </div>
                        <div className="Playoffs-connectors-rd4">
                            <div className="vertical-line-rd4"></div>
                        </div>
                </div>
                <div className="Playoffs-rd-4 WEST">
                    <div className="Playoffs-circles-rd4">
                        {playoffData.west.round4.length > 0 ? <>
                            <PlayoffsCircle team={playoffData.west.round4[0].team1} conference="WEST"/>  
                            {/* <div className="Playoffs-circle">{playoffData.west.round4[0] && <img src={`${imgUrl}${playoffData.west.round4[0].team1.id}.svg`} alt={`rd4-${playoffData.west.round4[0].team1.name}`} onError={replaceImage}/>}</div> */}
                        </> : <>
                            <div className="Playoffs-circle"></div>
                        </>}
                           
                    </div>
                    
                </div>
                <div className="Playoffs-rd-3 WEST">
                    <div className="Playoffs-connections-rd3">
                        <div className="Playoffs-connectors-rd3">
                            <div className="vertical-line-rd3"></div>
                            <div className="two-to-one-right-rd3"></div>
                        </div>
                    </div>
                    <div className="Playoffs-circles-rd3-right">
                        {playoffData.west.round3.length > 0 ? <>
                            <div className="results-west3"><p>{playoffData.west.round3[0].description}</p></div>
                            <PlayoffsCircle team={playoffData.west.round3[0].team1} conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round3[0].team2} conference="WEST"/>  
                            {/* <div className="Playoffs-circle">{playoffData.west.round3[0] && <img src={`${imgUrl}${playoffData.west.round3[0].team1.id}.svg`} alt={`rd3-${playoffData.west.round3[0].team1.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.west.round3[0] && <img src={`${imgUrl}${playoffData.west.round3[0].team2.id}.svg`} alt={`rd3-${playoffData.west.round3[0].team2.name}`} onError={replaceImage}/>}</div> */}
                        </> : <>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                        </>}
                        
                    </div> 
                </div>
                <div className="Playoffs-rd-2 WEST">
                    <div className="Playoffs-connections-rd2">
                        <div className="Playoffs-connectors-rd2">
                            <div className="vertical-line-rd2"></div>
                            <div className="two-to-one-right-rd2"></div>
                        </div>
                        <div className="Playoffs-connectors-rd2">
                            <div className="vertical-line-rd2"></div>
                            <div className="two-to-one-right-rd2"></div>
                        </div>
                    </div>
                    <div className="Playoffs-circles-rd2">
                        {playoffData.west.round2.length > 0 ? <>
                            <div className="results-west2-1"><p>{playoffData.west.round2[0].description}</p></div>
                            <PlayoffsCircle team={playoffData.west.round2[0].team1} conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round2[0].team2} conference="WEST"/>
                            <div className="results-west2-2"><p>{playoffData.west.round2[1].description}</p></div> 
                            <PlayoffsCircle team={playoffData.west.round2[1].team1} conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round2[1].team2} conference="WEST"/> 
                            {/* <div className="Playoffs-circle">{playoffData.west.round2[0] && <img src={`${imgUrl}${playoffData.west.round2[0].team1.id}.svg`} alt={`rd2-${playoffData.west.round2[0].team1.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.west.round2[0] && <img src={`${imgUrl}${playoffData.west.round2[0].team2.id}.svg`} alt={`rd2-${playoffData.west.round2[0].team2.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.west.round2[1] && <img src={`${imgUrl}${playoffData.west.round2[1].team1.id}.svg`} alt={`rd2-${playoffData.west.round2[1].team1.name}`} onError={replaceImage}/>}</div>    
                            <div className="Playoffs-circle">{playoffData.west.round2[1] && <img src={`${imgUrl}${playoffData.west.round2[1].team2.id}.svg`} alt={`rd2-${playoffData.west.round2[1].team2.name}`} onError={replaceImage}/>}</div> */}
                        </> : <>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                        </>}
                        
                    </div> 
                </div>
                <div className="Playoffs-rd-1 WEST">
                    <div className="Playoffs-connections">
                        <div className="Playoffs-connectors">
                            <div className="vertical-line"></div>
                            <div className="two-to-one-right"></div>
                        </div>
                        <div className="Playoffs-connectors">
                            <div className="vertical-line"></div>
                            <div className="two-to-one-right"></div>
                        </div>
                        <div className="Playoffs-connectors">
                            <div className="vertical-line"></div>
                            <div className="two-to-one-right"></div>
                        </div>
                        <div className="Playoffs-connectors">
                            <div className="vertical-line"></div>
                            <div className="two-to-one-right"></div>
                        </div>
                    </div>
                    <div className="Playoffs-circles-rd1">
                        {playoffData.west.round1.length > 0 ? <>
                            {playoffData.west.round1[0] && <div className="results-west1"><p>{playoffData.west.round1[0].description}</p></div> }
                            <PlayoffsCircle team={playoffData.west.round1[0].team1} conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round1[0].team2} conference="WEST"/>
                            {playoffData.west.round1[1] && <div className="results-west1"><p>{playoffData.west.round1[1].description}</p></div> } 
                            <PlayoffsCircle team={playoffData.west.round1[1].team1} conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round1[1].team2} conference="WEST"/>
                            {playoffData.west.round1[2] && <div className="results-west1"><p>{playoffData.west.round1[2].description}</p></div>}  
                            <PlayoffsCircle team={playoffData.west.round1[2] ? playoffData.west.round1[2].team1 : null } conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round1[2] ? playoffData.west.round1[2].team2 : null} conference="WEST"/>
                            {playoffData.west.round1[3] && <div className="results-west1"><p>{playoffData.west.round1[3].description}</p></div>}  
                            <PlayoffsCircle team={playoffData.west.round1[3] ? playoffData.west.round1[3].team1 : null} conference="WEST"/>  
                            <PlayoffsCircle team={playoffData.west.round1[3] ? playoffData.west.round1[3].team2 : null} conference="WEST"/> 
                            {/* <div className="Playoffs-circle">{playoffData.west.round1[0] && <img src={`${imgUrl}${playoffData.west.round1[0].team1.id}.svg`} alt={`rd1-${playoffData.west.round1[0].team1.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[0] && <img src={`${imgUrl}${playoffData.west.round1[0].team2.id}.svg`} alt={`rd1-${playoffData.west.round1[0].team2.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[1] && <img src={`${imgUrl}${playoffData.west.round1[1].team1.id}.svg`} alt={`rd1-${playoffData.west.round1[1].team1.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[1] && <img src={`${imgUrl}${playoffData.west.round1[1].team2.id}.svg`} alt={`rd1-${playoffData.west.round1[1].team2.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[2] && <img src={`${imgUrl}${playoffData.west.round1[2].team1.id}.svg`} alt={`rd1-${playoffData.west.round1[2].team1.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[2] && <img src={`${imgUrl}${playoffData.west.round1[2].team2.id}.svg`} alt={`rd1-${playoffData.west.round1[2].team2.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[3] && <img src={`${imgUrl}${playoffData.west.round1[3].team1.id}.svg`} alt={`rd1-${playoffData.west.round1[3].team1.name}`} onError={replaceImage}/>}</div>
                            <div className="Playoffs-circle">{playoffData.west.round1[3] && <img src={`${imgUrl}${playoffData.west.round1[3].team2.id}.svg`} alt={`rd1-${playoffData.west.round1[3].team2.name}`} onError={replaceImage}/>}</div> */}
                        </> : <>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                            <div className="Playoffs-circle"></div>
                        </>}
                            
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Playoffs;