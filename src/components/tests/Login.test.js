import {  render, fireEvent, queryAllByText, getAllByText, getByLabelText } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Login from '../Login';

test('renders', () => {
  render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>);
});
test('renders log in page', () => {
  const {getAllByText} = render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
  );
  expect(getAllByText("Login")[0]).toBeInTheDocument();
});
test('logs in user', () => {
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
        expect(getByText('Welcome back, testuser')).toBeInTheDocument();
    }, 5000);
});
test('handles invalid log in info', () => {
    const {getAllByText, queryByText} = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    setTimeout(()=> {
        const usernameInput = getByLabelText('Username:');
        const passwordInput = getByLabelText('Password:');
        fireEvent.change(usernameInput, {target: {value: 'testuser'}});
        fireEvent.change(passwordInput, {target: {value: 'blah'}});
        const btn = queryByText('Login');
        fireEvent.click(btn);
        expect(getByText('Invalid username/password combo!')).toBeInTheDocument();
    }, 5000);
});
