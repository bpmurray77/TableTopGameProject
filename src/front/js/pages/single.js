import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/inventory.css";

export const Single = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="parent">
			<div class="accordion" id="accordionExample">
  			<div class="accordion-item">
    			<h2 class="accordion-header" id="headingOne">
      			<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        			Stone Floor
      			</button>
    			</h2>
				<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<ul class="list-group">
							<li class="list-group-item">2x2</li>
							<li class="list-group-item">3x3</li>
							<li class="list-group-item">4x4</li>
							<li class="list-group-item">2x6</li>
							<li class="list-group-item">6x6</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="accordion-item">
    			<h2 class="accordion-header" id="headingOne">
      			<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        			Stone Walls
      			</button>
    			</h2>
				<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
					<div class="accordion-body">
						<ul class="list-group">
							<li class="list-group-item">2x2 <div class="input-group">
  							<span class="input-group-text">Quantity</span>
  							<input type="number" aria-label="Quantity" class="form-control"/>
							</div></li>
							<li class="list-group-item">3x3</li>
							<li class="list-group-item">4x4</li>
							<li class="list-group-item">2x6</li>
							<li class="list-group-item">6x6</li>
						</ul>					</div>
				</div>
			</div>
			</div>
		</div>
	);
};
