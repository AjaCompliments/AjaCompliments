import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customText: {
    /* Add your custom styles here */
    /* Example styles */
/* Continuer vers mon panier */

width: "70",
height: "24px",

/* Body/Large/500 */
//"font-family": 'Poppins',
"font-style": "normal",
"font-weight": 500,
"font-size": "25px",
"line-height": "24px",
/* identical to box height, or 150% */

/* Gray/White */
color: "#FFFFFF",


/* Inside auto layout */
flex: "none",
order: 0,
"flex-grow": 0,

  },
}));

const CustomText = ({ children }) => {
  const classes = useStyles();

  return (
    <span className={classes.customText}>
      {/* You can place your custom text here */}
      {children}
    </span>
  );
}

export default CustomText;
