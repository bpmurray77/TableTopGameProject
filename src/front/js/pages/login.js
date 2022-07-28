import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
        <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Tile Generator Login</h2>
        
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src="https://p.turbosquid.com/ts-thumb/VB/nYTKN4/el/dungeon1/png/1617987083/600x600/fit_q87/b478a6cd8d53180c3e7ed094f7fe9d6df79f2d80/dungeon1.jpg" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password"/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-light">Not
              Registered? 
              <Link to="/signup">
              <a class="text-light fw-bold"> Create an
                Account</a>
                </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
        </div>
	);
};