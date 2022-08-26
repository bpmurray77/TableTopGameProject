import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/myinventory.css"

import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Myinventory = () =>{
 const inventory = localStorage.getItem("Inventory")
console.log(inventory)

    return(
        <div class="card">
          <h5 class="card-header">My inventory</h5>
          <div class="card-body myinventory">
            {inventory ? inventory : "No Inventory"}
          </div>
        </div>
        )




}
