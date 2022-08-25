import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Button = ({header, home, signup, login}) =>{
    const { store, actions } = useContext(Context);

    let data = sessionStorage.getItem("data");

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
            sessionStorage.setItem("data", data)
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return(
        <div class="parent">
        <div>
        {data ? data : "No Map"}
        </div>
        <div class="text-center mt-3">
            <button
            type="button"
            class="btn btn-lg btn-primary"
            onClick={Action}
            >
            Generate a Map
            </button>
        </div>
        </div>
    )
}