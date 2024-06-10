import React from 'react';
import { Box } from '@mui/material';

const Biometr = () => {
  return (
    <Box
      borderRadius={7}
      component="img"
      src={require("./biometr.png")}  // Replace with the actual image path
      alt="biometric"
      
      sx={{
        position: 'absolute',
        width: '93vw',  // 354px converted to vw
        height: '24.12vh', // 222px converted to vh
        left: 'calc(50% - 45.09vw - 0.39vw)', // Centered horizontally
        top: '60.78vh',   // 664px converted to vh
        objectFit:"cover"
      }}
    />
  );
};

export default Biometr;