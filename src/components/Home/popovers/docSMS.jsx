import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import SmsIcon from '@mui/icons-material/Sms';
import { LINK_TO_BACKEND } from '../../../variables';

const DoctorsSmsPopover = (props) => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`http://${LINK_TO_BACKEND}:4000/doctors/getAll`);
      setDoctors(response.data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <Modal
      open={props.open}
      onClose={handleClose}
      aria-labelledby="doctors-modal-title"
      aria-describedby="doctors-modal-description"
    >
      <Box sx={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: 400, 
        bgcolor: 'background.paper', 
        border: '2px solid #000', 
        boxShadow: 24, 
        p: 4 
      }}>
        <Typography id="doctors-modal-title" variant="h6" component="h2">
          Doctors List
        </Typography>
        <List>
          {doctors.map((doctor, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${doctor.name} - ${doctor.phone}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="message" href={`sms:${doctor.phone}`}>
                  <SmsIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default DoctorsSmsPopover;
