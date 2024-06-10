import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import LogoutIcon from '@mui/icons-material/Logout';



export default function Logout(props) {  //should have a callback
    
  return (
    <Box sx={{ '& > :not(style)': { m: 0.1 } }}>
      <Fab onClick={props.callback} disabled={props.disabled2}variant="extended" color='secondary'>
        <LogoutIcon sx={{ mr: 0.1 }} />
        Logout
      </Fab>
     
    </Box>
  );
}