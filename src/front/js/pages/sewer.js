import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/inventory.css";

export const Sewer = (props) => {
  const { store, actions } = useContext(Context);
  const [sewertile,setSewertile] = useState([]);

  const getsewerTile = () => {

    fetch(process.env.BACKEND_URL + "/api/sewertile", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
      .then(resp => {
          return resp.json(); 
      })
      .then(data => {
          console.log(data); 
          setSewertile(data.thumbnail)
      })
      
  }
  useEffect(() => {

    getsewerTile()

}, []);
  


  return (
    <div className="parent">
      <ul class="dropdown-menu d-block position-static mx-0 shadow w-220px">
        <li>
          <a
            class="dropdown-item d-flex gap-2 align-items-center"
            href="/single"
          >
            <svg class="bi" width="16" height="16"></svg>
            Basic Stone Dungeon
          </a>
        </li>
        <li>
          <a
            class="dropdown-item d-flex gap-2 align-items-center"
            href="/sewer"
          >
            <svg class="bi" width="16" height="16"></svg>
            Sewer
          </a>
        </li>
        <li>
          <a class="dropdown-item d-flex gap-2 align-items-center" href="/town">
            <svg class="bi" width="16" height="16"></svg>
            Town and Streets
          </a>
        </li>
        <li>
          <a class="dropdown-item d-flex gap-2 align-items-center" href="/ruins">
            <svg class="bi" width="16" height="16"></svg>
            Ruins
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
      </ul>
      <div class="ps-5">
        <img src={sewertile} width="200px"/>
      </div>  
      <div class="link">
        <a href="https://www.thingiverse.com/thing:922445/files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            class="bi bi-link"
          >
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
          </svg>
        </a>
        <a  class="icon" href="https://www.thingiverse.com/thing:922445/files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            class="bi bi-link"
          >
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
          </svg>
        </a>
        <a  class="icon" href="https://www.thingiverse.com/thing:922445/files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            class="bi bi-link"
          >
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
          </svg>
        </a>
        <a  class="icon" href="https://www.thingiverse.com/thing:922445/files">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            fill="currentColor"
            class="bi bi-link"
          >
            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
          </svg>
        </a>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
                Sewer Floors
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse">
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  1x1
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  1x2
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  1x3
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  1x4
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  2x2
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
                Sewer Walls
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  1x1
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  1x2
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  Concave
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  Convex
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Sewer Doors
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  1x1 Pipe Wall
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  1x2 Pipe Wall
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  1x1 Sewer Ladder
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Sewer Sluice (Drain)
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul class="list-group">
                <li class="list-group-item">
                  Striaght
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  Curve
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  End
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  T-Intersection
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
                <li class="list-group-item">
                  X-Intersection
                  <div class="input-group">
                    <span class="input-group-text">Quantity</span>
                    <input
                      type="number"
                      aria-label="Quantity"
                      class="form-control"
                    />
                  </div>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
