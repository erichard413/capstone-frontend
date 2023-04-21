import {  render, fireEvent } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import NavBar from '../NavBar';

test('renders', () => {
  render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>);
});
test('renders navbar', () => {
  const {getByText} = render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
  );
  expect(getByText("All Players")).toBeInTheDocument();
  expect(getByText("Login")).toBeInTheDocument();
});
test('nav links work', () => {
  const {getByText} = render(
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
  );
  setTimeout(()=> {
    fireEvent.click(queryByText('Login'));
    expect(getByText('Login').toBeInTheDocument())
  })  
  setTimeout(()=> {
    fireEvent.click(queryByText('Standings'));
    expect(getByText('Division Standings').toBeInTheDocument())
  })  
});
