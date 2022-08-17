import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/inventory.css";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const getTile = () => {

      fetch('https://api.thingiverse.com/things/171315/files/?access_token=34162ed865e5d83e3d6a377af3d10dd9', {
          method: "GET",
          headers: {"Content-Type": "application/json"}
        })
        .then(resp => {
            return resp.json(); 
        })
        .then(data => {
            console.log(data); 
        })
        
    }
    useEffect(() => {

      getTile()

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
            Basic Stone Dungeon{data}
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
          <a
            class="dropdown-item d-flex gap-2 align-items-center"
            href="/ruins"
          >
            <svg class="bi" width="16" height="16"></svg>
            Ruins
          </a>
        </li>
        <li>
          <hr class="dropdown-divider" />
        </li>
      </ul>
      <div class="link">
        <a href="https://www.thingiverse.com/thing:171315/files">
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
        <a  class="icon" href="https://www.thingiverse.com/thing:178621/files">
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
        <a  class="icon" href="https://www.thingiverse.com/thing:249776/files">
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
              Stone Dungeon Floor
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
                <li class="list-group-item">
                  2x3
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
                  2x4
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
                  3x3
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
                  3x4
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
                  4x4
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
              Stone Dungeon Walls
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
                <li class="list-group-item">
                  2x3
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
                  2x4
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
                  3x3
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
                  3x4
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
                  4x4
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
              Stone Dungeon Wall Corners
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
                <li class="list-group-item">
                  3x3
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
                  4x4
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