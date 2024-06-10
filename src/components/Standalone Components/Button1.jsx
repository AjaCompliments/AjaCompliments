import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customComponent: {
    /* Add your custom styles here */
    /* Example styles */
  /* Button */

/* Auto layout */
display: "flex",
"flex-direction": "row",
"justify-content": "center",
"align-items": "center",
padding: "18px 24px",
gap: "85px",

//position: "relative",
width: "80vw",
 height: "4vh",
 left: "32px",
// top: "784px",

background: "#3C676E",
"border-radius": "14px",

  },
}));

const CustomButton1 = ({ children,onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.customComponent} onClick={onClick}>
      {/* You can place your custom content here */}
      {children}
    </div>
  );
}

export default CustomButton1;
