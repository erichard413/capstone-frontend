import React from "react";
import "../stylesheets/forms/EditProfileForm.css";
import validateEmail from "../helpers/emailValidator";
import {useState, useEffect} from 'react';
import getWatchedTeams from "../helpers/getWatchedTeams";
import getFavPlayers from "../helpers/getFavPlayers";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';
import NHLstatsAPI from "../api";


function EditProfileForm({user, setUser, teams}) {
    let initialFlash = {}
    let errs = {}
    const [flashMsg, setFlashMsg] = useState(initialFlash)
    const [formData, setFormData] = useState({
        password: "password",
        firstName: "",
        lastName: "",
        email: "",
        favTeamId: "" 
        });

    useEffect(()=>{
        async function waitForUserData() {
            if (user) {
            setFormData({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            favTeamId: user.favTeamId, 
            })
            }
        }
        waitForUserData();
    },[user])

    if (!user) {
        return (<div>LOADING</div>)
    }
    const handleChange = (e) => {
        let {name, value} = e.target;
        // validation - make sure that string doesn't exceed length of JSON Schema params & that email has no spaces.
        let maxCharLength = name === 'email' ? 60 : 30;
        value = name === 'email' ? value.replace(/ +/g, '') : value;
        setFormData(data => ({
            ...data,
            [name] : value.slice(0, maxCharLength)
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const editProfile = async () => {
            // validation
            if (formData.firstName === "") errs.firstName = 'First Name must not be empty!'
            if (formData.lastName === "") errs.lastName = 'Last Name must not be empty!'
            if (!validateEmail(formData.email)) errs.email = 'Email address must be a valid email!'
            setFlashMsg(errs);
            if (Object.keys(errs).length === 0) {
                async function editUser() {
                  await NHLstatsAPI.editUser(user.username, formData);
                  let userData = await NHLstatsAPI.getUser(user.username);
                  let favPlayers = await getFavPlayers(user.username);
                  let watchedTeams = await getWatchedTeams(userData);
                  userData.watchedTeams = watchedTeams;
                  userData.favPlayers = favPlayers;
                  setUser(userData);
                }
                editUser();
                setFlashMsg({...flashMsg, success : 'Profile Updated Successfully!'});  
            }
            setTimeout(()=> {setFlashMsg(initialFlash)}, 3500)
        }
        editProfile();
    }

    if (!teams) {
      return(<div>
        <p>LOADING..</p>
      </div>)
    }
    
    return (
        <div className="EditProfileForm">
        {flashMsg.success && <p className="FlashMsg-success">{flashMsg.success}</p>}
        <Form className="col-12" onSubmit={e=> e.preventDefault()}>
          <div className="row h-100 justify-content-center align-items-center">
          {flashMsg.firstName && <p className="FlashMsg">{flashMsg.firstName}</p>}
          <FormGroup className="form-group">
            <Label className="form-label" for="type">First Name:</Label>
            <Input className="form-label" name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
          </FormGroup>
          {flashMsg.lastName && <p className="FlashMsg">{flashMsg.lastName}</p>}
          <FormGroup className="form-group">
            <Label className="form-label" for="type">Last Name:</Label>
            <Input className="form-label" name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
          </FormGroup>
          {flashMsg.email && <p className="FlashMsg">{flashMsg.email}</p>}
          <FormGroup className="form-group">
            <Label className="form-label" for="type">Email:</Label>
            <Input className="form-label email-input" name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="form-group">
            <Label className="form-label" for="type">Favorite Team:</Label>
            <Input className="form-label" name="favTeamId"
                type="select" defaultValue={user.favTeamId} onChange={handleChange}>
                  {teams.map(t=> <option key={t.id} value={t.id}>{t.name}</option>)}
              </Input>
          </FormGroup>

        <Button type="submit" onClick={handleSubmit}>Update</Button>
                  </div> 
        </Form>
        </div>
    )
}

export default EditProfileForm