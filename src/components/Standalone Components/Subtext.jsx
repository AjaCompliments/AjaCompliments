import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  customText: {
 /* Vous n'avez pas de compte ? Inscrivez-vous */

//position: "absolute",
width: "309px",
height: "22px",
//left: "calc(50% - 309px/2 - 0.5px)",
top: "679px",
justifySelf:"center",
/* Body/Regular/400 */
//font-family: 'Poppins';
"font-style": "normal",
"font-weight": 400,
"font-size": "23px",
"line-height": "22px",
/* identical to box height, or 157% */

/* Gray/800 */
color: "#3B4054",


  },
}));

const CustomSubText = ({ children }) => {
  const classes = useStyles();

  return (
    <span className={classes.customText}>
      {/* You can place your custom text here */}
      {children}
    </span>
  );
}

export default CustomSubText;