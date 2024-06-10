import React from 'react';
import { Box, Typography } from '@mui/material';

const SelfPromotion = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '97.92vw',  // 375px converted to vw
        height: '14.84vh', // 57px converted to vh
        left: 'calc(50% - 47.96vw)', // Centered horizontally
      //  top: '155.73vh',   // 598px converted to vh
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Epilogue',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '5.21vw',   // 20px converted to vw
          lineHeight: '4.25vh', // 24px converted to vh
          color: '#2C2C2C',
        }}
      >
        Compléter votre analyse pour de meilleurs résultats
      </Typography>
    </Box>
  );
};

export default SelfPromotion;
