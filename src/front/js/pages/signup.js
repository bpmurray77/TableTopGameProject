import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/signup.css";


import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const registerUser = (e) =>{
		let item = {

			"email":email, 
			"password":password,
			"is_active":true}
		console.log(item)

		fetch('https://3001-bpmurray77-tabletopgame-fvm0i5i5c6i.ws-us59.gitpod.io/admin/', {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
	}



	return (
		<div class="container h-100">
    		<div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Get started</h1>
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form>
										<div class="form-group">
											<label>Email</label>
											<input valu={email} onChange={(e)=>setEmail(e.target.value)} class="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"/>
										</div>
										<div class="form-group">
											<label>Password</label>
											<input value={password} onChange={(e)=>setPassword(e.target.value)} class="form-control form-control-lg" type="password" name="password" placeholder="Enter password"/>
										</div>
										<div class="text-center mt-3">
											<button onClick={registerUser} type="button" class="btn btn-lg btn-primary">Sign up</button>
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
