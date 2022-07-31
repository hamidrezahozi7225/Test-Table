import React from "react";
import {NavLink} from "react-router-dom";

const Headers= () =>{
    return(
        <nav className="navbar navbar-expand bg-dark ">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/table">Table</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/test">Test</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Headers