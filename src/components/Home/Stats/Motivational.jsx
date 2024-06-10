import React from 'react';
import { Box, Typography } from '@mui/material';

const Motivation = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '82.81vw',  // 315px converted to vw
        height: '11.67vh', // 64px converted to vh
        left: '-6.62vw',    // 10px converted to vw
       // top: '89.58vh',    // 343px converted to vh
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
       textAlign: 'justify',
      }}
    >
      <Typography
        sx={{
           alignSelf:"flex-start",
           marginLeft:"13vw",
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '5.21vw',   // 20px converted to vw
          lineHeight: '0vh', // 32px converted to vh
          color: '#2C2C2C',
        }}
      >
        Bravo !
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Epilogue',
          marginLeft:"-5vw",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '5.21vw',   // 20px converted to vw
          lineHeight: '2.5vh', // 32px converted to vh
          color: '#2C2C2C',
        }}
      >
    <br/> vous faites du progrès
      </Typography>
      
      
    </Box>
  );
};

export default Motivation;
