import React from "react";
import "../stylesheets/forms/RegisterForm.css";
import {useState} from 'react';
import NHLstatsAPI from "../api";
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import validateEmail from "../helpers/emailValidator";
import getWatchedTeams from "../helpers/getWatchedTeams";

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

function RegisterForm({setUser, teams}) {
  const navigate = useNavigate();
  const [formError, setFormError] = useState([]);
  const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        favTeamId: "24"
    }
  const [formData, setFormData] = useState(initialState);

  // returns false if form not complete, true when form is completed
  const isComplete = () => {
    let res;
    Object.values(formData).map(data => data === "" ? res = false : null);
    if (res === false) {
        return false;
    }
    if (formData.username.length < 2 || formData.username.length > 30)  {
      return false;
    }
    if (formData.password.length < 5 || formData.password.length > 20)  {
      return false;
    }
    if (formData.firstName.length < 2 || formData.firstName.length > 30) {
      return false;
    }
    if (formData.lastName.length < 2 || formData.lastName.length > 30) {
      return false;
    }
    if (!formData.email.includes('@' || !formData.email.includes('.')) || formData.email.length < 6) {
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    let {name, value} = e.target;
    // validation - make sure that string doesn't exceed length of JSON Schema params & that email has no spaces.
    let maxCharLength = name === 'email' ? 60 : name === 'password' ? 20 : 30;
    value = name === 'email' ? value.replace(/ +/g, '') : value;
    setFormData(data => ({
        ...data,
        [name] : value.slice(0, maxCharLength)
    }))
  }
  const handleSubmit = (e) => {
        e.preventDefault();
        const signMeUp = async() => {
          let res = await NHLstatsAPI.register(formData);
          NHLstatsAPI.token = res.token;
          localStorage.setItem('token', res.token);
          setFormData(initialState);
          let data = jwt_decode(NHLstatsAPI.token);
          let userData = await NHLstatsAPI.getUser(data.username);
          let watchedTeams = await getWatchedTeams(userData);
          userData.watchedTeams = watchedTeams;
          userData.favPlayers = [];
          console.log('got user: ',  userData)
          setUser(userData);
          navigate('/home', {replace: true});
        }
        signMeUp().catch(err=> setFormError({...formError, ['duplicateUsername'] : `Username ${formData.username} is taken, please choose another`}))
        }
   
    if (!teams) {
      return(<div>
        <p>LOADING..</p>
      </div>)
    }
    console.log(formData);
    return (
        <div>
        <Form className="form">
          <FormGroup>
            {formError.duplicateUsername && <p className="FlashMsg">{formError.duplicateUsername}</p>}
            <Label for="type">Username:</Label>
            <Input 
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Password:</Label>
            <Input name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">First Name:</Label>
            <Input name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Last Name:</Label>
            <Input name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Email:</Label>
            <Input name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Favorite Team:</Label>
            <Input name="favTeamId"
                type="select" onChange={handleChange}>
                  {teams.map(t=> <option key={t.id} value={t.id}>{t.name}</option>)}
              </Input>
          </FormGroup>

        {isComplete() ? <Button type="submit" onClick={handleSubmit}>Sign Up</Button> : <Button type="submit" onClick={handleSubmit} disabled>Sign Up</Button> }
        </Form>
        </div>
    )
}

export default RegisterForm