import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Reveal = ({header, home, signup, login}) =>{
    const { store, actions } = useContext(Context);
        return (
          <div>
            <p>
              A = Stone Floor 1x1
              B = Stone Wall 1x2
              C = Stone Floor 2x2
            </p>
          </div>
        )
      }

