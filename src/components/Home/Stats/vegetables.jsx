import React from 'react';
import { Box } from '@mui/material';

const Vegetables = () => {
  return (
    <Box
      borderRadius={7}
      component="img"
      src={require("./vegetables.bmp")}  // Replace with the actual image path
      alt="Vegetables"
      sx={{
        position: 'absolute',
        width: '93vw',  // 354px converted to vw
        height: '24.12vh', // 222px converted to vh
        left: 'calc(50% - 45.09vw - 0.39vw)', // Centered horizontally
        top: '98.78vh',   // 664px converted to vh
        objectFit:"cover"
      }}
    />
  );
};

export default Vegetables;
