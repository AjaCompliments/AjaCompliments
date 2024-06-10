import React from 'react';
import { Modal, Paper, Typography, Button } from '@mui/material';

const ComplimentsModal = ({ open, handleClose, compliments }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh',marginTop:"5vh" }}>
        <Paper style={{ padding: '20px', maxWidth: '80vw', overflow: 'auto' }}>
          <Typography variant="h6">Compliments</Typography>
          {compliments.map((compliment, index) => (
            <div key={index} style={{ marginTop: '20px' }}>
              <img src={compliment.picture} alt="Compliment" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
              <div>
                <Typography variant="subtitle1">{compliment.complimentname}</Typography>
                <Typography variant="body2">Category: {compliment.category}</Typography>
                <Typography variant="body2">Temps prise: {compliment.tempsprise}</Typography>
                <Typography variant="body2">Prise: {translatePrise(compliment.prise)}</Typography>
              </div>
            </div>
          ))}
          <Button variant="contained" color="primary" onClick={handleClose} style={{ marginTop: '20px' }}>
            Fermer
          </Button>
        </Paper>
      </div>
    </Modal>
  );
};

const translatePrise = (prise) => {
  // Translate the "prise" format (e.g., "0101010") to days
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  return prise
    .split('')
    .map((char, index) => (char === '1' ? days[index] : ''))
    .filter((day) => day !== '')
    .join(', ');
};

export default ComplimentsModal;
