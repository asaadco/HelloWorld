import React from 'react';
import "./style.css";
import "animate.css";
import logo from '../../HalaWorld.gif';

export default function Welcome(){
    const isTouchDevice = () => {  
        return (('ontouchstart' in window) ||  
          (navigator.maxTouchPoints > 0) ||  
          (navigator.msMaxTouchPoints > 0));  
      }  

    return(
        <div className="welcome">
            <center>
        <img src={logo} alt="HalaSafana Logo" width="300px"/>
        <p className="quote">"The shortest distance between two people is a smile"</p><span className="qauthor">Victor Borge</span>
        <p className="subtitle animate__animated animate__flash animate__infinite infinite animate__slower"><b>
            {isTouchDevice() ? ("Tap to Continue"):("Press Space to Continue")}
            </b></p>
        </center>
        </div>
    );
}