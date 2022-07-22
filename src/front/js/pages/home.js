import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Tileset Generator</h1>
        <p class="col-md-8 fs-4">Create your very own maps</p>
        <button class="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>
	);
};
