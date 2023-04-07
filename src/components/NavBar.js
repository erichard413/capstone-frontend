import React from "react";
import "../stylesheets/components/NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({user, logOut}) {
    const navigate = useNavigate();
    const handleLogOut = (e) => {
        e.preventDefault();
        logOut();
        navigate('/', {replace: true});
    }

    return (
        <div className="NavBar">
      <Navbar expand="md">
        <NavLink to="/" className="navbar-brand">
          <h1>NHL<span id="tinyHeader">STATS</span></h1> 
        </NavLink>
        

        <Nav className="ml-auto" navbar>
          {user && <NavItem><NavLink to="/profile">Account</NavLink></NavItem>}
          <NavItem><NavLink to="/teams">Teams</NavLink></NavItem>
          <NavItem><NavLink to="/activeplayers">Active Players</NavLink></NavItem>
          <NavItem><NavLink to="/allplayers">All Players</NavLink></NavItem>
          <NavItem><NavLink to="/standings">Standings</NavLink></NavItem>
          <NavItem>
          {user ? <NavLink to='/' onClick={handleLogOut}>Log Out</NavLink> : <NavLink to="/login">Login</NavLink> }
          </NavItem>
          {!user && <NavItem><NavLink to="/register">Sign Up</NavLink></NavItem>}
        </Nav>
      </Navbar>
    </div>
    )
}

export default NavBar;