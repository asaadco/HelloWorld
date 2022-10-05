import React from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"

import {TextField} from '@mui/material';


export default function InterestsFields(props){
// State Variables
    



// Handlers
    const handleInterests = (e) => {
        // maybe make it so it sets the variable once?
        if(e.target.name == 1){
            props.setInterest1(e.target.value)
        }
        else if(e.target.name == 2){
            props.setInterest2(e.target.value)
        }
        else if(e.target.name == 3){
            props.setInterest3(e.target.value)


        }
    }



    return(
        <form noValidate autoComplete="off">
        <TextField name={"1"} id="standard-basic" inputProps={{style: {textAlign: 'center'}}} label="Interest #1" variant="standard" onKeyUp={handleInterests}  noValidate autoComplete="off"/>   
        <TextField name={"2"} id="standard-basic" inputProps={{style: {textAlign: 'center'}}} label="Interest #2" variant="standard"  onKeyUp={handleInterests}  noValidate autoComplete="off"/>        
        <TextField name={"3"} id="standard-basic" inputProps={{style: {textAlign: 'center'}}} label="Interest #3" variant="standard"  onKeyUp={handleInterests}  noValidate autoComplete="off"/>
        </form>
 

    );
}