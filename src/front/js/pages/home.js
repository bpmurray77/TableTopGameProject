import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/logos.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

  const myStyle={

    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}



	return (
		<div class="p-5 mb-4 rounded-3 container" style={myStyle}>
      <div class="container-fluid py-5" >
        <div >
          <div class="container">
<div class="row">
  <div class="col-md-6 offset-md-3">
    <h2 class="text-center text-dark mt-5">Open Forge Map Generator</h2>
    
    <div class="card my-5">

      <form class="card-body cardbody-color p-lg-5">

        <div class="text-center">
          <img src={logoImageUrl} class="img-fluid profile-image-pic img-thumbnail my-3"
            width="200px" />
        </div>
        <div class="form-text text-center mb-5 text-light">
          <Link to="/login">
          <p class="text-light fw-bold"> Login</p>
            </Link>
        </div>
        <div class="form-text text-center mb-5 text-light">
          <Link to="/signup">
          <p class="text-light fw-bold"> Signup</p>
            </Link>
        </div>
      </form>
    </div>

  </div>
</div>
</div>
        </div>
      </div>
    </div>
	);
};
