import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const SuccessModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          textAlign: 'center'
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Validé!
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          voulez naviger vers libraire.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ mt: 3 }}
        >
          Fermer
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
