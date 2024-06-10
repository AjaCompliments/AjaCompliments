/* eslint-disable no-unused-vars */


  import React, { useEffect, useState } from 'react';
  import { Box, Typography, Button, Modal } from '@mui/material';
  
  const Stats = () => {
    const topOffsetPrescMed = '-19vh'; // Offset for Presc Med
    const topOffsetATCD = '-28vh'; // Offset for ATCD
    const [user, setUser] = useState(null);
    const [bmi, setBmi] = useState(null);
    const [age, setAge] = useState(22); // Set this to the actual age when you add it
    const [openPrescMed, setOpenPrescMed] = useState(false);
    const [openATCD, setOpenATCD] = useState(false);
    const [pastPrescriptions, setPastPrescriptions] = useState([]);
    const [healthComplications, setHealthComplications] = useState([]);
  
    useEffect( () => {
      const userData = JSON.parse(localStorage.getItem('USR'));
      if (userData.pastprescriptions) {
        setUser(userData);
        const heightInMeters = userData.height / 100;
        const calculatedBmi = (userData.weight / (heightInMeters * heightInMeters)).toFixed(1);
        setBmi(calculatedBmi);
        setPastPrescriptions(userData.pastprescriptions.split(', '));
        setHealthComplications(userData.healthcomplications);//as an array
        setAge(userData.age); // Adjust as needed when you add age to localStorage
      }
    }, []);
  
    const handleOpenPrescMed = () => setOpenPrescMed(true);
    const handleClosePrescMed = () => setOpenPrescMed(false);
  
    const handleOpenATCD = () => setOpenATCD(true);
    const handleCloseATCD = () => setOpenATCD(false);
  
    return (
      <Box sx={{ position: 'absolute', width: '97.4vw', height: '51.89vh', left: '3.21vw', top: '7vh' }}>
        {/* Age */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: '0vh' }}>
          <img src={require("./AGE.png")} alt="Age Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw' ,marginLeft:"-18vw"}} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            Age
          </Typography>
        </Box>
        <Typography sx={{ position: 'absolute', width: '4.87vw', height: '4.72vh', left: '89.5vw', top: '1vh', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 700, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
          {age}
        </Typography>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: '6vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: '3vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* BMI */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: '6vh' }}>
          <img src={require("./BMI.png")} alt="BMI Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw',marginLeft:"-18vw" }} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            BMI
          </Typography>
        </Box>
        <Typography sx={{ position: 'absolute', width: '8.68vw', height: '4.72vh', left: '89.3vw', top: '7vh', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 700, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
          {bmi}
        </Typography>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: '12vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: '9vh', border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* Presc Med */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: `calc(32vh + ${topOffsetPrescMed})` }}>
          <img src={require("./prescmed.png")} alt="Presc Med Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw',marginLeft:"-18vw" }} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            Presc Med
          </Typography>
          <Button sx={{ position:"absolute",marginLeft: '59.5vw',zIndex:5,color:"#000"  }} onClick={handleOpenPrescMed}>➔</Button>
        </Box>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: `calc(38vh + ${topOffsetPrescMed})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: `calc(35vh + ${topOffsetPrescMed})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* ATCD */}
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', left: '25.8vw', top: `calc(48vh + ${topOffsetATCD})` }}>
          <img src={require("./atcd.png")} alt="ATCD Icon" style={{marginBottom:"-1.3vh", width: '10vw', marginRight: '1vw',marginLeft:"-18vw" }} />
          <Typography sx={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 400, fontSize: '4.17vw', lineHeight: '4.72vh', color: '#3F3E3E', opacity: 0.8 }}>
            ATCD
          </Typography>
          <Button sx={{ marginLeft: '56vw',zIndex:5,color:"#000" }} onClick={handleOpenATCD}>➔</Button>
        </Box>
        <Box sx={{ position: 'absolute', width: '97.4vw', height: '0vh', left: '5.21vw', top: `calc(54vh + ${topOffsetATCD})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)' }}></Box>
        <Box sx={{ position: 'absolute', width: '10.56vw', height: '0vh', left: '79.5vw', top: `calc(51vh + ${topOffsetATCD})`, border: '0.08vw solid rgba(63, 62, 62, 0.5)', transform: 'rotate(90deg)' }}></Box>
  
        {/* Presc Med Modal */}
        <Modal open={openPrescMed} onClose={handleClosePrescMed}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2">
              Past Prescriptions
            </Typography>
            {pastPrescriptions?
            <ul>
              {pastPrescriptions.map((presc, index) => (
                <li key={index}>{presc}</li>
              ))}
            </ul>:null
  }
          </Box>
        </Modal>
  
        {/* ATCD Modal */}
        <Modal open={openATCD} onClose={handleCloseATCD}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h2">
              Health Complications
            </Typography>
            {healthComplications?
            <ul>
              {healthComplications.map((comp, index) => (
                <li key={index}>{comp}</li>
              ))}
            </ul>:null
  }
          </Box>
        </Modal>
      </Box>
    );
  };
  
  export default Stats;
  