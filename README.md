# NHLSTATS App
Deployed: https://nhlstats-app.netlify.app

This is my Capstone project for Springboard/UMASS Global Software Engineering Bootcamp. This app provides an easy place to look up National Hockey League (NHL) hockey stats, track watched players and teams & playoffs information.

## APIs used

This app makes heavy use of the NHL's API, which is documented here: https://gitlab.com/dword4/nhlapi/-/blob/master/stats-api.md

## Tech stack used

This app was built with React using the following packages:
    *axios
    *react-router
    *react-scripts
    *react-router-dom
    *react-dom
    *reactstrap
    *jwt-decode
    *react-testing-library
    *@nhl-api/players

## User Flow

Users can navigate through player pages, team pages & stats pages without creating a User Account. However creating a User Account will allow users to save favorited players and teams for quick reference to stats. A user can select their favorite team, and the color scheme for the navbar will change based on the favorited team. A user can add players by navigating to the player pages.

# All Players

This page shows the archive of every player to play in "the show". Clicking on a player's icon will navigate the user to the player detail page which shows biographical information & their archived stats. If a user is logged in, button for add/remove the player to the user's favorites. This page also has access to a search bar along with paginated results to prevent data overflow.

# Active Players

This page shows the archive of every player currently on a team roster. Clicking on a player's icon will navigate the user to the player detail page which shows biographical information & their archived stats. If a user is logged in, button for add/remove the player to the user's favorites. This page also has access to a search bar along with paginated results to prevent data overflow.

# Standings

This page shows standings for the selected season. The user may use the drop down to select the requested season, and data will update based on the selected season. Standings can be by division, wildcard, conference, or playoffs*

# Standings > Playoffs

This page will show the results of the season's current NHL Stanley Cup Playoffs. If user is on desktop, they will see a playoff bracket - if on mobile they will see a specialized mobile version.

# Account

This page is where a user will update their information. The user can change their favorite team, first/last name & email.

# Teams

This page displays all NHL teams, which when clicked will take the user to that teams' detail page.

## Features Implemented

    *This page includes a dynamic styling based on users' favorite team id
    *Player search including pagination
    *Log in, log out auth
    *Season selection which changes data displayed

## Testing

Tests are including in ./components/tests and can be run by using:
    npm test


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

