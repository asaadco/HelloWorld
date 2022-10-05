import React from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"

import {IconButton} from '@mui/material';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {useNavigate} from 'react-router-dom';
export default function StartButton({className,...buttonProps}){
// State Variables
const navigate = useNavigate();
const SubmitRequest = (e) => {
    // server-side stuff hopefully here
    navigate("/Chat")
    console.log("LOL")
    
  }
// Handlers

    return(
        <IconButton  sx={{margin:"1.5em"}}  aria-label="PlayCircleFilled" size="large" {...buttonProps}>
        <PlayCircleFilledIcon sx={{color:"green", fontSize: "80px" }} /></IconButton>
        
    );
}