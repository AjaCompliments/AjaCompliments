import React from 'react';
import Book from '@mui/icons-material/Book';
const MrkBtn = (props) => {
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
        justifyContent: 'left',
        cursor: 'pointer',
      }}
      onClick={props.callback}
    >
      <span style={{ marginRight: '2vw', transform: 'scaleY(-1)',marginBottom:"1vh",marginLeft:"2vh" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          //xmlns="http://www.w3.org/2000/svg"
          
        >
            <Book/>
        </svg>
      </span>
     {props.title}
    </button>
  );
};

export default MrkBtn;