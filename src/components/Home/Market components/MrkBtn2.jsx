import React from 'react';
import Book from '@mui/icons-material/Book';
import { Add } from '@mui/icons-material';
const MrkBtn2 = (props) => {
  return (
    <button
      style={{
       // position: 'absolute',
        width: '90vw',
        height: '6vh',
        left: '5vw',
        top: '1vh',
        background: '#3C676E',
        border: '2px solid #21B4CA',
        borderRadius: '16px',
        fontFamily: 'Epilogue',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '32px',
        color: '#FFFFFF',
        padding: '6px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        cursor: 'pointer',
      }}
      onClick={props.callback}
    >
      <span style={{justifyContent:"left", marginRight: '2vw', marginBottom:"1vh",marginLeft:"2vh" }}>
        <div style={{flexDirection:"row",height:"1vh",marginLeft:"-38vw",marginTop:"0vh"}}>
        <svg
        style={{transform: 'scaleY(-1)',marginTop:"1.5vh"}}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //xmlns="http://www.w3.org/2000/svg"
          
        >
            <Book/>
        </svg>
      </div>
     
      <text style={{marginLeft:"7vw"}}>{props.title}</text>
      </span>
      <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          
          
          //xmlns="http://www.w3.org/2000/svg"
          
        >
            <Add />
        </svg>
      
    </button>
  );
};

export default MrkBtn2;