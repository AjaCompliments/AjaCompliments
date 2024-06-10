import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
  customPasswordInput: {
    /* Add your custom styles here */
    /* Example styles */
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '18px 24px',
    gap: '16px',
   // position: 'absolute',
    width: '90vw',
    height: '7vh',
    left: '0px',
    top: '186px',
    background: '#F5F9FE',
    border: '1px solid #3C676E',
    borderRadius: '14px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#3B4054',
  },
}));

const CustomPasswordInput = ({ value, onChange }) => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (<div>
    <input type={showPassword ? "text" : "password"}
 
      value={value}
      onChange={onChange}
      className={classes.customPasswordInput}
      placeholder="Password"
    > 
   
    </input>
    <IconButton onClick={handleTogglePasswordVisibility} style={{marginTop:"-9vh",marginLeft:"80vw"}}>
            <VisibilityOffIcon />
          </IconButton>
     </div>
  );
}

export default CustomPasswordInput;