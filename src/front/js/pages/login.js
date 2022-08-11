import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const token = sessionStorage.getItem("token")
  const handleClick = () =>{
      
      const opts = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({

          email: email,
          password: password

        })
      };
      fetch(process.env.BACKEND_URL + "/api/token", opts)
      .then(resp => {
        if (resp.status === 200) return resp.json();
        else alert("there has been some error");
      })
      .then(data =>{
        console.log("this is from backend", data)
        sessionStorage.setItem("token", data.access_token)
      })
      .catch(error =>{
        console.error("there was an error", error);
      })

  }


	return (
    <div>
    {(token && token!="" && token!=undefined) ? ("you are logged in with this token" + token) :(
		
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
              <input value={email} type="text" class="form-control" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="mb-3">
              <input value={password} type="password" class="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-color px-5 mb-5 w-100" onClick={handleClick}>Login</button>
              </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-light">Not
              Registered Yet? 
              <Link to="/signup">
              <p class="text-light fw-bold"> Create an
                Account</p>
                </Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>) }
        </div>
	);
};
