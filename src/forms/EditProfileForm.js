import React from "react";
import "../stylesheets/forms/EditProfileForm.css";
import {useState, useEffect} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';
import NHLstatsAPI from "../api";


function EditProfileForm({user, setUser, teams}) {
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
            password: "password",
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
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const editProfile = async () => {
            console.log(NHLstatsAPI.token)
            await NHLstatsAPI.editUser(user.username, formData).then(
            setUser({
            username: user.username,
            firstName: formData.firstName,
            email: formData.email,
            lastName: formData.lastName,
            password: formData.password,
            favTeamId: formData.favTeamId,
            favPlayers: user.favPlayers,
            watchedTeams: user.watchedTeams
          })
        )

        }
        editProfile();
    }

    if (!teams) {
      return(<div>
        <p>LOADING..</p>
      </div>)
    }
    
    return (
        <div>
        <Form className="form" onSubmit={e=> e.preventDefault()}>
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
                type="select" defaultValue={user.favTeamId} onChange={handleChange}>
                  {teams.map(t=> <option key={t.id} value={t.id}>{t.name}</option>)}
              </Input>
          </FormGroup>

        <Button type="submit" onClick={handleSubmit}>Update</Button>
        </Form>
        </div>
    )
}

export default EditProfileForm