import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = ({header, home, signup, login}) =>{
    const { store, actions } = useContext(Context);

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">{header}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <br></br>
            <Link to={"/signup"} className="navbar-brand" >
            {signup}
            </Link>
            {!store.token ?
            <Link to={"/login"} className="navbar-brand">
            {login}
            </Link> :
            <button onClick={() =>{actions.logout()}} type="button" class="btn btn-light">logout</button>
            }
            <Link to="/single" className="navbar-brand">Vault</Link>
            <Link to="/myinventory" className="navbar-brand">My Inventory</Link>
            <Link to="/gnrtr" className="navbar-brand">Generator</Link>

           
           
        </div>
    </div> 
    </nav>
    )
}


