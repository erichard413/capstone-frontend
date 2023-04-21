import {  render, fireEvent, queryAllByText, getAllByText, getByLabelText } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Login from '../Login';

test('logged in user has watched teams', () => {
    const {getAllByText, queryByText} = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    setTimeout(()=> {
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'password'}});
        const btn = queryByText('Login');
        fireEvent.click(btn);
        // test user will have Boston Bruins as favorite team, so it will show up on watched teams.
        expect(queryByText('Boston Bruins').toBeInTheDocument());
    }, 1000);
    
});
test('add new team', ()=>{
    const {getAllByText, getByText, queryByText} = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    setTimeout(()=> {
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'password'}});
        const btn = queryByText('Login');
        fireEvent.click(btn);
        // test user will have Boston Bruins as favorite team, so it will show up on watched teams.
        // expect(queryByText('Boston Bruins').toBeInTheDocument());
        const teamsBtn = getAllByText('Teams');
        fireEvent.click(teamsBtn);
        // expect(queryByText('Anaheim Ducks').toBeInTheDocument());
        fireEvent.click(getAllByText('Anaheim Ducks'));
        // expect(queryByText('Honda Center')).toBeInTheDocument();
        fireEvent.click(getAllByText('Add to Watchlist'));
        fireEvent.click(getAllByText('NHLSTATS'));
        expect(queryByText('Anaheim Ducks')).toBeInTheDocument();
    }, 1000);

})
