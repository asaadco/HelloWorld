import React from 'react';
import "./style.css";
import "animate.css";
import logo from '../../HalaWorld.gif';

export default function Load(){


    return(
        <div className="welcome">
            <center>
        <p className="subtitle animate__animated animate__flash animate__infinite infinite animate__slower"><b>
            Loading...
            </b></p>
        </center>
        </div>
    );
}