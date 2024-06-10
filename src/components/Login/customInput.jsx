import React from 'react';
//import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customInput: {
    /* Add your custom styles here */
    /* Example styles */
  /* Mail *//* Mail */

/* Auto layout */
display: "flex",
"flex-direction": "row",
"justify-content": "center",
"align-items": "center",
padding: "18px 24px",
gap: "16px",

width: "80vw",
height: "60px",

/* Gray/50 */
background: "#F5F9FE",
"border-radius": "14px",

/* Inside auto layout */
flex: "none",
order: 2,
"flex-grow": 0,


/* alphainvent@gmail.com */

width: "79vw",
height: "3vh",

/* Body/Large/400 */
"font-family": 'Poppins',
"font-style": "normal",
"font-weight": 400,
"font-size": "16px",
"line-height": "24px",
/* identical to box height, or 150% */

/* Gray/900 */
color: "#262626",


/* Inside auto layout */
flex: "none",
order: 0,
"flex-grow": 0,


  },
}));

const CustomInput = ({ value, onChange,type }) => {
  const classes = useStyles();

  return (
    <input
    placeholder={type}
    type="text"
      onChange={onChange}
      className={classes.customEmailInput}
    />
  );
}

export default CustomInput;
