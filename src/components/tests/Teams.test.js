import {  render, fireEvent, queryAllByText, getAllByText, getByLabelText } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import Teams from '../Teams/Teams';

const teams = [{
    abbreviation : "BOS",
    city: "Boston",
    conference: "Eastern",
    division: "Atlantic",
    id: 6,
    name: "Boston Bruins",
    shortName: "Bruins",
    url: "http://www.bostonbruins.com/",
    venue: "TD Garden"
}]

test('renders', () => {
  render(
  <BrowserRouter>
    <Teams teams={teams} />
  </BrowserRouter>);
});
test('renders teams page', () => {
  const {getByText} = render(
  <BrowserRouter>
    <Teams teams={teams} />
  </BrowserRouter>
  );
  expect(getByText("Boston Bruins")).toBeInTheDocument();
});
test('renders team detail page', () => {
    const {getByText} = render(
        <BrowserRouter>
          <Teams teams={teams} />
        </BrowserRouter>
        );
    const teamBtn = getByText('Boston Bruins')
    fireEvent.click(teamBtn);
    expect(getByText('Boston Bruins')).toBeInTheDocument();
})

