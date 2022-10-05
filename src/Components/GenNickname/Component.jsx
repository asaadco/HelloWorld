import React from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"

import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import {TextField, IconButton} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { userContext } from '../../App';

export default function GenNickname(props){
// State Variables
    const config = {
        dictionaries: [starWars]
    }
    let nickname = "Asaad";// Nickname, maybe need to be moved up no?

// Handlers
    const handleClick = (e) => {
        e.preventDefault();
        nickname = uniqueNamesGenerator(config);
        props.setNickname(nickname);

      }

    return(
        <div Style="display:flex;">
        <IconButton onClick={handleClick} aria-label="refresh" size="large">
        <RefreshIcon /></IconButton>
        </div>
    );
}