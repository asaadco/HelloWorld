import React, { useEffect } from 'react';

// import * as Declarations from "../../Configuration.json"
import "./style.css"
import Grid from '@mui/material/Grid';
import {Container, Stack, TextField, IconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SendIcon from "@mui/icons-material/Send";
import {SystemMsg, MessageLeft, MessageRight } from "../../Components/Message/Component";
import { FilePresent } from '@mui/icons-material';
import ScrollableFeed from 'react-scrollable-feed'
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import { io } from "socket.io-client";

const config = {
  dictionaries: [starWars]
}



var socket = io("ws://localhost:5000", {autoConnect: false, transports: ["websocket"]});
export default function Chat(){
  useEffect(()=>{
    socket.connect();
    
  }, [])
let Username = uniqueNamesGenerator(config);
let Room = "Room123546346";

  const [messages, setMessages] = React.useState([]);
  socket.on('recv', (...data) => {
    const outbound_msg = () => {
      return(
      <MessageRight
      key={(messages.length)+1}
      message={data[0]}
      timestamp="🥰 | 😀 | 😯 | ☹️ | 😡"
      photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
      displayName="Asaad"
      avatarDisp={true}/>
      )
    }
    setMessages([...messages, outbound_msg()])
  });

  socket.on('recv', (...data) => {
    const outbound_msg = () => {
      return(
      <MessageRight
      key={(messages.length)+1}
      message={data}
      timestamp="🥰 | 😀 | 😯 | ☹️ | 😡"
      photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
      displayName="Asaad"
      avatarDisp={true}/>
      )
    }
    setMessages([...messages, outbound_msg()])
  });


  const sendMessage = (e) => {

    e.preventDefault();

    const msg = new FormData(e.target)
    
    const new_msg = () => {
      return(
      <MessageLeft
      key={(messages.length)+1}
      message={msg.get('msg')}
      timestamp="🥰 | 😀 | 😯 | ☹️ | 😡"
      photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
      displayName="Asaad"
      avatarDisp={true}/>
      )
    }
    const outbound_msg = () => {
      return(
      <MessageRight
      key={(messages.length)+1}
      message={msg.get('msg')}
      timestamp="🥰 | 😀 | 😯 | ☹️ | 😡"
      photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
      displayName="Asaad"
      avatarDisp={true}/>
      )
    }
    setMessages([...messages, new_msg()])
    socket.emit('send', msg.get('msg'));
    e.target.reset();
  }




    

    // const classes = useStyles();    
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //   }));
    
    return(
      <div className="container" >

      <Paper className="paper" zdepth={2} >

        <Paper className="messagesBody" >
        {/* {Object.values(state).map((c,index) => {
          return (
              {c}
          );
        })} */}
          
          {/* <SystemMsg 
            message={"Describe your happy place!"}
             
          />
          <MessageLeft
            message="Hello this is Asaad."
            timestamp="MM/DD 00:00"
            photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
            displayName="Asaad"
            avatarDisp={true}
          />
          <MessageLeft
            message="What's your name?!"
            timestamp="MM/DD 00:00"
            photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
            displayName="Asaad"
            avatarDisp={false}
          />

          <MessageRight
            message="Hello! My name is Roba!"
            timestamp="MM/DD 00:00"
            photoURL="https://media.giphy.com/media/lvzdeWk12qjmM/giphy.gif"
            displayName="Roba"
            avatarDisp={false}
          />
          <MessageRight
            message="What are your hobbies?"
            timestamp="MM/DD 00:00"
            photoURL="https://media.giphy.com/media/lvzdeWk12qjmM/giphy.gif"
            displayName="Roba"
            avatarDisp={false}
          />
          <MessageLeft
            message="Flying"
            timestamp="MM/DD 00:00"
            photoURL="https://media.giphy.com/media/tHufwMDTUi20E/giphy.gif"
            displayName="Asaad"
            avatarDisp={false}
          />
          <SystemMsg 
            message={"The chat ended! They were very happy with you."}
             
          /> */}
          <ScrollableFeed>
          {messages}
          </ScrollableFeed>
        </Paper>

        <form className="wrapForm"  noValidate autoComplete="new-off" onSubmit={sendMessage}>
      <TextField name="msg" type="text" label="Type your message..." id="standard-text" className="wrapText"   noValidate autoComplete="new-off" />
      <IconButton type="submit" value="submit" variant="contained" color="primary" className="sendButton">
          <SendIcon />
        </IconButton>

      </form>
      </Paper>

      </div>
      //
        // <Box sx={{ flexGrow: 1 }}>
        // <Grid container spacing={2}>
        //   {/* <Grid item xs={3}>
        //     <Item>
        //         <h2 Style="color:black;">Rules</h2>  
        //         <div>
        //         <h3 Style={"color:black;"}>
        //         <ul>
        //         <li>Be <span Style={"color:#D61C4E"}>nice</span>, <span Style={"color:#F77E21"}>kind</span>, and <span Style={"color:#874C62"}>thoughtful</span></li>
        //         <li>Ask <span Style={"color:#2B7A0B"}>questions</span>, be <span Style={"color:#5AA318"}>curious</span>!</li>
        //         </ul>
        //         </h3>
        //         </div>
        //     </Item>
        //   </Grid> */}
        //   <Grid item xs={12}>
        //     <Item>

        //     <Stack spacing={4}>
        //         <Container>
        //         <div className="chatbox">
        //           <div class="media w-50 mb-3"><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" class="rounded-circle"/>
        //             <div class="media-body ml-3">
        //               <div class="bg-light rounded py-2 px-3 mb-2">
        //                 <p class="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
        //               </div>
        //                 <p class="small tex t-muted">12:00 PM | Aug 13</p>
        //             </div>
        //           </div>
        //         </div>
        //         </Container>

        //     </Stack>


            
            
        //     <item>                
        //         <Box>
                
        //         <TextField fullWidth label="Type your message..." id="fullWidth" />
        //         </Box>
                
        //     </item>
        //     </Item>

        //   </Grid>
          /*{ <Grid item xs={3}>
            <Item>
            <h2 Style={"color:black; margin:0px;"}>Interests</h2>
            <span Style={"color:Green; font-weight:bold;"}>Common</span>,  <span Style={"color:blue; font-weight:bold;"}>Theirs</span>, <span Style={"color:Purple; font-weight:bold;"}>Yours</span>
            <h3>
                <div>
                    <ul>
            <li Style={"color:green"}>Volleyball</li>
            <li Style={"color:green"}>Cooking</li>
            <li Style={"color:Purple"}>Skydiving</li>
                <li Style={"color:blue"}>Reddit</li>
                </ul>
                </div>
            </h3>
            </Item>
          </Grid> }


        </Grid>
      </Box>*/
    );
}