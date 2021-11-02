import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav id="nav">
            <Link to="/">Home</Link>
            <Link to="/Activities">Activities</Link>
            <Link to="/Routines">Routines</Link>
        </nav>
    )
}

export default NavBar;