import React from "react";
import "../stylesheets/forms/RegisterForm.css";
import {useState} from 'react';
import NHLstatsAPI from "../api";
import jwt_decode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';

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
        favTeamId: "1"
    }
  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
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
          userData.favPlayers = [];
          console.log('got user: ',  userData)
          setUser(userData);
          navigate('/home', {replace: true});
        }
        signMeUp().catch(err=> setFormError({...formError, ['duplicateusername'] : `Username ${formData.username} is taken, please choose another`}))
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

        <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
        </Form>
        </div>
    )
}

export default RegisterForm