import React from 'react';
import { Paper, Typography } from '@mui/material';

const InLineGridItem = (props) => {
  return (
    <Paper elevation={3} style={{ width: '23vw', height: '15vh', position: 'relative', borderRadius: '14.28px', overflow: 'hidden' }}>
      <div style={{ width: '100%', height: '70%', backgroundColor: '#D9D9D9', borderRadius: '12px', overflow: 'hidden' }}>
        <img src={props.img} alt="Image" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
      </div>
      <Typography variant="body1" style={{ position: 'absolute', bottom: '8px', left: '8px', maxWidth: '80%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {props.title}
      </Typography>
    </Paper>
  );
};

export default InLineGridItem;
