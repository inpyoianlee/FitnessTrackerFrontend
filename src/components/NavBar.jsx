import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/Register">Register</Link>
            <Link to='/Login'>Login</Link>
            <Link to="/Activities">Activities</Link>
            <Link to="/Routines">Routines</Link>
            <Link to="/Routine_Activity">Routine Activity</Link>
        </nav>
    )
}

export default NavBar;