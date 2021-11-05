import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className = "nav-bar" id = "nav">
            <Link to="/">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to='/Login'>Login</Link>
            <Link to="/Activities">Activities</Link>
            <Link to="/Routines">Routines</Link>
            <Link to="/Routine_Activity">Routine Activity</Link>
            <Link to="/My_Routines">My Routines</Link>
        </nav>
    )
}

export default NavBar;