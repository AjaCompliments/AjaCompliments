import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  position: absolute;
  width: 45.1vh; /* Converted from 371px */
  height: 29.2vh; /* Converted from 192px */
  left: 5vw;
  top: -0.6vh; /* Converted from 136px */
  background: #f9f9f9; /* Fallback background color */
  border-radius: 1vh; /* Converted from 10px */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IframeComponent = (props) => {
  return (
   
      <div style={{opacity:props.opacity?"100%":"0",scale:"60%",background:"#fff",left:"0",position:"absolute",marginTop:"27vh",marginLeft:"-27vw",borderRadius:"40px"}}>
      <iframe
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        src="https://megaconfidence.github.io/bt-heart-monitor/"
        width="690" // Adjusted width for better fit
        height="450" // Adjusted height for better fit
        style={{
          zIndex:5,
          border: 'none',
          borderRadius: '1vh', // Rounded corners
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for a better look
        }}
        title="Iframe Content"
      ></iframe>
      </div>
    
  );
};

export default IframeComponent;
