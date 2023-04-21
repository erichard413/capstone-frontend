import {  render, fireEvent, queryAllByText, getAllByText, getByLabelText } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import NHLstatsAPI from '../../api';
import React from 'react';
import Register from '../Register';

test('renders', () => {
  render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>);
});
test('renders sign up page', () => {
  const {getByText} = render(
  <BrowserRouter>
    <Register />
  </BrowserRouter>
  );
  expect(getByText("Create an Account")).toBeInTheDocument();
});
test('register new user', () => {
    const {getByText, queryByText} = render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    setTimeout(()=> {
        //select inputs
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        const firstNameInput = getByLabelText('First Name:');
        const lastNameInput = getByLabelText('Last Name:');
        const emailInput = getByLabelText('Email:');
        const favoriteTeamInput = getByLabelText('Favorite Team:');
        //select button
        const btn = queryByText('Sign Up');
        //fill out form
        fireEvent.change(usernameInput, {target: {value: 'Testing123'}});
        fireEvent.change(passwordInput, {target: {value: 'Testing123'}});
        fireEvent.change(firstNameInput, {target: {value: 'Test'}});
        fireEvent.change(lastNameInput, {target: {value: 'Test'}});
        fireEvent.change(emailInput, {target: {value: 'email@email.com'}});
        fireEvent.change(favoriteTeamInput, {target: {value: 6}});
        //click!!
        fireEvent.click(btn);
        expect(getByText('Welcome back, Test')).toBeInTheDocument();
    },5000);
    // delete created user, so we can test again.
    setTimeout(()=> {
        const deleteUser = async () => {
            await NHLstatsAPI.deleteUser('Testing123');
        }
        deleteUser();
    })
})
test('register new user - fails on duplicate username', () => {
    const {getByText, queryByText} = render(
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    );
    setTimeout(()=> {
        //select inputs
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        const firstNameInput = getByLabelText('First Name:');
        const lastNameInput = getByLabelText('Last Name:');
        const emailInput = getByLabelText('Email:');
        const favoriteTeamInput = getByLabelText('Favorite Team:');
        //select button
        const btn = queryByText('Sign Up');
        //fill out form
        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'Testing123'}});
        fireEvent.change(firstNameInput, {target: {value: 'Test'}});
        fireEvent.change(lastNameInput, {target: {value: 'Test'}});
        fireEvent.change(emailInput, {target: {value: 'email@email.com'}});
        fireEvent.change(favoriteTeamInput, {target: {value: 6}});
        //click!!
        fireEvent.click(btn);
        expect(getByText('Username testuser is taken, please choose another')).toBeInTheDocument();
    },5000);
})

