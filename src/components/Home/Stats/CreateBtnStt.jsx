import React from 'react';
import Book from '@mui/icons-material/Book';
import { Add ,ArrowForward} from '@mui/icons-material';
const CreateButtonStats = (props) => {
    return (
        <button
          style={{
            // zIndex:5,
           position: 'absolute',
            width: '90vw',
            height: '6vh',
            left: '6vw',
            top: '127vh',
          
            background: '#F6EDE4',
            border: '2px solid #44A5A5',
            borderRadius: '16px',
            fontFamily: 'Epilogue',
            fontStyle: 'normal',
            fontWeight: 800,
            fontSize: '20px',
            lineHeight: '32px',
            color: '#44A5A5',
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
            style={{transform: 'scaleY(-1)',marginTop:"1vh",marginLeft:"-23vw"}}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              //xmlns="http://www.w3.org/2000/svg"
              
            >
                <Book/>
            </svg>
          </div>
         
          <text style={{marginLeft:"7vw"}}>{props.title?props.title:"Créez votre profil biométrique"}</text>
          </span>
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              
              
              //xmlns="http://www.w3.org/2000/svg"
              
            >
                <ArrowForward />
            </svg>
          
        </button>
      );
    };
    
export default CreateButtonStats;
