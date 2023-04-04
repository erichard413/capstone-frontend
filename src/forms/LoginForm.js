import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../stylesheets/forms/LoginForm.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

function LoginForm({login}) {
    const initialFlash = ""
    const [flashMsg, setFlashMsg] = useState(initialFlash);
    const initialState = {username: "", password: ""}
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const doLogin = async()=>{
          let res = await login(formData.username, formData.password)
          if (!res) {
            setFlashMsg('Invalid username/password combo!');
            setTimeout(()=> {setFlashMsg(initialFlash)}, 2500)
          }
        }
        doLogin();
      }

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

        <Button type="submit" onClick={handleSubmit}>Login</Button>
      </Form>
        </div>
    )
}

export default LoginForm