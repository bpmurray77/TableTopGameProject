import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Button } from "../component/button";
import "../../styles/gen.css"; 

export const Gnrtr = () => {
	const { store, actions } = useContext(Context);

  const myStyle={
    height:'100vh',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}

    
    const myStyle1={
      
      height:'75vh',
      backgroundImage:"url('https://steamuserimages-a.akamaihd.net/ugc/547556781788153017/3ABC673923F48EC1F68B94C321DE71B15A089A56/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true')",
      
    }

	return (
		<div class="p-5 mb-4 bg-dark rounded-3 container " style={myStyle}>
      <div class="container-fluid py-5" >
        <h1  class="display-5 fw-bold text-white">Tileset Generator:</h1>
      </div>
      <div class="text-center mt-3">
                      <Button />
                    </div>
    </div>
	);
};
