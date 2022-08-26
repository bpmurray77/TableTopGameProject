import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/myinventory.css"

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Myinventory = () =>{
 const inventory = localStorage.getItem("Inventory")
  const newinventory = inventory.replace(/[[{}]|]|,/g, " ")
 const newerinventory = newinventory.replace(/"id"/g,"tilename")
 console.log(newerinventory)

    return(
        <div class="card">
          <h5 class="card-header">My inventory</h5>
          <div class="card-body myinventory">
            {newerinventory ? newerinventory : "No Inventory"}
          </div>
        </div>
        )




}