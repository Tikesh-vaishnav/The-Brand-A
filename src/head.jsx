import React from 'react';
import "./header.css"
import mobile from "./mobile.png"

function head(){


    return <>
        <div class="navigation">
        <img src="logo" alt="logo" />
        <h3 class="nav1">Influencer stop</h3>
        <div class="btn1">
            <button class="btn2">login</button>
            <button class="btn2">sign In</button>
        </div>
    </div>

    <div class="head">
        <div class="welcome">
            <h1>Welcome to <br />
            Influencer's Stop</h1>

            <p1> Earn money by driving traffic and prompting sales across one of India's largest and most diverse marketplaces.</p1>
        </div>

        <div class="img1">
        <img class="image1" src={mobile} alt="desing"/>
        
        </div>
    </div>
    </>
    
}

export default head;
