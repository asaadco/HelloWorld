import React from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"
import StartButton from "../../Components/StartButton/Component"
import GenNickname from "../../Components/GenNickname/Component"
import InterestsFields from "../../Components/InterestsFields/Component"
import NEOMValues from "../../Components/NEOMValues/Component"
import {useNavigate} from 'react-router-dom';
import {Button, Paper, Stack, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { userContext } from '../../App';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

const config = {
  dictionaries: [starWars]
}

export default function Info(){
    const navigate = useNavigate();
    const [nickname, setNickname] = React.useState(uniqueNamesGenerator(config));
    const [interest1, setInterest1] = React.useState("");    
    const [interest2, setInterest2] = React.useState("");    
    const [interest3, setInterest3] = React.useState("");
    const [neomValue, setNEOMValue] = React.useState("");
    const [open, setDialogOpen] = React.useState(false);

  
    const handleClose = () => {
      setDialogOpen(false);
    };
    const SubmitRequest = (e) => {
        // server-side stuff hopefully here
        if(interest1.length === 0 || interest2.length === 0 || interest3.length === 0){
          setDialogOpen(true);
        }
        else if(neomValue.length === 0){
          setDialogOpen(true);
        }else{
        // send match request to server and  navigate to loading page
        navigate("/Chat");
        }
      }


    return(
     
<Stack justifyContent="center">

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Missing Information"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please fill out the missing fields! Sharing your NEOM Value and interests will allow us to improve the quality of the matchmaking process.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
<Stack direction="row" justifyContent="center" >
      <Stack>
    <h2>Choose a Nickname!</h2>
      <div Style={"display:flex;"}>
    <TextField id="filled-read-only-input outlined-name" label="Nickname" value={nickname} inputProps={{ readOnly:true, style: {textAlign: 'center'} }} variant="standard" />
    <GenNickname setNickname={setNickname}></GenNickname>
    
    </div>
    </Stack>
      </Stack>
    <Stack component={Stack} direction="row" justifyContent="center" >
    <Stack Style={"text-align:center"}>
    <h2>Tell us more about yourself...</h2>
    <InterestsFields setInterest1={setInterest1} setInterest2={setInterest2} setInterest3={setInterest3}></InterestsFields>
    </Stack>
    </Stack>

    <Stack direction="row"  justifyContent="center" >

    <Stack Style={"text-align:center"} justifyContent="center" >
    <h2>What's the most important value to you?</h2>
    <NEOMValues setNEOMValue={setNEOMValue}></NEOMValues>
      </Stack>
    </Stack>
    <Stack >
    <Stack  justifyContent="center">
      <div Style={"  display: flex; align-items: center; justify-content: center;"}>
    <img Style={"width:15em;"} src="https://media.giphy.com/media/AIl2zzcA8sNOy51gxq/giphy.gif" alt="Ready to Play?"/>
    <StartButton onClick={SubmitRequest} ></StartButton>
    </div>
    </Stack>
    </Stack>
    </Stack>
    );
}
// TO-DO: Add backdrop when trying to find a match
/*
<Button onClick={handleToggle}>Show backdrop</Button>
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>


*/