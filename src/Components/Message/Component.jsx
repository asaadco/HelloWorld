import React from "react";
import { Avatar } from "@mui/material/";


export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "Anonymous";

  return (
    <>
      <div className="messageRow">
        <div>
          {/* <div className="displayName">{displayName}</div> */}
          <div className="messageBlue">
            <div>
              <p className="messageContent">{message}</p>
            </div>
            <div className="messageTimeStampRight">{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MessageRight = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className="messageRowRight">
        <div>
        {/* <div className="displayName">Roba</div> */}

      <div className="messageOrange">

        <p className="messageContent">{message}</p>
        <div className="messageTimeStampRight">{timestamp}</div>
      </div>
      </div>
    </div>
  );
};

export const SystemMsg = (props) => {
        const message = props.message ? props.message : "no message";
        return (
            <div className="messageCenter">
            <div>
            {/* <div className="displayName">Roba</div> */}
    
          <div className="messageWhite">
    
            <p className="messageContent">{message}</p>
          </div>
          </div>
        </div>


        )};








        