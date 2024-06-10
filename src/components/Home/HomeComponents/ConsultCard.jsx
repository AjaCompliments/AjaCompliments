import React from 'react';
import { IconButton } from '@mui/material';

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const ConsultationCard = (props) => {
  return (
    <>
     
      {/* Teal Container */}
      <div onClick={props.callback}
        style={{
         // position: 'absolute',
          width: '85vw', // Adjusted width considering the position of the elements inside
          height: '20vh',
          marginLeft: '1.5vw',
          marginTop: '36vh',
          background: '#44A5A5',
          borderRadius: '20px',
          display: 'flex',
        
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '5vw',
        }}
      >
        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
           // marginBottom: '10px',
          }}
        >
          <span style={{ fontWeight: '900', fontSize: '5vw', color: '#FFFFFF' }}>
            {props.title?props.title:"Consulter un Expert"}
          </span>
          {/* Subtext */}
          <span style={{ fontSize: '12px', color: '#FFFFFF' }}>
            {props.subtitle?props.subtitle:"Commencer une seance"}
          </span>
        </div>
        {/* Doctor's Picture */}
        <div
          style={{
            width: '40vw',
            height: '16.8vh',
            marginLeft: 'auto', // Pushes the image to the right
          }}
        >
          {/* Insert Doctor Icon */}
          <img src={require("./doctor.png")} style={{ width: '120%', height: '120%', color: '#FFFFFF',borderRadius: '20px',marginTop:"-1.7vh",marginLeft:"-8vw"}} />
        </div>
      </div>
      {/* Arrow Button */}
      <IconButton
        style={{
         position: 'absolute',
          background: 'transparent',
          left: '12%', // Adjusted left position considering the size of the icon
          bottom: '5%', // Adjusted bottom position considering the size of the icon
        }}
        onClick={props.callback}
      >
        {/* Use a Material-UI icon for the arrow */}
        {/* Replace 'ArrowIcon' with your desired arrow icon */}
        {!props.hideArrow?<ArrowForwardOutlinedIcon color='primary' />:null}
      </IconButton>
 
   </>
  );
};

export default ConsultationCard;

