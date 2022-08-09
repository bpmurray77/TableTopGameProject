import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({header, home, signup, login}) =>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">{header}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link className="navbar-brand" to={"/single"}>
            {home} <span class="sr-only">(current)</span>
            </Link>
            <br></br>
            <Link to={"/signup"} className="navbar-brand" >
            {signup}
            </Link>
            <Link to={"/login"} className="navbar-brand">
            {login}
            </Link>
        </div>
    </div> 
    </nav>
    )
}


