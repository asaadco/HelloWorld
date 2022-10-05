import React from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"
import {Button, ButtonGroup} from '@mui/material';

export default function NEOMValues(props){
// State Variables
    const [activeButtonIndex, setActiveButtonIndex] = React.useState(null)
    const neom_vals = [
        "Care",
        "Passion",
        "Respect",
        "Curiosity",
        "Catalysts",
        "Diversity"
    ]
    
// Handlers
      const handleValues = (e, index) => {
        setActiveButtonIndex(index)
        props.setNEOMValue(neom_vals[index])
        // console.log(index)
      }

    return(
        <ButtonGroup variant="text" aria-label="text button group">
        {Object.values(neom_vals).map((c,index) => {
          return (
            <Button key={c} size = "sm"  id={index === activeButtonIndex ? "active-btn" : "inactive-btn"} variant="outline-primary" onClick={() => handleValues(c,index)}>
              {c}
            </Button>
          );
        })}
        </ButtonGroup>
    );
}