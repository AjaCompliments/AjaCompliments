import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
  customSearchInput: {
    /* Add your custom styles here */
    /* Example styles */
    //boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '18px 24px',
    //gap: '16px',
    position: 'absolute',
    width: '79vw',
    height: '3vh',
    //left: '0px',
    //top: '1vh',
    background: '#F5F9FE',
    border: '1px solid #3C676E',
    borderRadius: '30px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '16px',
    //lineHeight: '2vh',
    color: '#3B4054',
    marginLeft:"1.0vw",
   
    zIndex:5,
    
  },
}));

const CustomSearchBar = ({ value, onChange,callback }) => {
  const classes = useStyles();

 // const [showPassword, setShowPassword] = React.useState(false);

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

  return (<div>
    <input type="text"
 
      value={value}
      onChange={onChange}
      className={classes.customSearchInput}
      placeholder="chercher un complément"
    > 
   
    </input>
    <IconButton onClick={callback} style={{marginTop:"1.5vh",marginLeft:"80vw",zIndex:6}}>
            <SearchIcon />
          </IconButton>
     </div>
  );
}

export default CustomSearchBar;