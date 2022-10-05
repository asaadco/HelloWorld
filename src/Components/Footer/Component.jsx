import React from 'react';

import Declarations from "../../Configuration.json"
import "./style.css";
const Headless = Declarations.Headless

export default function Footer(){
    return(
        <footer>
            {Headless ? (""): (
            <p>Made by <a target='_blank' rel='noopener noreferrer' href='http://asaad101.sa'>Asaad</a></p>
            )}
            
        </footer>
    )
}