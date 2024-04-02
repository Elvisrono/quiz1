import React from "react";
import { Link } from "react-router-dom";


function Navbar(){
    return(
        <div className="nav-links">
            <div className="head">
                <h1>Serena Beach</h1>
            </div>
            <div className="links">
                <Link to="/rooms">Rooms</Link>
                <Link to="/">Dining</Link>
                <Link to="/">Activities</Link>
                <Link to="/">Location</Link>
                <button>BOOK NOW</button>
                <Link to="Login" className="ml-8">Login</Link>
            </div>
        </div>
    )
}

export default Navbar