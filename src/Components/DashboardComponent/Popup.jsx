import React from "react";
import './body.css';

function Popup(){
    return(
        <>
        <div className='pop' id="popup">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing e
        lit. Ab veritatis reprehenderit rem cupiditate sapiente
        unde ratione, minus optio incidunt sunt corrupti iure 
        repellat harum totam nemo soluta libero ipsum, dolor 
        in! Voluptatum quibusdam ipsa officiis.</p>
        <button onClick={toggle}>save</button>
    </div>
        </>
    )
}

export default Popup;