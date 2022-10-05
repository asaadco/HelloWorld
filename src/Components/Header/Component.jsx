import React from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"
import Declarations from "../../Configuration.json"
const Headless = Declarations.Headless

export default function Header(){
    return(
        <header>

            {Headless ? (""):("Hello")}
        </header>
    );
}