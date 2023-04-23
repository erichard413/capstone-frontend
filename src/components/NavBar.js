import React, {useState} from "react";
import "../stylesheets/components/NavBar.css";
import { useNavigate, NavLink } from "react-router-dom";
import { Navbar,
         Nav,
         NavbarBrand,
         NavItem,
      } from "reactstrap";

function NavBar({user, logOut}) {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(true);
    const handleLogOut = (e) => {
        e.preventDefault();
        logOut();
        navigate('/', {replace: true});
    }
    const toggleNavbar = (e) => {
      e.preventDefault();
      setCollapsed(!collapsed)
    }
    const closeMenu = () => {
      setCollapsed(true);
    }
 
    return (
      <div className={`NavBar ${user ? `team-${user.favTeamId}` : 'default'}`}>   
      <Navbar className="Mobile-nav" expand="md">
        {/* <NavbarBrand className="me-auto"> */}
        {/* <div className="navbar-brand"> */}
          <h1 onClick={()=>navigate('/', {replace: true})}>NHL<span id="tinyHeader">STATS</span></h1> 
        {/* </div> */}

        {/* </NavbarBrand> */}
        <div className="showhidebtndiv collapse-toggler" onClick={toggleNavbar}>
          <div></div>
          <div></div>
          <div></div>
          {/* <button onClick={toggleNavbar} className="collapse-toggler">SHOW/HIDE</button>  */}
        </div>
        {/* <Collapse id="collapse" hidden={!collapsed} navbar> */}
            {collapsed === false &&
            <div className={`Mobile-nav-links ${user ? `team-${user.favTeamId}` : 'default'}`}>
              <ul>
                {user && <li><NavLink to="/profile" onClick={closeMenu} title="Account">Account</NavLink></li>}
                <li><NavLink to="/teams" onClick={closeMenu} title="Teams">Teams</NavLink></li>
                <li><NavLink to="/activeplayers" onClick={closeMenu} title="ActivePlayers">Active Players</NavLink></li>
                <li><NavLink to="/allplayers" onClick={closeMenu} title="AllPlayers">All Players</NavLink></li>
                <li><NavLink to="/standings" onClick={closeMenu} title="Standings">Standings</NavLink></li>
                {user ? <li><NavLink to='/' onClick={handleLogOut} title="LogOut">Log Out</NavLink></li> : <li><NavLink to="/login" onClick={closeMenu} title="Login">Login</NavLink></li>}
                {!user && <li><NavLink to="/register" onClick={closeMenu} title="Register">Sign Up</NavLink></li>}
              </ul>
            </div>}
      
        {/* </Collapse> */}
       </Navbar>
       <Navbar expand="md" className="Main-nav">
          <h1 onClick={()=>navigate('/', {replace: true})}>NHL<span id="tinyHeader">STATS</span></h1> 
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