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
						<strong>Stone Floor</strong> 
						<ul class="list-group">
							<li class="list-group-item">An item</li>
							<li class="list-group-item">A second item</li>
							<li class="list-group-item">A third item</li>
							<li class="list-group-item">A fourth item</li>
							<li class="list-group-item">And a fifth one</li>
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
						<strong>Stone Walls</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};
