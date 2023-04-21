import {  render } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import App from './App';

test('renders', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
});
test('renders home page - not logged in user', () => {
  const {getByText} = render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );
  expect(getByText("Creating an account will let you add favorite players & teams for quick access.")).toBeInTheDocument();
  expect(getByText("Login or Create Account")).toBeInTheDocument();
});
