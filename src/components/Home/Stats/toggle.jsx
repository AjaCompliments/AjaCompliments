import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ElectricBolt from '@mui/icons-material/ElectricBolt';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import NightsStay from '@mui/icons-material/NightsStay';

export default function Toggles(props) {  //should have a callback
    
  return (
    <Box sx={{ '& > :not(style)': { m: 0.1 } }}>
      <Fab disabled={props.disabled3} variant="extended" color='primary'>
        <PendingActionsIcon sx={{ mr: 0.1 }} />
        tm. reel
      </Fab>
      <Fab disabled={props.disabled1} variant="extended" color='primary'>
        <ElectricBolt sx={{ mr: 0.1 }} />
        Energie
      </Fab>
      <Fab disabled={props.disabled2}variant="extended" color='primary'>
        <NightsStay sx={{ mr: 0.1 }} />
        sommeil
      </Fab>
     
    </Box>
  );
}