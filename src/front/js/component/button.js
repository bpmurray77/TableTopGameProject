import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Reveal } from "./reveal";

export const Button = ({header, home, signup, login}) =>{
    const { store, actions } = useContext(Context);

    let data = sessionStorage.getItem("data");
    let newdata = data.replace(/,/g," ")

    const Action = () => {
        fetch(process.env.BACKEND_URL + "/api/gnrtrfront", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((resp) => {
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            sessionStorage.setItem("data", data.tiles)
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    function refreshPage(){
        window.location.reload();
    } 



    return(
        <div class="standing">
        <div class="map">
        {newdata ? newdata : "No Map"}
        </div>
        <div class="target">
        {newdata ? <Reveal /> : "No Map"}
        </div>
        <div class="text-center mt-3">
            <button
            type="button"
            class="btn btn-lg btn-primary"
            onClick={Action}
            >
            Generate a Map
            </button>
            <button
            type="button"
            class="btn btn-lg btn-primary"
            onClick={refreshPage}
            >
            Render Map
            </button>
        </div>
        </div>
    )
}